import {
  Component,
  OnInit,
  inject,
  input,
} from "@angular/core";

import { GlobalDataService } from "../../../global/global-data.service";
import { Router } from "@angular/router";
import { Showcase } from "../interface/showcase";

@Component({
  selector: "app-showcase-items",
  templateUrl: "./showcase-items.component.html",
})
export class ShowcaseItemsComponent implements OnInit {
  public columnLayout = input<boolean>(false);
  private _router = inject(Router);
  private _globalService = inject(GlobalDataService);
  public projects = this._globalService.showcaseSignal$;
  public isLoading = this._globalService.isLoading$;
  constructor() {
    this._globalService.onLoad();
  }

  public navigateToSynopsis(project: Showcase): void {
    this._router.navigate([`./showcase/` + project.routeUrl + "/synopsis"]);
  }

  public ngOnInit(): void {}
}
