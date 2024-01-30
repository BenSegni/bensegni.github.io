import { Component, Input } from '@angular/core';
import { ContactType } from '../interface/contact.type';

@Component({
  selector: 'app-contact-type',
  templateUrl: './contact-type.component.html',
  styleUrls: ['./contact-type.component.scss']
})
export class ContactTypeComponent {
    @Input() public contactType: ContactType | undefined;
}
