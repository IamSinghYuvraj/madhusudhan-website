// app/api/proxy/route.js
"use server"
import { NextResponse } from "next/server";

export async function OPTIONS() {
  const headers = new Headers();
  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

  return new NextResponse(null, { headers });
}

export async function POST(req) {
  try {
    const payload = await req.json();
    console.log("Request payload:", payload);

    const apiUrl = process.env.NEXT_PUBLIC_DATASTAX_API;
    const apiToken = process.env.NEXT_PUBLIC_DATASTAX_TOKEN;

    if (!apiUrl || !apiToken) {
      throw new Error("Missing API URL or token in environment variables.");
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
      console.error("API Error:", errorText);
      return NextResponse.json(
        { error: errorText || "Failed to fetch data from the API" },
        { status: apiResponse.status }
      );
    }

    const data = await apiResponse.json();
    console.log("API response:", data);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
