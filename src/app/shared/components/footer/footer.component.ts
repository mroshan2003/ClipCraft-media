import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../core/services/navigation.service';
import { IconComponent } from '../icon/icon.component';
import { AGENCY_INFO } from '../../../core/data/agency.data';
import { SERVICES_DATA } from '../../../core/data/services.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  readonly navService = inject(NavigationService);
  readonly agency = AGENCY_INFO;
  readonly services = SERVICES_DATA.slice(0, 6);
  readonly currentYear = new Date().getFullYear();

  quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Agency' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Featured Work' },
    { id: 'process', label: 'Our Process' },
    { id: 'bts', label: 'Behind The Scenes' },
    { id: 'pricing', label: 'Packages & Pricing' },
    { id: 'testimonials', label: 'Client Reviews' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact Us' }
  ];

  onLinkClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.navService.scrollTo(sectionId);
  }

  onServiceClick(event: Event, serviceTitle: string): void {
    event.preventDefault();
    this.navService.openConsultation('Custom Consultation', serviceTitle);
  }
}
