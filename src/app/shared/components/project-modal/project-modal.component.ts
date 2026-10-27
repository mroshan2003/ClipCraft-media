import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../core/services/navigation.service';
import { IconComponent } from '../icon/icon.component';
import { ReelPlayerComponent } from '../reel-player/reel-player.component';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, IconComponent, ReelPlayerComponent],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {
  readonly navService = inject(NavigationService);

  get project(): Project | null {
    return this.navService.activeProjectModal();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.project) {
      this.close();
    }
  }

  close(): void {
    this.navService.closeProjectModal();
  }

  bookSimilarProject(): void {
    const proj = this.project;
    this.close();
    if (proj) {
      this.navService.openConsultation('Reels & Video Production', proj.title);
    }
  }
}
