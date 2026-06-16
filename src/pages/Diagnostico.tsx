import { useEffect } from "react";

export default function Diagnostico() {
  useEffect(() => {
    document.title = "Diagnóstico gratuito — Fluxrow";
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex,nofollow";
    document.head.appendChild(robots);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      robots.remove();
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <iframe
      src="/diagnostico.html"
      title="Diagnóstico Fluxrow"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: "none",
        background: "#050505",
        zIndex: 9999,
      }}
    />
  );
}
