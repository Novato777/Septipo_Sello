import { ImageResponse } from "next/og";

// Imagen de marca para redes sociales al compartir el enlace.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080407",
          color: "#e7e2da",
        }}
      >
        <svg width="200" height="200" viewBox="0 0 100 100">
          <g
            fill="none"
            stroke="#e3b04b"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <circle cx="50" cy="50" r="47" />
            <circle cx="50" cy="50" r="40" />
            <path d="M50 8 L62 86 L5 36 L95 36 L38 86 Z" />
            <circle cx="50" cy="50" r="16" />
          </g>
        </svg>
        <div
          style={{
            marginTop: 40,
            fontSize: 70,
            letterSpacing: 8,
            color: "#e3b04b",
            textTransform: "uppercase",
          }}
        >
          El Séptimo Sello
        </div>
        <div style={{ marginTop: 16, fontSize: 30, color: "#a8a29e" }}>
          Brujería Mayor · Amarres · Limpias · Tarot
        </div>
      </div>
    ),
    { ...size }
  );
}
