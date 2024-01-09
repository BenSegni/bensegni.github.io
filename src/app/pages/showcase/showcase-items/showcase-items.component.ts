import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GlobalDataService } from '../../../../app/_global/global-data.service';
import { Router } from '@angular/router';
import { Showcase } from '../interface/showcase';

@Component({
    selector: 'app-showcase-items',
    templateUrl: './showcase-items.component.html',
    styleUrls: ['./showcase-items.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseItemsComponent {
    @Input() public columnLayout = false;
    constructor(public  _globalService: GlobalDataService, private _router: Router) {}

    public navigateToSynopsis(project: Showcase): void {
        this._router.navigate([`./${this._router.config[1].path}/` + project.routeUrl + '/synopsis']);
    }
}
