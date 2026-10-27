export interface PricingPackage {
  id: string;
  name: string;
  priceInr: number;
  period: string;
  tagline: string;
  isPopular?: boolean;
  badge?: string;
  description: string;
  deliverables: string[];
  additionalFeatures: string[];
  idealFor: string;
  turnaroundTime: string;
}
