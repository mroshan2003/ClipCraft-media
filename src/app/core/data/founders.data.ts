import { Founder } from '../models/founder.model';

export const FOUNDERS_DATA: Founder[] = [
  {
    id: 'founder-roshan',
    name: 'Mohammed Yusuf',
    role: 'Founder',
    tagline: 'Visual Architecture & Cinema Post-Production',
    bio: 'Pioneering retention-first visual storytelling and personal brand direction. Having directed and edited over 150+ high-converting campaign films and viral reels, Roshan specializes in pacing, DaVinci Resolve color architecture, and founder narrative engineering.',
    quote: 'Attention is earned in the first three seconds, but respect is built through undeniable craft.',
    image: '/images/Yusuf.jpg',
    keyMetric: '50M+',
    keyMetricLabel: 'Combined Video Impressions',
    skills: ['Cinematic 4K Editing', 'High-Retention Hook Strategy', 'Color Grading & Pacing', 'Founder Brand Direction'],
    socials: {
      instagram: 'https://instagram.com/clipcraftmedia.03',
      linkedin: 'https://linkedin.com/company/clipcraftmedia',
      twitter: 'https://x.com/clipcraftmedia'
    }
  },
  {
    id: 'cofounder-growth',
    name: 'Mohamed Roshan Akthar',
    role: 'Co-Founder',
    tagline: 'Performance Distribution & Inbound Conversion',
    bio: 'Architecting systematic content distribution loops and personal branding funnels. Aman bridges the gap between viral creative output and bottom-line revenue, helping founders transform audience engagement into predictable commercial opportunities.',
    quote: 'Creative without strategy is art; creative with strategy is an unfair competitive moat.',
    image: '/images/Roshan.png',
    keyMetric: '3.4x',
    keyMetricLabel: 'Avg. Inbound Pipeline Lift',
    skills: ['Algorithmic Distribution', 'Personal Brand Funnels', 'Growth Analytics', 'Omnichannel Strategy'],
    socials: {
      instagram: 'https://instagram.com/clipcraftmedia',
      linkedin: 'https://linkedin.com/company/clipcraftmedia',
      twitter: 'https://x.com/clipcraftmedia'
    }
  }
];
