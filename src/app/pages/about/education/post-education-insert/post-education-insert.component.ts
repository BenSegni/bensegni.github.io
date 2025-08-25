import { Component, input } from '@angular/core';

@Component({
    selector: 'app-post-education-insert',
    templateUrl: './post-education-insert.component.html',
    styleUrls: ['./post-education-insert.component.scss'],
    standalone: false
})
export class PostEducationInsertComponent {
    public training = input<string>('');
}
