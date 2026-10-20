export interface AgencyInfo {
  name: string;
  wordmark: string;
  tagline: string;
  subtagline: string;
  email: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string; // for wa.me links
  address: string;
  city: string;
  country: string;
  consultationHours: string;
  socials: {
    instagram: string;
    linkedin: string;
    youtube: string;
    twitter: string;
  };
  metrics: {
    value: string;
    label: string;
    context: string;
  }[];
}

export const AGENCY_INFO: AgencyInfo = {
  name: 'ClipCraft Media',
  wordmark: 'ClipCraft',
  tagline: 'We Craft Digital Identities',
  subtagline:
    'From high-retention video reels to strategic personal branding — we turn ambitious businesses into digital market leaders.',
  email: 'hello@clipcraftmedia.com',
  phone: '+919876543210',
  displayPhone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  address: 'Suite 402, Creative Arts Hub, Bandra West',
  city: 'Mumbai, Maharashtra',
  country: 'India',
  consultationHours: 'Mon - Sat: 10:00 AM - 7:00 PM IST',
  socials: {
    instagram: 'https://instagram.com/clipcraftmedia',
    linkedin: 'https://linkedin.com/company/clipcraftmedia',
    youtube: 'https://youtube.com/@clipcraftmedia',
    twitter: 'https://x.com/clipcraftmedia',
  },
  metrics: [
    {
      value: '12M+',
      label: 'Organic Video Views',
      context: 'Across client campaign reels & shorts',
    },
    {
      value: '3.4x',
      label: 'Average Engagement Lift',
      context: 'In first 60 days of strategic execution',
    },
    {
      value: '45+',
      label: 'Brand Narratives Crafted',
      context: 'Founders, D2C brands, and creators',
    },
    {
      value: '98%',
      label: 'Creative Retention',
      context: 'Long-term monthly growth partnerships',
    },
  ],
};
