import { Component, Input } from '@angular/core';
import { Employment } from '../interface/employment';

@Component({
    selector: 'app-employment-insert',
    templateUrl: './employment-insert.component.html',
    styleUrls: ['./employment-insert.component.scss'],
    standalone: false
})
export class EmploymentInsertComponent {
    @Input() public role: Employment | undefined;
}
