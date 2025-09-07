import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from "@angular/core";
import { AltTextPipe } from "../utils/pipes/alt-text.pipe";
import { RouterLink } from "@angular/router";
import { GithubIconComponent } from "../icons/github-icon/github-icon.component";
import { LogoPipe } from "../utils/pipes/logo.pipe";
import { PrivacyPolicyLogoComponent } from "../privacy-policy-logo/privacy-policy-logo.component";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AltTextPipe,
    RouterLink,
    GithubIconComponent,
    LogoPipe,
    PrivacyPolicyLogoComponent,
  ]
})
export class FooterComponent {
  public version: InputSignal<string> = input<string>("1.0.0");
}
