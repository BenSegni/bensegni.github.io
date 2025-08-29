import { Component } from "@angular/core";
import { copyText, dataPoints } from "./data/copy.text";
import { PrivacyPolicyLogoComponent } from "../privacy-policy-logo/privacy-policy-logo.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
  standalone: true,
  imports: [CommonModule, PrivacyPolicyLogoComponent],
})
export class PrivacyPolicyComponent {
  public privacyPolicyCopy = {
    copy: copyText,
    dataPoints: dataPoints,
  };
}
