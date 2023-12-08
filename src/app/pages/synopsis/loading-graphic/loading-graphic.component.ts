import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-graphic',
  templateUrl: './loading-graphic.component.html',
  styleUrls: ['./loading-graphic.component.scss']
})
export class LoadingGraphicComponent {
    @Input() isLoading = true;
    public logo = '../../../assets/img/logo.svg';
}
