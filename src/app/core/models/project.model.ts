export interface ReelVideo {
  id: string;
  title: string;
  caption?: string;
  url: string; // Google Drive link, MP4 URL, or empty string ''
  poster?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  client: string;
  industry: string;
  thumbnail: string;
  gallery?: string[];
  description: string;
  creativeObjective?: string;
  servicesDelivered?: string[];
  metricTag?: string;
  videoPreviewUrl?: string;
  featured?: boolean;
  year?: string;
  clientQuote?: string;
  videos?: ReelVideo[];
}

