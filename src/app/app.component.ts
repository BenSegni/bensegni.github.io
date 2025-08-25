import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalDataService } from './global/global-data.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent extends GlobalDataService implements OnInit, OnDestroy {
    public appVersion = this._el.nativeElement.attributes[1].value;
    public constructor(private _router: Router, private _el: ElementRef) {
        super();
    }

    public ngOnInit(): void {
        this.onInitialLoad();
        this.scrollToTop();
    }

    public ngOnDestroy(): void {
        sessionStorage.removeItem('initialLoad');
    }

    private scrollToTop(): void {
        this._router.events.subscribe((event) => {
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
