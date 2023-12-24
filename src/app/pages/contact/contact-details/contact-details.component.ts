import { Component } from '@angular/core';
import { EmailCopy } from '../interfaces/email';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
    public emailCopy: EmailCopy = {
        emailAddress: 'BBKSegni@gmail.com',
        title: 'CV Request',
        body: 'I hope this finds you well, could you please send me a copy of your up to date CV for inspection please? Many thanks. 😁'
    }
}