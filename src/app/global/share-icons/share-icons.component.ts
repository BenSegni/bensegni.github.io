import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ShareIconButtonComponent } from '../share-icon-button/share-icon-button.component';
import { ShareButtonConfig } from '../share-icon-button/interface/share.button';

@Component({
  selector: 'app-share-icons',
  templateUrl: './share-icons.component.html',
  styleUrls: ['./share-icons.component.scss'],
  standalone: true,
  imports: [CommonModule, ShareIconButtonComponent]
})
export class ShareIconsComponent {
  @Input() shareButtonConfig: ShareButtonConfig = {
    title: '',
    buttons: [
      {
        shareType: '',
        shareUrl: ''
      },
      {
        shareType: '',
        shareUrl: ''
      }
    ]
  }
}
