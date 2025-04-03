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
            backgroundImage: "linear-gradient(135deg, #F3978A, #f5a99e)",
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
              width="400"
              height="400"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 60,
              fontStyle: "normal",
              color: "white",
              marginTop: "20px",
              padding: "0 120px",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              fontStyle: "normal",
              color: "rgba(255, 255, 255, 0.9)",
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
