"use client";

import { useState } from "react";

export default function IPad() {
  const FRAME_W = 540;
  const FRAME_H = 408;
  const SCREEN_W = 500;
  const SCREEN_H = 366;

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

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
      <div
        className="fade-up device-ipad"
        style={{ animationDelay: "380ms", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {/* iPad frame - landscape */}
        <div
          onClick={openModal}
          className="xl:cursor-default"
          style={{
            width: FRAME_W,
            height: FRAME_H,
            background: "linear-gradient(160deg, #3a3a3a 0%, #252525 100%)",
            borderRadius: 30,
            border: "1.5px solid rgba(255,255,255,0.13)",
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.85), 0 36px 90px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.14)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            cursor: "pointer",
          }}
        >
          {/* Camera - right side, centered vertically */}
          <div
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#1a1a1a",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          />

          {/* Power button - top edge */}
          <div
            style={{
              position: "absolute",
              top: -2,
              right: 80,
              width: 40,
              height: 3,
              background: "#1e1e1e",
              borderRadius: "2px 2px 0 0",
            }}
          />

          {/* Volume buttons - left edge */}
          <div style={{ position: "absolute", left: -2, top: 110, width: 3, height: 28, background: "#1e1e1e", borderRadius: "2px 0 0 2px" }} />
          <div style={{ position: "absolute", left: -2, top: 148, width: 3, height: 28, background: "#1e1e1e", borderRadius: "2px 0 0 2px" }} />

          {/* Screen */}
          <div
            style={{
              width: SCREEN_W,
              height: SCREEN_H,
              borderRadius: 18,
              overflow: "hidden",
              background: "#f2f2f7",
              position: "relative",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
            }}
          >
            {/* iOS status bar */}
            <div
              style={{
                height: 24,
                background: "rgba(242,242,247,0.95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 16,
                paddingRight: 14,
                flexShrink: 0,
                fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, color: "#000" }}>9:41</span>
              <div style={{ display: "flex", gap: 5, alignItems: "center" }}>
                <svg width="14" height="10" viewBox="0 0 17 12" fill="#000">
                  <rect x="0" y="5" width="3" height="7" rx="1" opacity="0.3"/>
                  <rect x="4.5" y="3.5" width="3" height="8.5" rx="1" opacity="0.5"/>
                  <rect x="9" y="1.5" width="3" height="10.5" rx="1" opacity="0.75"/>
                  <rect x="13.5" y="0" width="3" height="12" rx="1"/>
                </svg>
                <svg width="13" height="10" viewBox="0 0 20 15" fill="#000">
                  <path d="M10 12a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                  <path d="M10 7.5c1.8 0 3.4.73 4.6 1.9l1.4-1.4A8.45 8.45 0 0010 5.5a8.45 8.45 0 00-6 2.5l1.4 1.4A6.45 6.45 0 0110 7.5z" opacity="0.6"/>
                  <path d="M10 3.5c3 0 5.7 1.22 7.7 3.2l1.4-1.4A13.4 13.4 0 0010 1.5 13.4 13.4 0 00.9 5.3l1.4 1.4A11.4 11.4 0 0110 3.5z" opacity="0.3"/>
                </svg>
                <svg width="20" height="10" viewBox="0 0 26 13" fill="#000">
                  <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="#000" strokeOpacity="0.35" fill="none"/>
                  <rect x="1.5" y="1.5" width="18" height="10" rx="2.5"/>
                  <rect x="23" y="4" width="2.5" height="5" rx="1.2" opacity="0.4"/>
                </svg>
              </div>
            </div>

            {/* App content */}
            <div
              style={{
                flex: 1,
                height: SCREEN_H - 24,
                display: "flex",
                fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
                WebkitFontSmoothing: "antialiased",
              } as React.CSSProperties}
            >
              {/* Left - photo */}
              <div
                style={{
                  width: 180,
                  background: "linear-gradient(160deg, #1a1a2e 0%, #0f1623 100%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 12,
                  padding: "20px 16px",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "3px solid rgba(255,255,255,0.18)",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                    flexShrink: 0,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/headshot.jpg"
                    alt="Isidoro Flores"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </div>

                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "white", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                    Isidoro Flores
                  </p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>
                    iOS Developer
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
                  {[
                    { icon: "📱", label: "Swift" },
                    { icon: "⚽", label: "Soccer" },
                    { icon: "☕", label: "Coffee" },
                  ].map((t) => (
                    <div
                      key={t.label}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        padding: "5px 10px",
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <span style={{ fontSize: 12 }}>{t.icon}</span>
                      <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - about text */}
              <div
                style={{
                  flex: 1,
                  background: "#f2f2f7",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "24px 26px",
                }}
              >
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "#8e8e93", marginBottom: 14, textTransform: "uppercase" }}>
                  About Me
                </p>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "#000", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: 14 }}>
                  Hello everyone 👋
                </h2>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#3a3a3c", letterSpacing: "-0.01em" }}>
                  I&apos;m <strong style={{ color: "#000" }}>Isidoro Flores</strong>, a first-gen CS senior at{" "}
                  <strong style={{ color: "#000" }}>Cal State LA</strong> and an iOS developer with two wellness
                  apps on the App Store:{" "}
                  <strong style={{ color: "#000" }}>MindDose</strong> and{" "}
                  <strong style={{ color: "#000" }}>Sugora</strong>.
                </p>
                <p style={{ fontSize: 13.5, lineHeight: 1.65, color: "#3a3a3c", letterSpacing: "-0.01em", marginTop: 10 }}>
                  I care about building polished, human-centered iOS experiences,{" "}
                  <strong style={{ color: "#000" }}>accessibility tooling</strong>, and Swift apps that just{" "}
                  <em>feel right</em>. Off the clock, you&apos;ll catch me at a new cafe or watching soccer. ⚽☕
                </p>
                <div
                  style={{
                    position: "absolute",
                    bottom: 6,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 100,
                    height: 4,
                    borderRadius: 2,
                    background: "rgba(0,0,0,0.18)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hint - mobile only */}
        <p className="stacked-only" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.25)", marginTop: 12, letterSpacing: "0.01em" }}>
          tap to view
        </p>
      </div>

      {/* Full-screen About modal */}
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
              maxWidth: 480,
              borderRadius: 24,
              overflow: "hidden",
              background: "linear-gradient(160deg, #1a1a2e 0%, #0f1623 100%)",
              transform: visible ? "scale(1) translateY(0)" : "scale(0.9) translateY(24px)",
              opacity: visible ? 1 : 0,
              transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease",
              boxShadow: "0 40px 120px rgba(0,0,0,0.85)",
            }}
          >
            {/* Header */}
            <div style={{ padding: "32px 28px 24px", display: "flex", gap: 20, alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", overflow: "hidden", border: "3px solid rgba(255,255,255,0.18)", boxShadow: "0 8px 28px rgba(0,0,0,0.5)", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/headshot.jpg" alt="Isidoro Flores" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div>
                <h2 style={{ fontSize: 22, fontWeight: 700, color: "white", letterSpacing: "-0.03em", lineHeight: 1.2 }}>Isidoro Flores</h2>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>iOS Developer</p>
                <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
                  {[{ icon: "📱", label: "Swift" }, { icon: "⚽", label: "Soccer" }, { icon: "☕", label: "Coffee" }].map((t) => (
                    <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 10, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span style={{ fontSize: 12 }}>{t.icon}</span>
                      <span style={{ fontSize: 11.5, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: "24px 28px 32px" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: 16 }}>About Me</p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em", marginBottom: 14 }}>
                I&apos;m <strong style={{ color: "white" }}>Isidoro Flores</strong>, a first-gen CS senior at{" "}
                <strong style={{ color: "white" }}>Cal State LA</strong> and an iOS developer with two wellness
                apps on the App Store: <strong style={{ color: "white" }}>MindDose</strong> and{" "}
                <strong style={{ color: "white" }}>Sugora</strong>.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.82)", letterSpacing: "-0.01em" }}>
                I care about building polished, human-centered iOS experiences,{" "}
                <strong style={{ color: "white" }}>accessibility tooling</strong>, and Swift apps that just{" "}
                <em>feel right</em>. Off the clock, you&apos;ll catch me at a new cafe or watching soccer. ⚽☕
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
