"use client";

import { useEffect, useRef, useState } from "react";
import type { iTunesApp } from "@/types";

interface AppModalProps {
  app: iTunesApp | null;
  onClose: () => void;
}

function StarRating({ rating, count }: { rating: number; count: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill={i < full ? "#FFD60A" : i === full && half ? "url(#half)" : "none"} stroke="#FFD60A" strokeWidth="2">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#FFD60A" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <span style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{count.toLocaleString()}</span>
    </div>
  );
}

export default function AppModal({ app, onClose }: AppModalProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  // Keep last known app so the sheet can render its content during the exit animation
  const lastApp = useRef<iTunesApp | null>(null);
  if (app) lastApp.current = app;

  useEffect(() => {
    if (app) {
      setClosing(false);
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    } else {
      setClosing(true);
      setVisible(false);
      const t = setTimeout(() => { setMounted(false); setClosing(false); }, 240);
      return () => clearTimeout(t);
    }
  }, [app]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!mounted || !lastApp.current) return null;
  const data = lastApp.current;

  const artworkUrl = data.artworkUrl512 ?? data.artworkUrl100.replace("100x100", "512x512");
  const hasRating = data.averageUserRating && data.userRatingCount;
  const releaseDate = new Date(data.currentVersionReleaseDate).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const truncatedDesc = data.description.length > 160
    ? data.description.slice(0, 160).trimEnd() + "…"
    : data.description;

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
          paddingBottom: 16,
          background: "linear-gradient(160deg, #1c1c2a 0%, #18181f 100%)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
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

        <div style={{ padding: "8px 16px 0" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
            <img
              src={artworkUrl}
              alt={data.trackName}
              width={60}
              height={60}
              style={{ borderRadius: 14, flexShrink: 0, boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{data.trackName}</h2>
              <p style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{data.primaryGenreName}</p>
              {hasRating && (
                <div style={{ marginTop: 4 }}>
                  <StarRating rating={data.averageUserRating!} count={data.userRatingCount!} />
                </div>
              )}
              {!hasRating && (
                <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>Not enough ratings yet</p>
              )}
            </div>
          </div>

          {/* Meta pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
            {[
              data.formattedPrice === "0" ? "Free" : data.formattedPrice,
              `iOS ${data.minimumOsVersion}+`,
              `v${data.version}`,
              `Updated ${releaseDate}`,
            ].map((t) => (
              <span
                key={t}
                style={{
                  padding: "3px 9px",
                  borderRadius: 20,
                  fontSize: 10,
                  fontWeight: 500,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Description */}
          <p style={{ fontSize: 11, lineHeight: 1.5, color: "rgba(255,255,255,0.6)", marginBottom: 12 }}>{truncatedDesc}</p>

          {/* App Store button */}
          <a
            href={data.trackViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "10px 0",
              borderRadius: 14,
              background: "#0071e3",
              color: "white",
              fontWeight: 600,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 20 24" fill="white">
              <path d="M16.05 12.26c-.03-3.18 2.6-4.71 2.72-4.79-1.48-2.17-3.79-2.47-4.61-2.5-1.96-.2-3.83 1.16-4.82 1.16-.99 0-2.52-1.13-4.14-1.1C2.96 5.07 1.1 6.21.15 8c-2 3.44-.51 8.54 1.43 11.34.95 1.37 2.08 2.91 3.56 2.86 1.43-.06 1.97-.92 3.7-.92 1.73 0 2.22.92 3.73.89 1.54-.03 2.51-1.4 3.45-2.78a14 14 0 001.57-3.2c-.04-.02-3-1.15-3.04-4.53z"/>
              <path d="M13.07 3.16C13.87 2.2 14.41.87 14.26-.5c-1.2.05-2.65.8-3.5 1.75-.77.84-1.44 2.2-1.26 3.5 1.34.1 2.71-.68 3.57-1.59z"/>
            </svg>
            View on App Store
          </a>
        </div>
      </div>
    </div>
  );
}
