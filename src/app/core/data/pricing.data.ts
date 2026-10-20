import { PricingPackage } from '../models/pricing.model';

export const PRICING_DATA: PricingPackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    priceInr: 18000,
    period: '/ month',
    tagline: 'Essential presence for growing brands seeking consistent quality.',
    isPopular: false,
    badge: 'Foundation',
    description:
      'Ideal for local businesses and early-stage ventures looking to establish a reliable, professional, and visually engaging digital footprint.',
    deliverables: [
      'Essential social media channel management (1-2 platforms)',
      'Strategic monthly content planning & editorial calendar',
      '8-10 Custom high-resolution creative posts & carousels',
      '4 Professionally edited Reels / Shorts (from raw clips)',
      'Brand-consistent typography, colors & graphic templates',
      'Monthly performance report with reach & engagement metrics'
    ],
    additionalFeatures: [
      'Standard turnaround time (48-72 hrs)',
      'Community engagement guidelines',
      'Email & Slack coordination'
    ],
    idealFor: 'Small businesses, boutique clinics & emerging creators starting consistent content.',
    turnaroundTime: '48-72 hours per deliverable batch'
  },
  {
    id: 'influence',
    name: 'Influence',
    priceInr: 27000,
    period: '/ month',
    tagline: 'Expanded production & personal branding for rapid market authority.',
    isPopular: true,
    badge: 'Most Popular for Growth',
    description:
      'Our signature growth package combining founder personal branding with high-frequency, retention-engineered short-form video production.',
    deliverables: [
      'Everything in Basic included',
      'Expanded content production across 2-3 key platforms',
      'Dedicated personal branding support (Founder LinkedIn / IG)',
      '8-10 Dynamic, hook-crafted Reels / Shorts with sound FX & subtitles',
      '12-14 Custom graphic designs, carousels & thought-leadership posts',
      'Strategic content themes mapped to product/service conversion funnels',
      'Bi-weekly strategic reviews & agile trend-jacking integration'
    ],
    additionalFeatures: [
      'Priority revision turnaround (24-48 hrs)',
      'Teleprompter & video shooting script assistance',
      'Direct WhatsApp channel with your Creative Producer'
    ],
    idealFor: 'Founders, D2C brands, keynote speakers & ambitious consultants ready to scale.',
    turnaroundTime: '24-48 hours with weekly batch delivery'
  },
  {
    id: 'dominate',
    name: 'Dominate',
    priceInr: 36000,
    period: '/ month',
    tagline: 'Full-throttle omnichannel creative engine for market leaders.',
    isPopular: false,
    badge: 'Maximum Impact',
    description:
      'A bespoke creative war room providing high-octane production, omnichannel distribution, priority studio coordination, and multi-touch campaign launches.',
    deliverables: [
      'Comprehensive omnichannel digital strategy & competitor auditing',
      'Premium creative production across all major digital channels',
      'Advanced executive personal branding & narrative positioning',
      '16-20 High-production Reels / Shorts with kinetic motion & grading',
      '20+ Custom creative posts, carousels, infographics & story assets',
      'Full campaign creative planning & seasonal product launch direction',
      'Priority creative coordination & dedicated Creative Director oversight',
      'Detailed monthly ROI, attribution & conversion funnel review'
    ],
    additionalFeatures: [
      'Dedicated Creative Lead & Senior Motion Designer',
      'VIP 24-hour turnaround on priority campaign drops',
      'On-demand shoot coordination support & studio guidance',
      'Bi-weekly video calibration calls'
    ],
    idealFor: 'Established brands, scale-ups, multi-specialty clinics & funded startups.',
    turnaroundTime: 'Priority 24-36 hours turnaround'
  }
];
