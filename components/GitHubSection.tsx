import type { GitHubRepo } from "@/types";

const langColors: Record<string, string> = {
  Swift: "#F05138",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3572A5",
  Kotlin: "#A97BFF",
  Go: "#00ADD8",
  Rust: "#DEA584",
  Ruby: "#CC342D",
  CSS: "#563D7C",
  HTML: "#E34C26",
};

function timeAgo(dateStr: string): string {
  const d = new Date(dateStr);
  const diff = Date.now() - d.getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 1) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

interface GitHubSectionProps {
  repos: GitHubRepo[];
}

export default function GitHubSection({ repos }: GitHubSectionProps) {
  const filtered = repos
    .filter((r) => !r.fork && r.description)
    .slice(0, 6);

  if (filtered.length === 0) return null;

  return (
    <section className="w-full max-w-2xl mx-auto px-4 pb-16 fade-up" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center gap-3 mb-6">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" opacity="0.7">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        <h2 className="text-lg font-semibold tracking-tight text-white/80">Open Source</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((repo, i) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-2xl p-4 transition-all duration-200 hover:scale-[1.02] active:scale-[0.99]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              animationDelay: `${350 + i * 60}ms`,
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="text-sm font-semibold text-white/90 leading-tight">{repo.name}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-white/25 group-hover:text-white/55 transition-colors flex-shrink-0 mt-0.5"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </div>

            <p className="text-xs text-white/45 leading-relaxed mb-3 line-clamp-2">
              {repo.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-white/35">
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: langColors[repo.language] ?? "#888" }}
                  />
                  {repo.language}
                </span>
              )}
              {repo.stargazers_count > 0 && (
                <span className="flex items-center gap-1">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {repo.stargazers_count}
                </span>
              )}
              <span>{timeAgo(repo.updated_at)}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
