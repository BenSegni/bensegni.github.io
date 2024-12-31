import { Component, Input, input } from "@angular/core";

import { NavigationItem } from "../interface/navigation";

@Component({
  selector: "app-navigation-subtext",
  templateUrl: "./navigation-subtext.component.html",
  styleUrls: ["./navigation-subtext.component.scss"],
})
export class NavigationSubtextComponent {
  public item = input<NavigationItem>({
    route: undefined,
    url: undefined,
    anchorText: "",
    activeOptions: true,
    uiImage: "",
    keywords: [""],
    icon: undefined,
  });
  public pathIcon = "../../assets/icons/icon-72.svg";
}
