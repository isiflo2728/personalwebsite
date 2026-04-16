"use client";

import { useEffect, useState } from "react";

interface ContactSheetProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactSheet({ open, onClose }: ContactSheetProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setClosing(false);
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setClosing(true);
      setVisible(false);
      const t = setTimeout(() => { setMounted(false); setClosing(false); }, 240);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!mounted) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "flex-end",
        background: visible ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        transition: closing ? "background 0.24s ease-in" : "background 0.22s ease",
        borderRadius: 46,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "20px 20px 0 0",
          background: "linear-gradient(160deg, #1c1c2a 0%, #18181f 100%)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingBottom: 20,
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: closing
            ? "transform 0.24s cubic-bezier(0.4, 0, 1, 1)"
            : "transform 0.32s cubic-bezier(0.34, 1.2, 0.64, 1)",
        }}
      >
        {/* Handle */}
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 4px" }}>
          <div style={{ width: 32, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} />
        </div>

        <div style={{ padding: "10px 18px 0" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "linear-gradient(145deg, #43d65a, #30c248)",
                boxShadow: "0 4px 14px rgba(48,194,72,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
                <path d="M16 4C9.373 4 4 8.925 4 15c0 3.37 1.56 6.386 4.05 8.5L7 28l5.2-2.6A13.3 13.3 0 0016 26c6.627 0 12-4.925 12-11S22.627 4 16 4z" fill="white" />
              </svg>
            </div>
            <div>
              <h2 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em" }}>Get in touch</h2>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 1, whiteSpace: "nowrap" }}>Isidoro Flores · iOS Developer</p>
            </div>
          </div>

          {/* Contact rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <a
              href="mailto:floresisidoro30@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                color: "white",
                transition: "background 0.15s",
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(145deg, #147CE5, #0051A8)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="17" height="14" viewBox="0 0 20 16" fill="white">
                  <path d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z" />
                </svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: 13, fontWeight: 600 }}>Email</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>floresisidoro30@gmail.com</p>
              </div>
              <svg width="6" height="10" viewBox="0 0 7 12" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.8">
                <path d="M1 1l5 5-5 5" />
              </svg>
            </a>

            <a
              href="https://github.com/isiflo2728"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
                color: "white",
                transition: "background 0.15s",
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: 9, background: "linear-gradient(145deg, #2d2d2d, #1a1a1a)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600 }}>GitHub</p>
                <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>isiflo2728</p>
              </div>
              <svg width="6" height="10" viewBox="0 0 7 12" fill="none" stroke="white" strokeOpacity="0.3" strokeWidth="1.8">
                <path d="M1 1l5 5-5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
