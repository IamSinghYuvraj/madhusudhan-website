import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const payload = await req.json();

    const apiResponse = await fetch(process.env.NEXT_PUBLIC_DATASTAX_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATASTAX_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.text();
      throw new Error(errorData || "Failed to fetch data from the API");
    }

    const data = await apiResponse.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
