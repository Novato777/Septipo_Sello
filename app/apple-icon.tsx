import { ImageResponse } from "next/og";

// Ícono para iOS / bookmarks: sigilo dorado sobre negro.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        <svg width="150" height="150" viewBox="0 0 100 100">
          <g
            fill="none"
            stroke="#e3b04b"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <circle cx="50" cy="50" r="46" />
            <circle cx="50" cy="50" r="39" />
            <path d="M50 12 L61 84 L7 38 L93 38 L39 84 Z" />
            <circle cx="50" cy="50" r="16" />
          </g>
        </svg>
      </div>
    ),
    { ...size }
  );
}
