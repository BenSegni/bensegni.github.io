import { Component, Input } from '@angular/core';

interface Dimensions {
  height: string;
  width: string;
  margin: string;
}

@Component({
  selector: 'app-loading-graphic',
  templateUrl: './loading-graphic.component.html',
  styleUrls: ['./loading-graphic.component.scss']
})
export class LoadingGraphicComponent {
    @Input() isLoading = true;
    @Input() smallLoader = false;
    @Input() graphicDimensions: Dimensions | undefined;
    public logo = '../../../assets/img/logo.svg';
}
