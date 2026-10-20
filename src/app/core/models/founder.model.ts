export interface Founder {
  id: string;
  name: string;
  role: string;
  tagline: string;
  bio: string;
  quote: string;
  image: string;
  keyMetric: string;
  keyMetricLabel: string;
  skills: string[];
  socials: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}
