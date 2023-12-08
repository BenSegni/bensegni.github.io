import { Component, Input } from '@angular/core';
import { Education } from '../interface/education';

@Component({
  selector: 'app-education-insert',
  templateUrl: './education-insert.component.html',
  styleUrls: ['./education-insert.component.scss']
})
export class EducationInsertComponent {
    @Input() public placement: Education | undefined;
}
