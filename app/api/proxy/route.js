// app/api/proxy/route.js
import { NextResponse } from "next/server";

export async function POST(req) {
  const { method, headers, body } = req;

  try {
    // Forward the request to the Langflow API
    const apiResponse = await fetch(
      process.env.NEXT_PUBLIC_DATASTAX_API, // Use the Langflow API endpoint
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATASTAX_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(await req.json()),
      }
    );

    // Check if the API response is successful
    if (!apiResponse.ok) {
      const errorData = await apiResponse.text();
      throw new Error(errorData || "Failed to fetch data from the API");
    }

    // Parse the API response
    const data = await apiResponse.json();

    // Send the API response back to the frontend
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
