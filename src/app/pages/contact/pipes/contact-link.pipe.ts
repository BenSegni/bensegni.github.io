import { Pipe, PipeTransform } from '@angular/core';
import { ContactType } from '../interface/contact.type';

@Pipe({
    name: 'contactLink',
    standalone: false
})
export class ContactLinkPipe implements PipeTransform {

    transform(type?: ContactType): string {
        if(!type) return '';

        return type.emailCopy
            ?
            `mailto:${type.emailCopy.emailAddress}subject=${type.emailCopy.title}}&body=${type.emailCopy.body}`
            : type?.link;
    }

}
