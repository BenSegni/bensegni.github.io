import { Component, Input } from '@angular/core';
import { EmailCopy } from '../interfaces/email';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
    public emailCopy: EmailCopy = {
        emailAddress: 'BBKSegni@gmail.com',
        reference: {
            title: 'Reference Request',
            body: 'Hi Ben, please can you supply me with your reference contact details? Many thanks. 😁'
        }
    }
}
