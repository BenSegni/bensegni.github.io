import { Component } from '@angular/core';
import { BreadCrumb } from './interface/breadcrumb';
import { Observable } from 'rxjs';
import { BreadcrumbService } from './services/breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
    public breadcrumbs$: Observable<BreadCrumb[]> | undefined;
    constructor(private readonly _breadcrumbService: BreadcrumbService) {
        this.breadcrumbs$ = _breadcrumbService.breadcrumbs$;
    }
}
