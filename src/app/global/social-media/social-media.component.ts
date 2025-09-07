import { Component } from "@angular/core";
import { LinkedinIconComponent } from "../icons/linkedin-icon/linkedin-icon.component";
import { NpmIconComponent } from "../icons/npm-icon/npm-icon.component";
import { GithubIconComponent } from "../icons/github-icon/github-icon.component";
import { BehanceIconComponent } from "../icons/behance-icon/behance-icon.component";
import { ThemeToggleButtonComponent } from "../theme-toggle-button/theme-toggle-button.component";

@Component({
  selector: "app-social-media",
  templateUrl: "./social-media.component.html",
  imports: [
    LinkedinIconComponent,
    NpmIconComponent,
    GithubIconComponent,
    BehanceIconComponent,
    ThemeToggleButtonComponent,
  ],
  styles: [
    `
      :host {
        display: flex;
      }

      .social-media-icon-wrapper {
        display: flex;
        flex: 1;
        padding: 1rem;
        justify-content: center;
        background-color: var(--social-media-toolbar-color);

        a {
          fill: white;
          margin-right: 1rem;
          height: 24px;
        }
      }
    `,
  ],
})
export class SocialMediaComponent {}
