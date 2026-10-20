import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection = signal<string>('home');
  isMobileMenuOpen = signal<boolean>(false);
  isScrolled = signal<boolean>(false);

  // Modals state
  activeProjectModal = signal<any | null>(null);
  activeBtsModal = signal<any | null>(null);
  isConsultationModalOpen = signal<boolean>(false);
  prefilledPackage = signal<string>('');
  prefilledService = signal<string>('');

  private isManualScrolling = false;
  private manualScrollTimer: any = null;

  // Tracked section IDs in bottom-to-top order for reverse scan
  private readonly trackedSections = [
    'contact',
    'testimonials',
    'pricing',
    'bts',
    'process',
    'portfolio',
    'services',
    'about',
    'home'
  ];

  constructor() {
    this.initScrollListener();
  }

  private initScrollListener(): void {
    if (typeof window === 'undefined') return;

    let ticking = false;

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            this.handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );

    // Initial check on load
    if (typeof document !== 'undefined') {
      setTimeout(() => this.updateActiveSection(), 150);
    }
  }

  private handleScroll(): void {
    if (typeof window === 'undefined') return;
    this.isScrolled.set(window.scrollY > 40);

    if (!this.isManualScrolling) {
      this.updateActiveSection();
    }
  }

  private updateActiveSection(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    // Check bottom of page -> 'contact'
    if (scrollY + windowHeight >= documentHeight - 80) {
      this.activeSection.set('contact');
      return;
    }

    // Check top of page -> 'home'
    if (scrollY < 120) {
      this.activeSection.set('home');
      return;
    }

    // Offset threshold accounts for floating glassy navbar and reading focal line
    const offsetThreshold = 180;

    for (const sectionId of this.trackedSections) {
      const el = document.getElementById(sectionId);
      if (el) {
        const top = el.offsetTop - offsetThreshold;
        if (scrollY >= top) {
          this.activeSection.set(sectionId);
          break;
        }
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(sectionId: string): void {
    this.closeMobileMenu();
    this.activeSection.set(sectionId);

    // Prevent scroll listener from momentarily overriding activeSection during smooth scroll animation
    this.isManualScrolling = true;
    if (this.manualScrollTimer) {
      clearTimeout(this.manualScrollTimer);
    }
    this.manualScrollTimer = setTimeout(() => {
      this.isManualScrolling = false;
      this.updateActiveSection();
    }, 850);

    if (typeof document === 'undefined') return;

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  openProjectModal(project: any): void {
    this.activeProjectModal.set(project);
    this.lockScroll(true);
  }

  closeProjectModal(): void {
    this.activeProjectModal.set(null);
    this.lockScroll(false);
  }

  openBtsModal(btsItem: any): void {
    this.activeBtsModal.set(btsItem);
    this.lockScroll(true);
  }

  closeBtsModal(): void {
    this.activeBtsModal.set(null);
    this.lockScroll(false);
  }

  openConsultation(packageName: string = '', serviceName: string = ''): void {
    this.prefilledPackage.set(packageName);
    this.prefilledService.set(serviceName);
    this.isConsultationModalOpen.set(true);
    this.lockScroll(true);
  }

  closeConsultation(): void {
    this.isConsultationModalOpen.set(false);
    this.lockScroll(false);
  }

  private lockScroll(lock: boolean): void {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = lock ? 'hidden' : '';
    }
  }
}
