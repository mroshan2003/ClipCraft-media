import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../../../core/services/navigation.service';
import { IconComponent } from '../icon/icon.component';
import { BtsItem } from '../../../core/models/bts.model';

@Component({
  selector: 'app-video-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './video-modal.component.html',
  styleUrls: ['./video-modal.component.css']
})
export class VideoModalComponent {
  readonly navService = inject(NavigationService);

  isPlaying = signal<boolean>(true);
  isMuted = signal<boolean>(true);

  get btsItem(): BtsItem | null {
    return this.navService.activeBtsModal();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.btsItem) {
      this.close();
    }
  }

  close(): void {
    this.navService.closeBtsModal();
  }

  togglePlay(videoElement: HTMLVideoElement): void {
    if (videoElement.paused) {
      videoElement.play();
      this.isPlaying.set(true);
    } else {
      videoElement.pause();
      this.isPlaying.set(false);
    }
  }

  toggleMute(videoElement: HTMLVideoElement): void {
    videoElement.muted = !videoElement.muted;
    this.isMuted.set(videoElement.muted);
  }
}
