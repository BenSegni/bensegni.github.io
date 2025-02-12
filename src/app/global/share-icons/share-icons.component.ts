import { Component, input } from "@angular/core";

import { CommonModule } from "@angular/common";
import { ShareButtonConfig } from "../share-icon-button/interface/share.button";
import { ShareIconButtonComponent } from "../share-icon-button/share-icon-button.component";

@Component({
  selector: "app-share-icons",
  templateUrl: "./share-icons.component.html",
  styleUrls: ["./share-icons.component.scss"],
  standalone: true,
  imports: [CommonModule, ShareIconButtonComponent],
})
export class ShareIconsComponent {
  public shareButtonConfig = input<ShareButtonConfig>({
    title: "",
    buttons: [
      {
        shareType: "",
        shareUrl: "",
      },
      {
        shareType: "",
        shareUrl: "",
      },
    ],
  });
}
