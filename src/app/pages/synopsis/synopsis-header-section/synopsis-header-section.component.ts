import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-synopsis-header-section',
    templateUrl: './synopsis-header-section.component.html',
    styleUrls: ['./synopsis-header-section.component.scss']
})
export class SynopsisHeaderSectionComponent {
    @Input() headerSection = {
        headerOne: '',
        headerTwo: ''
    }
}
