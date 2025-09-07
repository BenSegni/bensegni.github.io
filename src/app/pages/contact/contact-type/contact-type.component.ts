import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { ContactType } from "../interface/contact.type";
import { BehanceIconComponent } from "src/app/global/icons/behance-icon/behance-icon.component";
import { ContactLinkPipe } from "../pipes/contact-link.pipe";
import { EmailIconComponent } from "src/app/global/icons/email-icon/email-icon.component";
import { LinkedinIconComponent } from "src/app/global/icons/linkedin-icon/linkedin-icon.component";

@Component({
  selector: "app-contact-type",
  templateUrl: "./contact-type.component.html",
  imports: [
    ContactLinkPipe,
    BehanceIconComponent,
    EmailIconComponent,
    LinkedinIconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactTypeComponent {
  public contactType: InputSignal<ContactType | undefined> = input();
}
