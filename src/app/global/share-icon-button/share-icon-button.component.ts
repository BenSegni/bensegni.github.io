import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FacebookShareIconComponent } from '../icons/facebook-share-icon/facebook-share-icon.component';
import { XShareIconComponent } from '../icons/x-share-icon/x-share-icon.component';
import { LinkedinShareIconComponent } from '../icons/linkedin-share-icon/linkedin-share-icon.component';

@Component({
  selector: 'app-share-icon-button',
  templateUrl: './share-icon-button.component.html',
  styleUrls: ['./share-icon-button.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FacebookShareIconComponent,
    XShareIconComponent,
    LinkedinShareIconComponent
  ]
})
export class ShareIconButtonComponent implements OnInit {
  @Input() shareType = '';
  @Input() shareUrl = ''
  private navUrl = ''

  public ngOnInit(): void {
    this.createShareUrl();
  }

  private createShareUrl(): void {
    const facebookUrl = 'http://www.facebook.com/sharer.php?u=';
    const xUrl = 'http://twitter.com/share?url=';
    const linkedInUrl = 'https://www.linkedin.com/shareArticle?mini=true&url=';

    switch (this.shareType) {
      case 'facebook':
        this.navUrl = `${facebookUrl}${this.shareUrl}`;
        break;
      case 'X':
        this.navUrl = `${xUrl}${this.shareUrl}`;
        break;
      case 'linkedin':
        this.navUrl = `${linkedInUrl}${this.shareUrl}`;
        break;
    };
  }

  public shareContent(): void {
    window.open(this.navUrl, '_blank');
  }
}
