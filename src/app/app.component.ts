import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalDataService } from './_global/global-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends GlobalDataService implements OnInit, OnDestroy {
    public constructor(private _router: Router) { super() }

    public ngOnInit(): void {
        this.onInitialLoad();

        this._router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }

    public ngOnDestroy(): void {
        sessionStorage.removeItem('initialLoad');
    }
}
