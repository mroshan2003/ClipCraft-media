import { Component, Input, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IconComponent } from '../icon/icon.component';
import { ReelVideo } from '../../../core/models/project.model';

@Component({
  selector: 'app-reel-player',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './reel-player.component.html',
  styleUrls: ['./reel-player.component.css']
})
export class ReelPlayerComponent {
  @Input({ required: true }) video!: ReelVideo;
  @Input() index: number = 0;

  private sanitizer = inject(DomSanitizer);

  /**
   * Detects if the provided URL is a Google Drive link or ID
   */
  isGoogleDrive = computed(() => {
    const url = this.video?.url?.trim() || '';
    if (!url) return false;
    return url.includes('drive.google.com') || (url.length >= 25 && !url.includes('/') && !url.includes('.'));
  });

  /**
   * Generates the sanitized Google Drive embed preview URL
   */
  googlePlayerUrl = computed<SafeResourceUrl | null>(() => {
    const url = this.video?.url?.trim() || '';
    if (!url) return null;

    let fileId: string | null = null;

    // Pattern 1: /file/d/FILE_ID
    const matchD = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (matchD && matchD[1]) {
      fileId = matchD[1];
    }

    // Pattern 2: id=FILE_ID
    if (!fileId) {
      const matchId = url.match(/id=([a-zA-Z0-9_-]+)/);
      if (matchId && matchId[1]) {
        fileId = matchId[1];
      }
    }

    // Pattern 3: raw file ID
    if (!fileId && !url.includes('/') && !url.includes('.') && url.length >= 25) {
      fileId = url;
    }

    if (fileId) {
      const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  });
}

