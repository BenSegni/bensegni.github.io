import { Component, HostListener, inject } from "@angular/core";
import { FadeInNavigation } from "../utils/animations/fade.animation";
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { take } from "rxjs";
import { NavigationItem } from "./interface/navigation";
import { routeItems } from "./data/routes";
import { NavigationSubtextComponent } from "./navigation-subtext/navigation-subtext.component";
import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  animations: [FadeInNavigation()],
  standalone: true,
  imports: [
    NavigationSubtextComponent,
    AltTextPipe,
    RouterLink,
    RouterLinkActive,
  ],
})
export class NavigationComponent {
  public show = false;
  public navigationRoutes: NavigationItem[] = routeItems;
  public selectedRoute: NavigationItem | undefined;
  public closeIcon = "../../assets/img/close_icon.svg";
  public closeIconOpen = "../../assets/img/close_icon_open.svg";
  public closeIconClosed = "../../assets/img/close_icon_closed.svg";

  @HostListener("mouseover") onMouseEnter(route?: NavigationItem) {
    this.selectedRoute = route;
  }

  private _router: Router = inject(Router);

  public open(): void {
    this.show = !this.show;

    this._router.events.pipe(take(1)).subscribe((event) => {
      if (event instanceof NavigationStart) this.show = false;
    });
  }
}
