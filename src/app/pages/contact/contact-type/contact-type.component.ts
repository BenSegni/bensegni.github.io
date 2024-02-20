import { Component, Input } from '@angular/core';
import { ContactType } from '../interface/contact.type';

@Component({
  selector: 'app-contact-type',
  templateUrl: './contact-type.component.html'
})
export class ContactTypeComponent {
    @Input() public contactType: ContactType | undefined;
}
