"use client";

import { useState, useEffect } from "react";
import type { iTunesApp } from "@/types";
import AppModal from "./AppModal";
import ContactSheet from "./ContactSheet";

interface IPhoneProps {
  apps: iTunesApp[];
}

function Clock() {
  const [time, setTime] = useState("9:41");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = d.getHours() % 12 || 12;
      const m = String(d.getMinutes()).padStart(2, "0");
      setTime(`${h}:${m}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "-0.02em" }}>{time}</span>;
}

export default function IPhone({ apps }: IPhoneProps) {
  const [selected, setSelected] = useState<iTunesApp | null>(null);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <div className="iphone-frame" style={{ filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7))" }}>
        <div className="iphone-screen">

          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 12,
              left: "50%",
              transform: "translateX(-50%)",
              width: 108,
              height: 30,
              background: "#000",
              borderRadius: 18,
              zIndex: 20,
            }}
          />

          {/* Status bar - items sit at the same height as the Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 16,
              zIndex: 10,
            }}
          >
            <Clock />
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              {/* Signal */}
              <svg width="16" height="11" viewBox="0 0 17 12" fill="white">
                <rect x="0" y="5" width="3" height="7" rx="1" opacity="0.35" />
                <rect x="4.5" y="3.5" width="3" height="8.5" rx="1" opacity="0.55" />
                <rect x="9" y="1.5" width="3" height="10.5" rx="1" opacity="0.8" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" />
              </svg>
              {/* WiFi */}
              <svg width="14" height="10" viewBox="0 0 20 15" fill="white">
                <path d="M10 12a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                <path d="M10 7.5c1.8 0 3.4.73 4.6 1.9l1.4-1.4A8.45 8.45 0 0010 5.5a8.45 8.45 0 00-6 2.5l1.4 1.4A6.45 6.45 0 0110 7.5z" opacity="0.65" />
                <path d="M10 3.5c3 0 5.7 1.22 7.7 3.2l1.4-1.4A13.4 13.4 0 0010 1.5 13.4 13.4 0 00.9 5.3l1.4 1.4A11.4 11.4 0 0110 3.5z" opacity="0.35" />
              </svg>
              {/* Battery */}
              <svg width="22" height="11" viewBox="0 0 26 13" fill="white">
                <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke="white" strokeOpacity="0.35" fill="none" />
                <rect x="1.5" y="1.5" width="18" height="10" rx="2.5" fill="white" />
                <rect x="23" y="4" width="2.5" height="5" rx="1.2" fill="white" fillOpacity="0.4" />
              </svg>
            </div>
          </div>

          {/* App grid - starts well below the status bar */}
          <div
            style={{
              position: "absolute",
              top: 64,
              bottom: 92,
              left: 0,
              right: 0,
              padding: "8px 14px 0",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "18px 8px",
              }}
            >
              {apps.map((app, i) => (
                <AppIcon
                  key={app.trackId}
                  app={app}
                  delay={i * 60}
                  onClick={() => setSelected(app)}
                />
              ))}
            </div>
          </div>

          {/* Dock */}
          <div
            style={{
              position: "absolute",
              bottom: 10,
              left: 10,
              right: 10,
              height: 76,
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(28px) saturate(1.5)",
              WebkitBackdropFilter: "blur(28px) saturate(1.5)",
              borderRadius: 26,
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <button
              onClick={() => setContactOpen(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 13,
                  background: "linear-gradient(145deg, #43d65a, #30c248)",
                  boxShadow: "0 4px 14px rgba(48,194,72,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.1s ease",
                }}
                className="group-hover:scale-105 active:scale-90"
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4C9.373 4 4 8.925 4 15c0 3.37 1.56 6.386 4.05 8.5L7 28l5.2-2.6A13.3 13.3 0 0016 26c6.627 0 12-4.925 12-11S22.627 4 16 4z"
                    fill="white"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.75)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.7)",
                }}
              >
                Messages
              </span>
            </button>
          </div>

          <ContactSheet open={contactOpen} onClose={() => setContactOpen(false)} />
          <AppModal app={selected} onClose={() => setSelected(null)} />
        </div>
      </div>
    </>
  );
}

function AppIcon({
  app,
  delay,
  onClick,
}: {
  app: iTunesApp;
  delay: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
        WebkitTapHighlightColor: "transparent",
      }}
    >
      <div
        className="app-icon-animate"
        style={{
          width: 52,
          height: 52,
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 3px 10px rgba(0,0,0,0.35)",
          animationDelay: `${delay}ms`,
          flexShrink: 0,
        }}
      >
        <img
          src={app.artworkUrl100}
          alt={app.trackName}
          width={52}
          height={52}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <span
        style={{
          fontSize: 10,
          color: "rgba(255,255,255,0.85)",
          textAlign: "center",
          textShadow: "0 1px 4px rgba(0,0,0,0.7)",
          maxWidth: 58,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          lineHeight: 1.2,
        }}
      >
        {app.trackName}
      </span>
    </button>
  );
}
