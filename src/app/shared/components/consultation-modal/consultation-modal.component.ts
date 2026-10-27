import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavigationService } from '../../../core/services/navigation.service';
import { ContactService, ContactFormData } from '../../../core/services/contact.service';
import { IconComponent } from '../icon/icon.component';
import { SERVICES_DATA } from '../../../core/data/services.data';

@Component({
  selector: 'app-consultation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './consultation-modal.component.html',
  styleUrls: ['./consultation-modal.component.css']
})
export class ConsultationModalComponent {
  readonly navService = inject(NavigationService);
  readonly contactService = inject(ContactService);

  readonly services = SERVICES_DATA;

  formData: ContactFormData = {
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    interestedService: '',
    preferredPackage: '',
    projectBudget: 'Ongoing Creative Retainer',
    message: ''
  };

  submitted = false;
  submissionSuccess = false;

  get isOpen(): boolean {
    return this.navService.isConsultationModalOpen();
  }

  get prefilledPackage(): string {
    return this.navService.prefilledPackage();
  }

  get prefilledService(): string {
    return this.navService.prefilledService();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isOpen) {
      this.close();
    }
  }

  ngOnInit(): void {
    if (this.prefilledService) {
      this.formData.interestedService = this.prefilledService;
    }
  }

  close(): void {
    this.navService.closeConsultation();
    this.submitted = false;
    this.submissionSuccess = false;
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.formData.fullName || !this.formData.email || !this.formData.phone) {
      return;
    }
    this.submissionSuccess = true;
  }

  get whatsAppUrl(): string {
    return this.contactService.generateWhatsAppUrl(this.formData);
  }

  get mailtoUrl(): string {
    return this.contactService.generateMailtoUrl(this.formData);
  }

  openWhatsApp(): void {
    window.open(this.whatsAppUrl, '_blank', 'noopener,noreferrer');
  }

  openEmail(): void {
    window.location.href = this.mailtoUrl;
  }
}
