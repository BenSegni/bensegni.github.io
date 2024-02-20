import { Component, Input } from '@angular/core';
import { ImageDisplay } from '../../showcase/interface/showcase';

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html'
})
export class GridDisplayComponent {
    @Input() displayImages: ImageDisplay[] | undefined;
    @Input() isLoading = true;
}
