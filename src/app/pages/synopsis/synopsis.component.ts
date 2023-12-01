import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/_global/global-data.service';
import { Showcase } from '../showcase/interface/showcase';
import { take } from 'rxjs';

@Component({
    selector: 'app-synopsis',
    templateUrl: './synopsis.component.html',
    styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent extends GlobalDataService implements OnInit {
    public showcaseProject: Showcase | undefined;
    public constructor(private _router: Router) {
        super();
    }

    public ngOnInit(): void {
        this.showcase$.pipe(take(1))
            .subscribe(
                (showcaseArray) => {
                    const pageUrl = this._router.routerState.snapshot.url
                    this.showcaseProject = showcaseArray.find(project => pageUrl.includes(project.routeUrl));
                }
            );
    }
}
