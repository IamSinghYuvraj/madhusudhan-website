import { NextResponse } from "next/server";

// Define runtime configuration for better performance
export const dynamic = "force-dynamic";
export const runtime = "edge";

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}

export async function POST(req) {
  try {
    const payload = await req.json();

    // Make sure environment variables are available
    const apiUrl = process.env.NEXT_PUBLIC_DATASTAX_API;
    const apiToken = process.env.NEXT_PUBLIC_DATASTAX_TOKEN;

    if (!apiUrl || !apiToken) {
      console.error(
        "Missing environment variables: NEXT_PUBLIC_DATASTAX_API or NEXT_PUBLIC_DATASTAX_TOKEN"
      );
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const apiResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error(
        `API responded with status ${apiResponse.status}: ${errorText}`
      );
      return NextResponse.json(
        {
          error: errorText || `API responded with status ${apiResponse.status}`,
        },
        { status: apiResponse.status }
      );
    }

    const data = await apiResponse.json();

    return NextResponse.json(data, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
