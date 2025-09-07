import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
} from "@angular/core";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";
import { GlobalDataService } from "./global/global-data.service";
import { ScrollComponent } from "./global/scroll/scroll.component";
import { PageHeaderComponent } from "./global/page-header/page-header.component";
import { NavigationComponent } from "./global/navigation/navigation.component";
import { PreviousCompaniesComponent } from "./global/previous-companies/previous-companies.component";
import { SocialMediaComponent } from "./global/social-media/social-media.component";
import { LoadingIconComponent } from "./global/loading-icon/loading-icon.component";
import { FooterComponent } from "./global/footer/footer.component";
import { VersionService } from "./global/services/version/version.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    ScrollComponent,
    PageHeaderComponent,
    NavigationComponent,
    PreviousCompaniesComponent,
    LoadingIconComponent,
    SocialMediaComponent,
    FooterComponent,
    RouterOutlet,
  ],
  standalone: true,
})
export class AppComponent
  extends GlobalDataService
  implements OnInit, OnDestroy
{
  public appVersion = "1.0.0";
  private _router = inject(Router);
  private _el = inject(ElementRef);
  private _versionService: VersionService = inject(VersionService);

  public constructor() {
    super();

    this._versionService.setVersion(
      this._el.nativeElement.getAttribute("ng-version")
    );

    this.appVersion = this._versionService.getVersion();
  }

  public ngOnInit(): void {
    this.onInitialLoad();
    this.scrollToTop();
  }

  public ngOnDestroy(): void {
    sessionStorage.removeItem("initialLoad");
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
