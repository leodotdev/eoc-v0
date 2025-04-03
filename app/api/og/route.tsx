import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Loading Inter font
const interRegular = fetch(
  new URL(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
  )
).then((res) => res.arrayBuffer());

const interSemiBold = fetch(
  new URL(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2"
  )
).then((res) => res.arrayBuffer());

export async function GET(req: NextRequest) {
  try {
    const [interRegularData, interSemiBoldData] = await Promise.all([
      interRegular,
      interSemiBold,
    ]);

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
            gap: "32px",
            padding: "64px",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={`${req.nextUrl.origin}/eoc-logo.png`}
              alt="EOC Logo"
              width="300"
              height="300"
              style={{
                objectFit: "contain",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 60,
                color: "white",
                textAlign: "center",
                fontWeight: 600,
                maxWidth: "900px",
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </div>
            <div
              style={{
                fontSize: 32,
                color: "rgba(255, 255, 255, 0.9)",
                textAlign: "center",
                letterSpacing: "-0.01em",
              }}
            >
              Personalized Staffing Experience
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: interRegularData,
            weight: 400,
            style: "normal",
          },
          {
            name: "Inter",
            data: interSemiBoldData,
            weight: 600,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
