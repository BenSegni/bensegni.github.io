import { Component } from '@angular/core';
import { FadeInButton } from '../../global/utils/animations/fade.animation';
import { Showcase } from './interface/showcase';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    styleUrls: ['./showcase.component.scss'],
    animations: [FadeInButton()]
})
export class ShowcaseComponent {
    public columnLayout = false;
    public grid = '../../../assets/img/grid_icon.svg';
    public column = '../../../assets/img/column_icon.svg'
    public filteredShowcase: Showcase[] = [];

    public changeViewLayout(): void {
        this.columnLayout = !this.columnLayout;
    }
}
