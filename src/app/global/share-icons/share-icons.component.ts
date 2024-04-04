import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ShareIconButtonComponent } from '../share-icon-button/share-icon-button.component';
import { ShareButton } from '../share-icon-button/interface/share.button';

@Component({
  selector: 'app-share-icons',
  templateUrl: './share-icons.component.html',
  styleUrls: ['./share-icons.component.scss'],
  standalone: true,
  imports: [CommonModule, ShareIconButtonComponent]
})
export class ShareIconsComponent {
  @Input() shareButtons: ShareButton[] = [
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
