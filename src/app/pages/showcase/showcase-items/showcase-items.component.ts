import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GlobalDataService } from '../../../../app/_global/global-data.service';

@Component({
    selector: 'app-showcase-items',
    templateUrl: './showcase-items.component.html',
    styleUrls: ['./showcase-items.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseItemsComponent {
    @Input() public columnLayout = false;
    constructor(public  _globalService: GlobalDataService) {}
}
