import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GlobalDataService } from '../../../global/global-data.service';
import { Router } from '@angular/router';
import { Showcase } from '../interface/showcase';

@Component({
    selector: 'app-showcase-items',
    templateUrl: './showcase-items.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowcaseItemsComponent {
    @Input() public columnLayout = false;
    constructor(public  _globalService: GlobalDataService, private _router: Router) {}

    public navigateToSynopsis(project: Showcase): void {
        this._router.navigate([`./showcase/` + project.routeUrl + '/synopsis']);
    }
}
