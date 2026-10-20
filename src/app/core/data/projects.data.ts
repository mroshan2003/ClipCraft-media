import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    category: 'personal-branding',
    categoryLabel: 'Founder & Leader Presence',
    client: 'Founder Series',
    industry: 'Executive Leadership',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    description: 'Retention-first founder reels, keynote takeaways, and executive authority visual content.',
    servicesDelivered: ['Founder Reel Strategy', 'Cinema Camera Direction', 'Kinetic Subtitles', 'Sound Design'],
    metricTag: '3 Featured Reels',
    videos: [
      {
        id: 'pb-reel-1',
        title: 'Reel 01: Executive Hook',
        caption: 'High-retention founder introduction and leadership narrative',
        url: 'https://drive.google.com/file/d/1HNcWkrxwXVGD6TQks4wN5vGO7Fd3-7Gx/view?usp=drive_link'
      },
      {
        id: 'pb-reel-2',
        title: 'Reel 02: Authority Insight',
        caption: 'Industry framework breakdown and key actionable takeaway',
        url: '' // <-- Put your Google Drive link here
      },
      {
        id: 'pb-reel-3',
        title: 'Reel 03: Community CTA',
        caption: 'High-conversion founder narrative and community invitation',
        url: '' // <-- Put your Google Drive link here
      }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital marketing',
    category: 'digital-marketing',
    categoryLabel: 'Conversion & Growth Ads',
    client: 'Growth Ventures',
    industry: 'Digital Marketing & Ads',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    description: 'High-conversion campaign reels, product ad hooks, and paid acquisition creative assets.',
    servicesDelivered: ['Paid Social Strategy', 'Direct Response Hooks', 'Ad Iterations', 'Audience Retargeting'],
    metricTag: '3 Featured Reels',
    videos: [
      {
        id: 'dm-reel-1',
        title: 'Reel 01: Sensory Ad Hook',
        caption: 'Immediate first-second hook targeting customer curiosity',
        url: 'https://drive.google.com/file/d/1HNcWkrxwXVGD6TQks4wN5vGO7Fd3-7Gx/view?usp=drive_link'
      },
      {
        id: 'dm-reel-2',
        title: 'Reel 02: Product In-Action',
        caption: 'Relatable demonstration that builds rapid credibility',
        url: 'https://drive.google.com/file/d/1HNcWkrxwXVGD6TQks4wN5vGO7Fd3-7Gx/view?usp=drive_link'
      },
      {
        id: 'dm-reel-3',
        title: 'Reel 03: Conversion Pitch',
        caption: 'Urgent commercial pitch engineered for high click-through rates',
        url: '' // <-- Put your Google Drive link here
      }
    ]
  },
  {
    id: 'editing-videos',
    title: 'Editing videos',
    category: 'editing-videos',
    categoryLabel: 'Post-Production Craft',
    client: 'Creators & Brands',
    industry: 'Short-Form Cinema',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    description: 'Scroll-stopping hooks, kinetic typography, Foley sound design, and cinema color grading.',
    servicesDelivered: ['Kinetic Typography', 'Foley Sound Design', 'Pacing & Flow', 'Color Grading'],
    metricTag: '3 Featured Reels',
    videos: [
      {
        id: 'ev-reel-1',
        title: 'Reel 01: Cinema Post-Production',
        caption: 'Fast-paced kinetic cuts and beat-matched sonic transitions',
        url: 'https://drive.google.com/file/d/1HNcWkrxwXVGD6TQks4wN5vGO7Fd3-7Gx/view?usp=drive_link'
      },
      {
        id: 'ev-reel-2',
        title: 'Reel 02: Sound Design Magic',
        caption: 'Multi-track Foley audio mixing and sound design',
        url: '' // <-- Put your .mp4 in public/videos/ and write '/videos/your-file.mp4'
      },
      {
        id: 'ev-reel-3',
        title: 'Reel 03: Color Grading & Visuals',
        caption: 'DaVinci Resolve cinematic tone mapping and finish',
        url: '' // <-- Put your .mp4 in public/videos/ and write '/videos/your-file.mp4'
      },
      {
        id: 'ev-reel-3',
        title: 'Reel 03: Color Grading & Visuals',
        caption: 'DaVinci Resolve cinematic tone mapping and finish',
        url: '' // <-- Put your .mp4 in public/videos/ and write '/videos/your-file.mp4'
      }
    ]
  }
];
