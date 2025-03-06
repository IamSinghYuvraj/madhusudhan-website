// app/api/proxy/route.js
import { NextResponse } from "next/server";

export async function OPTIONS() {
  // Set CORS headers for preflight requests
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return new NextResponse(null, { headers });
}

export async function POST(req) {
  try {
    // Parse the incoming request payload
    const payload = await req.json();

    // Log the request payload for debugging
    console.log("Request payload:", payload);

    // Forward the request to the external API
    const apiResponse = await fetch(process.env.NEXT_PUBLIC_DATASTAX_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATASTAX_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // Handle non-OK responses from the external API
    if (!apiResponse.ok) {
      const errorData = await apiResponse.text();
      throw new Error(errorData || "Failed to fetch data from the API");
    }

    // Parse the response from the external API
    const data = await apiResponse.json();

    // Log the API response for debugging
    console.log("API response:", data);

    // Return the response to the client
    return NextResponse.json(data);
  } catch (error) {
    // Log any errors that occur during the process
    console.error("Proxy error:", error);

    // Return a 500 error response to the client
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
