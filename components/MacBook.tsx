"use client";

import { useState } from "react";

const SCREEN_W = 560;
const SCREEN_H = 352;

function Icon({ type }: { type: string }) {
  if (type === "recents") return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6.3" stroke="#8e8e93" strokeWidth="1.4"/>
      <path d="M8 5v3.5l2 1.2" stroke="#8e8e93" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  if (type === "shared") return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="6.5" r="2.5" stroke="#8e8e93" strokeWidth="1.3"/>
      <path d="M1 13.5c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="#8e8e93" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="12" cy="5.5" r="2" stroke="#8e8e93" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  );
  if (type === "apps") return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="#147CE5">
      <rect x="1.5" y="1.5" width="5" height="5" rx="1.4"/>
      <rect x="9.5" y="1.5" width="5" height="5" rx="1.4"/>
      <rect x="1.5" y="9.5" width="5" height="5" rx="1.4"/>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1.4"/>
    </svg>
  );
  if (type === "downloads") return (
    <svg width="13" height="13" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" fill="#147CE5"/>
      <path d="M8 4.5v5M5.5 7.5l2.5 2.5 2.5-2.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );
  if (type === "desktop") return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="2" width="14" height="9" rx="1.5" stroke="#5ac8fa" strokeWidth="1.3"/>
      <path d="M5 13.5h6M8 11v2.5" stroke="#5ac8fa" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
  // docs / default
  return (
    <svg width="12" height="13" viewBox="0 0 14 16" fill="none">
      <path d="M2 1.5h7.5L12 4v10.5H2V1.5z" fill="#147CE5" opacity="0.9"/>
      <path d="M9.5 1.5V4H12" stroke="white" strokeWidth="0.8" strokeLinejoin="round" opacity="0.4"/>
      <path d="M4 7h6M4 9.5h6M4 12h4" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

function FileIcon({ ext, color }: { ext: string; color: string }) {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
      <path d="M1 2a1 1 0 011-1h8.5L14 4.5V16a1 1 0 01-1 1H2a1 1 0 01-1-1V2z" fill={color} opacity="0.88"/>
      <path d="M10.5 1v3.5H14" stroke="white" strokeWidth="0.7" strokeLinejoin="round" opacity="0.35"/>
      {ext && (
        <text x="8" y="13.5" textAnchor="middle" fill="white" fontSize="4.2" fontWeight="700" fontFamily="-apple-system,sans-serif" opacity="0.85" letterSpacing="-0.2">
          {ext}
        </text>
      )}
    </svg>
  );
}

function FinderWindow({ onOpen }: { onOpen: () => void }) {
  const sidebar = [
    { type: "recents", label: "Recents" },
    { type: "shared", label: "Shared" },
    { type: "apps", label: "Applications" },
    { type: "downloads", label: "Downloads", active: true },
    { type: "desktop", label: "Desktop" },
    { type: "docs", label: "Documents" },
  ];

  const files: { name: string; ext: string; color: string; selected?: boolean }[] = [
    { name: "IMG_1594.HEIC", ext: "", color: "#5ac8fa" },
    { name: "IMG_1595.HEIC", ext: "", color: "#5ac8fa" },
    { name: "IsidoroFlore...Updated.pdf", ext: "PDF", color: "#ff3b30", selected: true },
    { name: "Requirements Notes 1.docx", ext: "DOC", color: "#147CE5" },
    { name: "ScreenRecor...27_1.mov", ext: "MOV", color: "#af52de" },
    { name: "Screenshot...58 PM.png", ext: "", color: "#5ac8fa" },
    { name: "Screenshot...31 PM.png", ext: "", color: "#5ac8fa" },
  ];

  return (
    <div
      onClick={onOpen}
      style={{
        width: "100%",
        height: "100%",
        background: "#1c1c1e",
        borderRadius: 8,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
        cursor: "pointer",
        WebkitFontSmoothing: "antialiased",
      } as React.CSSProperties}
    >
      {/* Title bar */}
      <div style={{ height: 38, background: "#2c2c2e", borderBottom: "1px solid rgba(0,0,0,0.55)", display: "flex", alignItems: "center", paddingLeft: 12, flexShrink: 0 }}>
        {/* Traffic lights */}
        <div style={{ display: "flex", gap: 7 }}>
          {(["#ff5f57","#febc2e","#28c840"] as string[]).map((c) => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>
        {/* Nav */}
        <div style={{ display: "flex", gap: 3, marginLeft: 16 }}>
          {["‹","›"].map((ch) => (
            <div key={ch} style={{ width: 26, height: 20, borderRadius: 5, background: "rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1 }}>
              {ch}
            </div>
          ))}
        </div>
        {/* Title */}
        <span style={{ flex: 1, textAlign: "center", fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em", marginRight: 70 }}>
          Downloads
        </span>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Sidebar */}
        <div style={{ width: 140, background: "#232325", borderRight: "1px solid rgba(0,0,0,0.45)", padding: "10px 0", flexShrink: 0 }}>
          <p style={{ fontSize: 9.5, fontWeight: 700, color: "rgba(255,255,255,0.28)", padding: "0 12px 5px", letterSpacing: "0.06em" }}>
            FAVORITES
          </p>
          {sidebar.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "4.5px 10px",
                margin: "0 4px",
                borderRadius: 5,
                background: item.active ? "rgba(255,255,255,0.09)" : "transparent",
              }}
            >
              <Icon type={item.type} />
              <span style={{ fontSize: 11.5, color: item.active ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.65)", fontWeight: item.active ? 500 : 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* File list */}
        <div style={{ width: 196, borderRight: "1px solid rgba(0,0,0,0.45)", padding: "6px 0", flexShrink: 0 }}>
          <p style={{ fontSize: 9.5, fontWeight: 600, color: "rgba(255,255,255,0.28)", padding: "0 12px 4px", letterSpacing: "0.03em" }}>
            Previous 7 Days
          </p>
          {files.map((f) => (
            <div
              key={f.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "4px 10px",
                margin: "1px 4px",
                borderRadius: 5,
                background: f.selected ? "#0a58ca" : "transparent",
              }}
            >
              <FileIcon ext={f.ext} color={f.color} />
              <span style={{ fontSize: 11, color: f.selected ? "white" : "rgba(255,255,255,0.78)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: 1.3 }}>
                {f.name}
              </span>
            </div>
          ))}
        </div>

        {/* Preview panel */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "14px 12px 10px", gap: 8, overflow: "hidden" }}>
          {/* PDF thumbnail */}
          <div style={{ width: "100%", flex: 1, background: "#fff", borderRadius: 4, overflow: "hidden", boxShadow: "0 3px 14px rgba(0,0,0,0.55)" }}>
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
              style={{ width: "100%", height: "100%", border: "none", display: "block", pointerEvents: "none" }}
              title="Resume preview"
            />
          </div>
          {/* File info */}
          <div style={{ textAlign: "center", flexShrink: 0 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.82)", marginBottom: 2 }}>
              IsidoroFloresNewGradUpdated.pdf
            </p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.38)" }}>PDF document · 93 KB</p>
          </div>
        </div>
      </div>

      {/* Path bar */}
      <div style={{ height: 22, background: "#242426", borderTop: "1px solid rgba(0,0,0,0.45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <span style={{ fontSize: 9.5, color: "rgba(255,255,255,0.3)", letterSpacing: "0.01em" }}>
          Downloads › IsidoroFloresNewGradUpdated.pdf
        </span>
      </div>
    </div>
  );
}

export default function MacBook() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openModal = () => {
    setOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setOpen(false), 350);
  };

  return (
    <>
      <div className="fade-up device-macbook" style={{ animationDelay: "360ms", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={openModal}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            transform: hovered ? "scale(1.013) translateY(-2px)" : "scale(1) translateY(0)",
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Screen bezel */}
          <div
            style={{
              width: SCREEN_W + 26,
              borderRadius: "14px 14px 6px 6px",
              background: "linear-gradient(175deg, #3e3e3e 0%, #2b2b2b 100%)",
              borderTop: "1.5px solid rgba(255,255,255,0.15)",
              borderLeft: "1.5px solid rgba(255,255,255,0.12)",
              borderRight: "1.5px solid rgba(255,255,255,0.12)",
              borderBottom: "none",
              padding: "14px 13px 10px",
              position: "relative",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), 0 28px 70px rgba(0,0,0,0.75)",
            }}
          >
            {/* Camera */}
            <div style={{ position: "absolute", top: 6, left: "50%", transform: "translateX(-50%)", width: 7, height: 7, borderRadius: "50%", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.06)" }} />

            {/* Screen glass */}
            <div style={{ width: SCREEN_W, height: SCREEN_H, borderRadius: 5, overflow: "hidden", position: "relative", boxShadow: "0 0 0 1px rgba(0,0,0,0.85)" }}>
              <FinderWindow onOpen={openModal} />

              {/* Screen glare */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(130deg, rgba(255,255,255,0.03) 0%, transparent 45%)", pointerEvents: "none" }} />

              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.38)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  opacity: hovered ? 1 : 0,
                  transition: "opacity 0.22s ease",
                  pointerEvents: "none",
                }}
              >
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,0.14)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </div>
                <span style={{ color: "white", fontSize: 13.5, fontWeight: 600, letterSpacing: "-0.01em" }}>Open Resume</span>
              </div>
            </div>
          </div>

          {/* Chin */}
          <div style={{ width: SCREEN_W + 26, height: 12, background: "linear-gradient(180deg, #2b2b2b 0%, #252525 100%)", borderTop: "none", borderLeft: "1.5px solid rgba(255,255,255,0.1)", borderRight: "1.5px solid rgba(255,255,255,0.1)", borderBottom: "1.5px solid rgba(255,255,255,0.08)", borderRadius: "0 0 4px 4px" }} />

          {/* Stand neck */}
          <div style={{ width: 90, height: 40, background: "linear-gradient(180deg, #2e2e2e 0%, #272727 100%)", borderLeft: "1.5px solid rgba(255,255,255,0.08)", borderRight: "1.5px solid rgba(255,255,255,0.08)" }} />

          {/* Base */}
          <div style={{ width: 240, height: 12, background: "linear-gradient(180deg, #303030 0%, #282828 100%)", borderRadius: 6, border: "1.5px solid rgba(255,255,255,0.09)", boxShadow: "0 6px 20px rgba(0,0,0,0.6)" }} />
        </div>

        <p style={{ fontSize: 11.5, color: "rgba(255,255,255,0.25)", marginTop: 14, letterSpacing: "0.01em" }}>
          click to open resume
        </p>
      </div>

      {/* Full-screen modal */}
      {open && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: visible ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0)",
            transition: "background 0.3s ease",
            padding: 24,
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: 18,
              right: 22,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.09)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.25s ease",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round">
              <path d="M1 1l11 11M12 1L1 12"/>
            </svg>
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 840,
              height: "88vh",
              borderRadius: 10,
              overflow: "hidden",
              transform: visible ? "scale(1) translateY(0)" : "scale(0.9) translateY(24px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease",
              boxShadow: "0 40px 120px rgba(0,0,0,0.85)",
            }}
          >
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
              style={{ width: "100%", height: "100%", border: "none", display: "block" }}
              title="Isidoro Flores Resume"
            />
          </div>
        </div>
      )}
    </>
  );
}
