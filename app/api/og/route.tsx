import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get("title") || "Events & Office Consultants";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#1a1a1a",
            backgroundImage:
              "linear-gradient(to bottom right, #1a1a1a, #2a2a2a)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <img
              src={`${req.nextUrl.origin}/eoc-logo.png`}
              alt="EOC Logo"
              width="600"
              height="600"
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontStyle: "normal",
              color: "transparent",
              marginTop: "20px",
              padding: "0 120px",
              textAlign: "center",
              backgroundImage:
                "linear-gradient(to bottom right, #ffffff, #cccccc)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 30,
              fontStyle: "normal",
              color: "#cccccc",
              marginTop: "20px",
              padding: "0 120px",
              textAlign: "center",
            }}
          >
            Personalized Staffing Experience
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
