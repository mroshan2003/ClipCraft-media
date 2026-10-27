import { Service } from '../models/service.model';

export const SERVICES_DATA: Service[] = [
  {
    id: 'smm',
    slug: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Turn Passive Followers Into Loyal Advocates',
    description:
      'End-to-end management of your social channels with data-backed content calendars, community nurturing, daily engagement protocols, and relentless brand voice consistency.',
    image: '',
    icon: 'share-2',
    badge: 'Growth Engine',
    keyDeliverables: [
      'Comprehensive monthly content calendar & schedule',
      'Community management, comment replies & DM engagement',
      'Platform-specific format optimization (IG, LinkedIn, YouTube)',
      'Monthly data analytics & iterative growth reporting',
      'Hashtag architecture & organic reach auditing'
    ],
    businessImpact: 'Build consistent top-of-mind brand awareness and an engaged organic community.',
    suitableFor: 'Growth-stage businesses, consumer brands, and multi-location companies.'
  },
  {
    id: 'personal-branding',
    slug: 'personal-branding',
    title: 'Personal Branding',
    tagline: 'Position Founders & Leaders As Indisputable Authorities',
    description:
      'We extract your lived insights and convert them into punchy LinkedIn thought-leadership essays, viral short-form clips, and signature keynote storytelling.',
    image: '',
    icon: 'user-check',
    badge: 'Founder Favorite',
    keyDeliverables: [
      'Executive voice mapping & narrative positioning',
      '12-16 high-conversion LinkedIn thought leadership posts/mo',
      'Talking-head reel scriptwriting & teleprompter guidance',
      'Profile optimization, banner designs & featured funnels',
      'Podcast guest pitching and PR leverage'
    ],
    businessImpact: 'Attract premium B2B inbound leads, speaking invites, and investor curiosity.',
    suitableFor: 'Founders, C-suite executives, keynote speakers, and niche consultants.'
  },
  {
    id: 'video-editing',
    slug: 'video-editing',
    title: 'Video Editing',
    tagline: 'Scroll-Stopping Hooks, Cinematic Pacing & Sound Design',
    description:
      'Transform raw footage into dynamic, retention-optimized short-form assets that hold eyes. Packed with kinetic typography, sound effects, B-roll overlays, and color grading.',
    image: '',
    icon: 'film',
    badge: 'Core Craft',
    keyDeliverables: [
      'Retention-focused first 3-second hook crafting',
      'Kinetic motion subtitles & custom animated graphics',
      'Multi-track Foley sound design & rhythmic beats',
      'Professional color grading & skin tone optimization',
      'Cross-platform delivery for 9:16 Reels, Shorts, and TikTok'
    ],
    businessImpact: 'Dramatically lower drop-off rates and maximize algorithmic distribution.',
    suitableFor: 'Creators, coaches, agencies, and brands prioritizing video-first growth.'
  }
];
