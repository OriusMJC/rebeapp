import s from "@/styles/Button.module.css";
import { CSSProperties, ReactNode } from "react";

export default function Button({
  children,
  ancor,
  link,
  href,
  bg,
  font = "font-subtitle-2",
  style,
}: {
  children: ReactNode;
  ancor?: boolean;
  link?: boolean;
  href?: string;
  bg?: "solid" | "transparent";
  font?: string;
  style?: CSSProperties;
}) {
  if (link || ancor)
    return (
      <a
        href={href || "/"}
        target="_blank"
        style={style}
        className={`${font} ${s.Button} ${
          bg === "transparent" && s.BgTransparent
        }`}
        rel="noreferrer"
      >
        {children}
      </a>
    );
  return (
    <button
      style={style}
      className={`${font} ${s.Button} ${
        bg === "transparent" && s.BgTransparent
      }`}
    >
      {children}
    </button>
  );
}
