import { Component } from '@angular/core';
import { FadeInNavigation } from '../utils/animations/fade.animation';
import {NavigationStart, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    animations: [FadeInNavigation()],
})
export class NavigationComponent {
    public show = false;

    public constructor(public _router: Router) { }
    public open(): void {
        this.show = !this.show;

        this._router.events.pipe(take(1)).subscribe(event => {
            if (event instanceof NavigationStart) this.show = false;
        });
    }
}
