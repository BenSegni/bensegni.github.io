import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AltTextPipe } from "../utils/pipes/alt-text.pipe";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  standalone: true,
  imports: [CommonModule, AltTextPipe],
})
export class PageNotFoundComponent implements OnInit {
  public pageTitle = "Sorry, but this page does not exist!";
  public underConstruction: boolean;
  public guidance = "Please try starting again by visiting the";
  public bobaFett = "../../assets/img/boba_fett.svg";
  public banner = "../../assets/img/construction_banner.svg";

  private _router: Router = inject(Router);

  public constructor() {
    this.underConstruction =
      this._router.routerState.snapshot.url === "/under-construction";
  }

  public ngOnInit(): void {
    if (this.underConstruction) {
      this.pageTitle = "Sorry, but this page is under Construction!";
      this.guidance = "Whilst this is being built, take a look around via the";
    }
  }
}
