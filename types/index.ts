export interface iTunesApp {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  artworkUrl512?: string;
  primaryGenreName: string;
  description: string;
  trackViewUrl: string;
  averageUserRating?: number;
  userRatingCount?: number;
  formattedPrice: string;
  minimumOsVersion: string;
  version: string;
  currentVersionReleaseDate: string;
  contentAdvisoryRating: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
  fork: boolean;
  private: boolean;
}
