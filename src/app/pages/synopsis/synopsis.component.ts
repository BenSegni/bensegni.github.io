import { Component, OnInit } from "@angular/core";
import {
  ShareButton,
  ShareButtonConfig,
} from "../../global/share-icon-button/interface/share.button";

import { GlobalDataService } from "../../global/global-data.service";
import { Router } from "@angular/router";
import { Showcase } from "../showcase/interface/showcase";

@Component({
  selector: "app-synopsis",
  templateUrl: "./synopsis.component.html",
})
export class SynopsisComponent extends GlobalDataService implements OnInit {
  public showcaseProject: Showcase | undefined;
  public relatedProject: Showcase | undefined;
  public openButton = "../../../assets/img/new_window_blue_icon.svg";
  public logo = "../../../assets/img/logo.svg";
  public shareUrl = `https://bensegni.github.io${this._router.url}`;
  public shareButtonConfig: ShareButtonConfig = {
    title: "project",
    buttons: [
      {
        shareType: "facebook",
        shareUrl: `https://bensegni.github.io${this._router.url}`,
      },
      {
        shareType: "X",
        shareUrl: `https://bensegni.github.io${this._router.url}`,
      },
      {
        shareType: "linkedin",
        shareUrl: `https://bensegni.github.io${this._router.url}`,
      },
    ],
  };
  private projects = this.showcaseSignal$();
  public constructor(
    private _router: Router,
  ) {
    super();
    this.isLoading = true;
  }

  public ngOnInit(): void {
    const pageUrl = this._router.routerState.snapshot.url;

    this.showcaseProject = this.projects.find((project) =>
      pageUrl.includes(project.routeUrl)
    );
    
    this.onLoad();
  }
}
