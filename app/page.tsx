import IPhone from "@/components/IPhone";
import MacBook from "@/components/MacBook";
import IPad from "@/components/IPad";
import type { iTunesApp } from "@/types";

const ARTIST_ID = 1882161013;

async function getApps(): Promise<iTunesApp[]> {
  try {
    const res = await fetch(
      `https://itunes.apple.com/lookup?id=${ARTIST_ID}&entity=software`,
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return (data.results as iTunesApp[]).filter(
      (r: iTunesApp & { wrapperType?: string }) => r.wrapperType === "software"
    );
  } catch {
    return [];
  }
}

export default async function Home() {
  const apps = await getApps();

  return (
    <main className="relative z-10 flex flex-col items-center min-h-screen py-16 px-4" style={{ gap: 0 }}>

      {/* Hero */}
      <header className="text-center fade-up mb-10">
        <h1
          className="font-bold"
          style={{ fontSize: "clamp(28px, 5vw, 42px)", letterSpacing: "-0.045em", lineHeight: 1.1 }}
        >
          Isidoro Flores
        </h1>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            marginTop: 12,
            padding: "5px 14px",
            borderRadius: 99,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.09)",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#30d158", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", letterSpacing: "0.03em" }}>
            iOS Developer
          </span>
        </div>
      </header>

      {/* Devices - stacked on mobile, side-by-side on xl */}
      <div className="w-full xl:overflow-x-auto">
        <div className="flex flex-col items-center gap-0 xl:flex-row xl:items-stretch xl:justify-center xl:gap-24 xl:px-16">

          {/* iPhone */}
          <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
            <div className="device-col-stage">
              <div className="fade-up" style={{ animationDelay: "100ms" }}>
                <IPhone apps={apps} />
              </div>
              {apps.length > 0 && (
                <p className="fade-up xl:hidden" style={{ animationDelay: "220ms", fontSize: 11.5, color: "rgba(255,255,255,0.25)", letterSpacing: "0.01em", marginTop: 12 }}>
                  tap an app to learn more
                </p>
              )}
            </div>
            <p className="fade-up hidden xl:block" style={{ animationDelay: "220ms", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", marginTop: 14 }}>Apps / Contact</p>
          </div>

          {/* MacBook */}
          <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
            {/* Mobile divider - outer div has no display style so xl:hidden works */}
            <div className="xl:hidden">
              <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "52px 0 36px", width: 340 }}>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" }}>Resume</span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              </div>
            </div>
            <div className="device-col-stage">
              <MacBook />
            </div>
            <p className="fade-up hidden xl:block" style={{ animationDelay: "300ms", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", marginTop: 14 }}>Resume</p>
          </div>

          {/* iPad */}
          <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
            {/* Mobile divider */}
            <div className="xl:hidden">
              <div style={{ display: "flex", alignItems: "center", gap: 14, margin: "52px 0 36px", width: 340 }}>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
                <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase" }}>About</span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              </div>
            </div>
            <div className="device-col-stage" style={{ paddingBottom: 60 }}>
              <IPad />
            </div>
            <p className="fade-up hidden xl:block" style={{ animationDelay: "360ms", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.22)", textTransform: "uppercase", marginTop: 14 }}>About</p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer
        className="fade-up"
        style={{
          animationDelay: "450ms",
          marginTop: 56,
          paddingBottom: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div style={{ width: 180, height: 1, background: "rgba(255,255,255,0.05)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.22)" }}>by Isidoro Flores</span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>·</span>
          <a
            href="mailto:floresisidoro30@gmail.com"
            className="hover:text-white/65 transition-colors"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
          >
            floresisidoro30@gmail.com
          </a>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 12 }}>·</span>
          <a
            href="https://github.com/isiflo2728"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/65 transition-colors"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}
          >
            github
          </a>
        </div>
      </footer>

    </main>
  );
}
