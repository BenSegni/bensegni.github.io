import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { BreadCrumb } from '../interface/breadcrumb';
import { ActivatedRouteSnapshot, Data, NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
    public readonly _breadcrumbs$ = new BehaviorSubject<BreadCrumb[]>([]);
    public  readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

  constructor(private _router: Router) {
    this._router.events.pipe(
        filter((event) => event instanceof NavigationEnd)
      ).subscribe(() => {
        const root = this._router.routerState.snapshot.root;
        const breadcrumbs: BreadCrumb[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);

        this._breadcrumbs$.next(breadcrumbs);
      });
  }

  private addBreadcrumb(route: (ActivatedRouteSnapshot | null), parentUrl: string[], breadcrumbs: BreadCrumb[]) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map(url => url.path));

      if (route.data['breadcrumb']) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          url: '/' + routeUrl.join('/')
        };
        breadcrumbs.push(breadcrumb);
        console.log(breadcrumbs);

      }

      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data) {
    return typeof data['breadcrumb'] === 'function' ? data['breadcrumb'](data) : data['breadcrumb'];
  }
}
