import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-synopsis-header-display',
  templateUrl: './synopsis-header-display.component.html',
  styleUrls: ['./synopsis-header-display.component.scss']
})
export class SynopsisHeaderDisplayComponent {
    @Input() public imageConfig = {
        backgroundImage: '',
        isLoading: false
    }
}
