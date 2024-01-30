import { Component } from '@angular/core';
import { ContactType } from '../interface/contact.type';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
    public contactTypes: ContactType[] = [
        {
            type: 'LinkedIn',
            link: 'https://www.linkedin.com/in/bensegni',
            linkText: 'linkedin.com/in/bensegni',
        },
        {
            type: 'Email',
            link: 'BBKSegni@gmail.com',
            linkText: 'BBKSegni&#64;gmail.com',
            emailCopy: {
                emailAddress: 'BBKSegni@gmail.com',
                title: 'CV Request',
                body: 'I hope this finds you well, could you please send me a copy of your up to date CV for inspection please? Many thanks. 😁'
            }
        },
        {
            type: 'Behance',
            link: 'https://www.behance.net/BenSegni',
            linkText: 'behance.net/BenSegni',
        }
    ];
}
