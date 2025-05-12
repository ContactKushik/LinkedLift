// app/api/rewrite/route.js
import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req) {
  const apiKey = process.env.GEMINI_API_KEY;
  return NextResponse.json({ message: "Hello from the API!" });
}

// Configure CORS middleware
const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // For production, you might want to restrict this to LinkedIn domains
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Origin",
};

// Handle OPTIONS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req) {
  try {
    const { input, tone } = await req.json();

    if (!input || typeof input !== "string" || !tone) {
      return NextResponse.json(
        { error: "Invalid input or tone" },
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Missing API key" },
        { status: 500, headers: corsHeaders }
      );
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const prompt = `
You are a helpful assistant skilled at rewriting LinkedIn posts.
Your job is to rewrite the following post keeping the meaning of the post same and all mentioning all details intact in a ${tone} tone.
Avoid starting with generic phrases like "Thrilled to", "Excited to", or "Pleased to". Use a more human, relatable, and authentic tone.
Keep it short, engaging, professional, and suitable for LinkedIn.

Original Post:
"${input}"

Rewritten (${tone} tone):
`;

    const body = {
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
    };

    const response = await axios.post(apiUrl, body, {
      headers: { "Content-Type": "application/json" },
    });

    const rewritten =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "Rewrite failed.";

    return NextResponse.json({ rewritten }, { headers: corsHeaders });
  } catch (error) {
    console.error("Gemini API error:", error?.response?.data || error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
