import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-icon-button',
  templateUrl: './share-icon-button.component.html',
  styleUrls: ['./share-icon-button.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ShareIconButtonComponent implements OnInit {
  @Input() shareType = '';
  @Input() shareUrl = ''
  private navUrl = ''

  public ngOnInit(): void {
    this.createShareUrl();
  }

  private createShareUrl(): void {
    switch (this.shareType) {
      case 'facebook':
        this.navUrl = `http://www.facebook.com/sharer.php?u=${this.shareUrl}`;
        break;
      case 'X':
        this.navUrl = `http://twitter.com/share?url=${this.shareUrl}`;
        break;
    }
  }

  public shareContent(): void {
    window.open(this.navUrl, '_blank');
  }
}
