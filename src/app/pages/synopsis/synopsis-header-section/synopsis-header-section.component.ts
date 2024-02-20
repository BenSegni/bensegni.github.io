import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-synopsis-header-section',
    templateUrl: './synopsis-header-section.component.html'
})
export class SynopsisHeaderSectionComponent {
    @Input() headerSection = {
        headerOne: '',
        headerTwo: ''
    }
}
