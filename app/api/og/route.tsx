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
            backgroundColor: "#F3978A",
            backgroundImage: "linear-gradient(135deg, #F3978A, #f5a799)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "12px",
            }}
          >
            <img
              src={`${req.nextUrl.origin}/eoc-logo.png`}
              alt="EOC Logo"
              width="600"
              height="600"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontStyle: "normal",
              color: "white",
              marginTop: "12px",
              padding: "0 120px",
              textAlign: "center",
              fontWeight: 600,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              fontStyle: "normal",
              color: "white",
              marginTop: "12px",
              padding: "0 120px",
              textAlign: "center",
              opacity: 0.9,
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
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
