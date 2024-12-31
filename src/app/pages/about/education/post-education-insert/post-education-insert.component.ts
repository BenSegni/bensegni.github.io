import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-post-education-insert',
  templateUrl: './post-education-insert.component.html',
  styleUrls: ['./post-education-insert.component.scss']
})
export class PostEducationInsertComponent {
    public training = input<string>('');
}
