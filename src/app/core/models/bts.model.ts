export interface BtsItem {
  id: string;
  title: string;
  category: 'all' | 'shoots' | 'editing' | 'team' | 'process';
  categoryLabel: string;
  mediaType: 'video' | 'photo';
  thumbnailUrl: string;
  videoUrl?: string;
  duration?: string;
  locationOrSetup: string;
  description: string;
  gearUsed?: string;
  date?: string;
}
