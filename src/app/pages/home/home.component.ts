import { Component, computed, inject, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../core/services/navigation.service';
import { ContactService, ContactFormData } from '../../core/services/contact.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';
import { VideoModalComponent } from '../../shared/components/video-modal/video-modal.component';
import { ConsultationModalComponent } from '../../shared/components/consultation-modal/consultation-modal.component';

import { AGENCY_INFO } from '../../core/data/agency.data';
import { SERVICES_DATA } from '../../core/data/services.data';
import { PROJECTS_DATA } from '../../core/data/projects.data';
import { PRICING_DATA } from '../../core/data/pricing.data';
import { TESTIMONIALS_DATA } from '../../core/data/testimonials.data';
import { BTS_DATA } from '../../core/data/bts.data';
import { FAQS_DATA } from '../../core/data/faqs.data';
import { FOUNDERS_DATA } from '../../core/data/founders.data';
import { Project } from '../../core/models/project.model';
import { BtsItem } from '../../core/models/bts.model';
import { PricingPackage } from '../../core/models/pricing.model';
import { Founder } from '../../core/models/founder.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IconComponent,
    NavbarComponent,
    FooterComponent,
    ProjectModalComponent,
    VideoModalComponent,
    ConsultationModalComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  readonly navService = inject(NavigationService);
  readonly contactService = inject(ContactService);

  ngAfterViewInit(): void {
    this.initScrollAnimations();
  }

  private initScrollAnimations(): void {
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const animatables = document.querySelectorAll(
      '.section-header, .about-hero-block, .about-stats-strip, .clean-pillar-card, .founder-minimal-card, .service-editorial-card, .project-card, .process-interactive-container, .bts-card, .pricing-card, .testimonial-slider-wrapper, .why-us-card, .faq-item, .contact-info-col, .contact-form-card, .direct-channels-card'
    );

    animatables.forEach((el, index) => {
      el.classList.add('reveal-fade-up');
      const stagger = index % 3;
      if (stagger === 1) el.classList.add('delay-150');
      if (stagger === 2) el.classList.add('delay-300');
      observer.observe(el);
    });
  }

  readonly agency = AGENCY_INFO;
  readonly services = SERVICES_DATA;
  readonly allProjects = PROJECTS_DATA;
  readonly pricingPackages = PRICING_DATA;
  readonly testimonials = TESTIMONIALS_DATA;
  readonly allBts = BTS_DATA;
  readonly faqs = FAQS_DATA;
  readonly founders = FOUNDERS_DATA;

  // Hero Video Showcase State (ClipCraft Media Digital Identities)
  heroVideoDemos = [
    {
      title: '🎬 Master Showreel 2026',
      client: 'CLIPCRAFT MEDIA',
      tagline: 'We Craft Digital Identities',
      category: 'Agency Showreel',
      metric: '+340% Viral Reach',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-photographer-in-a-studio-taking-pictures-41804-large.mp4',
      poster: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '📱 High-Retention Reels',
      client: 'VELVET BEAN ROASTERS',
      tagline: 'Sensory Coffee Experience',
      category: 'Viral Short-Form Architecture',
      metric: '4.8M Organic Views',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-coffee-maker-pouring-fresh-coffee-into-a-cup-43187-large.mp4',
      poster: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '👑 Personal Branding Film',
      client: 'DR. ARJUN ROY',
      tagline: 'Venture Architect & Keynote',
      category: 'Founder Brand Transformation',
      metric: '+92k Executive Reach',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-video-editor-at-work-41584-large.mp4',
      poster: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: '🏢 Commercial Cinema',
      client: 'APEX LIVING RESIDENCES',
      tagline: 'Architectural Luxury Living',
      category: '4K Cinema Commercial',
      metric: '₹4.2Cr Pipeline Lift',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-sound-producer-working-in-a-recording-studio-41134-large.mp4',
      poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    }
  ];

  activeHeroVideoIndex = signal<number>(0);
  isHeroVideoPlaying = signal<boolean>(true);
  isHeroVideoMuted = signal<boolean>(true);

  activeHeroVideo = computed(() => this.heroVideoDemos[this.activeHeroVideoIndex()]);

  setHeroVideo(index: number, videoElement?: HTMLVideoElement): void {
    this.activeHeroVideoIndex.set(index);
    if (videoElement) {
      videoElement.load();
      videoElement.play().catch(() => { });
      this.isHeroVideoPlaying.set(true);
    }
  }

  toggleHeroVideoPlay(videoElement: HTMLVideoElement): void {
    if (videoElement.paused) {
      videoElement.play().catch(() => { });
      this.isHeroVideoPlaying.set(true);
    } else {
      videoElement.pause();
      this.isHeroVideoPlaying.set(false);
    }
  }

  toggleHeroVideoMute(videoElement: HTMLVideoElement): void {
    videoElement.muted = !videoElement.muted;
    this.isHeroVideoMuted.set(videoElement.muted);
  }

  // Portfolio Filter State
  activeCategory = signal<string>('all');

  categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'social', label: 'Social Media' },
    { id: 'personal-branding', label: 'Personal Branding' },
    { id: 'reels', label: 'Reels & Video Editing' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'brand-campaign', label: 'Brand Campaigns' },
    { id: 'creative-design', label: 'Creative Design' }
  ];

  filteredProjects = computed(() => {
    const cat = this.activeCategory();
    if (cat === 'all') return this.allProjects;
    return this.allProjects.filter(p => p.category === cat);
  });

  // BTS Filter State
  activeBtsFilter = signal<string>('all');

  btsFilters = [
    { id: 'all', label: 'All BTS' },
    { id: 'shoots', label: 'Video Shoots' },
    { id: 'editing', label: 'Editing Bay' },
    { id: 'team', label: 'Team Sessions' },
    { id: 'process', label: 'Creative Process' }
  ];

  filteredBts = computed(() => {
    const f = this.activeBtsFilter();
    if (f === 'all') return this.allBts;
    return this.allBts.filter(b => b.category === f);
  });

  // Creative Process State
  activeStep = signal<number>(1);
  processSteps = [
    {
      step: '01',
      title: 'Discover & Diagnose',
      tagline: 'Unearthing Your Core Distinctive Voice',
      description:
        'We immerse ourselves in your brand history, competitive landscape, past content performance, and target audience friction points. We identify what’s holding your narrative back.',
      deliverables: [
        'Brand audit & audience persona profiling',
        'Competitor content teardown & gap analysis',
        'Creative positioning & narrative angle alignment',
        'Visual moodboard & benchmark curation'
      ],
      timeframe: 'Week 1'
    },
    {
      step: '02',
      title: 'Strategize & Architect',
      tagline: 'Mapping Content Themes to Revenue Funnels',
      description:
        'We build a dynamic content calendar where every single post and reel serves a deliberate purpose: top-of-funnel reach, middle-of-funnel authority, or bottom-of-funnel conversion.',
      deliverables: [
        '30-day editorial calendar & shooting scripts',
        'Hook taxonomy & visual template systems',
        'Talking-point prompts for founder reels',
        'Format distribution matrix (IG, LinkedIn, YouTube)'
      ],
      timeframe: 'Week 1 - 2'
    },
    {
      step: '03',
      title: 'Create & Polish',
      tagline: 'High-Retention Cinema Craft & Sound Design',
      description:
        'Our production and editing team gets to work. We shoot on cinema-grade cameras, cut with kinetic pacing, craft custom subtitles, and mix layered sound design to stop thumbs.',
      deliverables: [
        'Cinematic 4K shoots or raw footage editing',
        'Retention-optimized hooks & speed ramps',
        'Multi-track Foley sound design & color grading',
        'Bespoke graphic assets & carousel layouts'
      ],
      timeframe: 'Weekly Sprints'
    },
    {
      step: '04',
      title: 'Launch & Improve',
      tagline: 'Publishing, Data Review & Iterative Scaling',
      description:
        'We manage publication, engage with your audience, analyze watch-time retention curves, and feed actionable data right back into the next sprint to compound your growth.',
      deliverables: [
        'Optimized scheduling & platform posting',
        'Retention drop-off analytics & CTR reviews',
        'Bi-weekly strategic calibration meetings',
        'Continuous hook & thumbnail A/B experiments'
      ],
      timeframe: 'Ongoing Retainer'
    }
  ];

  // Testimonial Carousel State
  currentTestimonialIndex = signal<number>(0);

  nextTestimonial(): void {
    this.currentTestimonialIndex.update(i => (i + 1) % this.testimonials.length);
  }

  prevTestimonial(): void {
    this.currentTestimonialIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  setTestimonial(index: number): void {
    this.currentTestimonialIndex.set(index);
  }

  // Why Us Strategic Pillars
  whyUsPillars = [
    {
      number: '01',
      title: 'Strategy Before Execution',
      desc: 'We never shoot or design blindly. Every video, carousel, and sentence is anchored in psychological consumer research and conversion intent.',
      icon: 'compass'
    },
    {
      number: '02',
      title: 'Creative Storytelling',
      desc: 'People forget corporate pitches, but remember compelling stories. We uncover the human conflict, conviction, and vision behind your brand.',
      icon: 'sparkles'
    },
    {
      number: '03',
      title: 'Brand-Focused Content',
      desc: 'Viral views are useless if they attract the wrong audience. We align high-retention mechanics strictly with your premium brand positioning.',
      icon: 'shield-check'
    },
    {
      number: '04',
      title: 'Collaborative Production',
      desc: 'We operate as an agile in-house creative arm. You get direct access to producers and editors without layers of account bureaucracy.',
      icon: 'layers'
    },
    {
      number: '05',
      title: 'Consistent Communication',
      desc: 'Clear weekly milestones, shared Frame.io review links, direct WhatsApp channels, and zero ghosting. You always know what is dropping next.',
      icon: 'message-circle'
    },
    {
      number: '06',
      title: 'Quality-Driven Delivery',
      desc: 'From color calibration and skin tone balancing to crisp micro-typography, our standards are uncompromising. We craft work we are proud to sign.',
      icon: 'award'
    }
  ];

  // FAQ Accordion State
  openFaqId = signal<string>('faq-1');

  toggleFaq(id: string): void {
    this.openFaqId.update(current => (current === id ? '' : id));
  }

  // Contact Form Model
  contactForm: ContactFormData = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    interestedService: 'All Services / Omnichannel',
    preferredPackage: 'Influence (₹27,000/mo)',
    projectBudget: '₹25,000 - ₹50,000 / month',
    message: ''
  };

  formSubmitted = signal<boolean>(false);
  formError = signal<string>('');

  selectPackage(pkg: PricingPackage): void {
    this.contactForm.preferredPackage = `${pkg.name} (₹${pkg.priceInr.toLocaleString()}/mo)`;
    this.navService.scrollTo('contact');
  }

  selectServiceForContact(serviceTitle: string): void {
    this.contactForm.interestedService = serviceTitle;
    this.navService.scrollTo('contact');
  }

  openProject(project: Project): void {
    this.navService.openProjectModal(project);
  }

  openBts(item: BtsItem): void {
    this.navService.openBtsModal(item);
  }

  submitContact(): void {
    if (!this.contactForm.fullName || !this.contactForm.email || !this.contactForm.phone) {
      this.formError.set('Please fill in your name, email, and phone number.');
      return;
    }
    this.formError.set('');
    this.formSubmitted.set(true);
  }

  resetContact(): void {
    this.formSubmitted.set(false);
  }

  get formWhatsAppUrl(): string {
    return this.contactService.generateWhatsAppUrl(this.contactForm);
  }

  get formMailtoUrl(): string {
    return this.contactService.generateMailtoUrl(this.contactForm);
  }
}
