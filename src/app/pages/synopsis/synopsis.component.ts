import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from '../../global/global-data.service';
import { Showcase } from '../showcase/interface/showcase';
import { ShareButton } from '../../global/share-icon-button/interface/share.button';

@Component({
    selector: 'app-synopsis',
    templateUrl: './synopsis.component.html'
})
export class SynopsisComponent implements OnInit {
    public showcaseProject: Showcase | undefined;
    public relatedProject: Showcase | undefined;
    public openButton = '../../../assets/img/new_window_blue_icon.svg';
    public logo = '../../../assets/img/logo.svg';
    public shareUrl = `https://bensegni.github.io${this._router.url}`;
    public shareButtons: ShareButton[] = [
      {
        shareType: 'facebook',
        shareUrl: `https://bensegni.github.io${this._router.url}`
      },
      {
        shareType: 'X',
        shareUrl: `https://bensegni.github.io${this._router.url}`
      }
    ]
    public constructor(private _router: Router, public _globalService: GlobalDataService) {
        _globalService.isLoading = true;
    }

    public ngOnInit(): void {
        const pageUrl = this._router.routerState.snapshot.url;
        this.showcaseProject = this._globalService.showcaseSignal$().find((project) => pageUrl.includes(project.routeUrl));
        this._globalService.onLoad();
    }
}
