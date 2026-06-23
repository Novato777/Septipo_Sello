import { ImageResponse } from "next/og";

// Favicon de la marca: sigilo dorado sobre negro (reemplaza el de Next).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080407",
        }}
      >
        <svg width="58" height="58" viewBox="0 0 100 100">
          <g
            fill="none"
            stroke="#e3b04b"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <circle cx="50" cy="50" r="46" />
            <path d="M50 12 L61 84 L7 38 L93 38 L39 84 Z" />
            <circle cx="50" cy="50" r="16" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
