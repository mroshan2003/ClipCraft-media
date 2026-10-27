import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../core/services/navigation.service';
import { IconComponent } from '../icon/icon.component';
import { AGENCY_INFO } from '../../../core/data/agency.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  readonly navService = inject(NavigationService);
  readonly agency = AGENCY_INFO;

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Our Work' },
    { id: 'process', label: 'Process' },
    { id: 'bts', label: 'BTS' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  onNavClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.navService.scrollTo(sectionId);
  }

  onLetsTalk(): void {
    this.navService.openConsultation('General Consultation', 'All Services');
  }
}
