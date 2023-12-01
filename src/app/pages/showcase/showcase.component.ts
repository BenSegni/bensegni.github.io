import { Component } from '@angular/core';
import { GlobalDataService } from '../../_global/global-data.service';
import { FadeInButton } from '../../_global/utils/animations/fade.animation';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
    animations: [FadeInButton()],
})
export class ShowcaseComponent extends GlobalDataService {
    public columnLayout = false;
    public grid = '../../../assets/img/grid_icon.svg';
    public column = '../../../assets/img/column_icon.svg'

    public changeViewLayout(): void {
        this.columnLayout = !this.columnLayout;
    }
}
