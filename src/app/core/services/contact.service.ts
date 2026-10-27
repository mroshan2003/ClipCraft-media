import { Injectable } from '@angular/core';
import { AGENCY_INFO } from '../data/agency.data';

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  interestedService: string;
  preferredPackage?: string;
  projectBudget: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly agency = AGENCY_INFO;

  generateWhatsAppUrl(data?: Partial<ContactFormData>): string {
    const phone = this.agency.whatsappNumber;
    let text = `Hello ClipCraft Media team! I am interested in exploring creative marketing services.`;

    if (data?.fullName) {
      text += `\n\n*Name:* ${data.fullName}`;
    }
    if (data?.companyName) {
      text += `\n*Company/Brand:* ${data.companyName}`;
    }
    if (data?.interestedService) {
      text += `\n*Interested Service:* ${data.interestedService}`;
    }
    if (data?.projectBudget) {
      text += `\n*Engagement Type:* ${data.projectBudget}`;
    }
    if (data?.message) {
      text += `\n*Note:* ${data.message}`;
    }

    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }

  generateMailtoUrl(data?: Partial<ContactFormData>): string {
    const subject = encodeURIComponent(
      `Project Consultation Enquiry: ${data?.companyName || data?.fullName || 'ClipCraft Media'}`
    );
    let body = `Hello ClipCraft Media,\n\nI would like to explore working together on our brand content.\n\n`;

    if (data?.fullName) body += `Name: ${data.fullName}\n`;
    if (data?.companyName) body += `Company: ${data.companyName}\n`;
    if (data?.phone) body += `Phone: ${data.phone}\n`;
    if (data?.interestedService) body += `Key Service: ${data.interestedService}\n`;
    if (data?.projectBudget) body += `Engagement Type: ${data.projectBudget}\n`;
    if (data?.message) body += `Message / Objective:\n${data.message}\n\n`;

    body += `Looking forward to your strategic recommendations.\n`;

    return `mailto:${this.agency.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  }
}
