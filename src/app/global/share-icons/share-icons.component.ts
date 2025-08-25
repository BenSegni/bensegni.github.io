import { Component, input } from "@angular/core";


import { ShareButtonConfig } from "../share-icon-button/interface/share.button";
import { ShareIconButtonComponent } from "../share-icon-button/share-icon-button.component";

@Component({
    selector: "app-share-icons",
    templateUrl: "./share-icons.component.html",
    styleUrls: ["./share-icons.component.scss"],
    imports: [ShareIconButtonComponent]
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
