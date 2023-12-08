import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../../../app/_global/global-data.service';
import { Showcase } from '../showcase/interface/showcase';

@Component({
    selector: 'app-synopsis',
    templateUrl: './synopsis.component.html',
    styleUrls: ['./synopsis.component.scss']
})
export class SynopsisComponent implements OnInit {
    public showcaseProject: Showcase | undefined;
    public openButton = '../../../assets/img/new_window_blue_icon.svg';
    public logo = '../../../assets/img/logo.svg';
    public gridIcon = '../../../assets/img/grid_icon.svg';
    public constructor(private _router: Router, public _globalService: GlobalDataService) {
        _globalService.isLoading = true;
    }

    public ngOnInit(): void {
        const pageUrl = this._router.routerState.snapshot.url;
        this.showcaseProject = this._globalService.showcaseSignal$().find((project) => pageUrl.includes(project.routeUrl))
    }
}
