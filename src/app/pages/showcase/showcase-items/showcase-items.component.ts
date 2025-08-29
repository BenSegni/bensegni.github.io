import { Component, inject, input, InputSignal } from "@angular/core";

import { GlobalDataService } from "../../../global/global-data.service";
import { Router } from "@angular/router";
import { Showcase } from "../interface/showcase";
import { ProjectDetailsComponent } from "../project-details/project-details.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-showcase-items",
  templateUrl: "./showcase-items.component.html",
  imports: [ProjectDetailsComponent, CommonModule],
})
export class ShowcaseItemsComponent {
  public columnLayout: InputSignal<boolean> = input<boolean>(false);
  private _router: Router = inject(Router);
  private _globalService: GlobalDataService = inject(GlobalDataService);
  public projects = this._globalService.showcaseSignal$;
  public isLoading = this._globalService.isLoading$;
  constructor() {
    this._globalService.onLoad();
  }

  public navigateToSynopsis(project: Showcase): void {
    this._router.navigate([`./showcase/` + project.routeUrl + "/synopsis"]);
  }
}
