import { Component, input } from "@angular/core";

import { NavigationItem } from "../interface/navigation";
import { PillPipe } from "../../utils/pipes/pill.pipe";
import { NavigationTextPipe } from "../../utils/pipes/navigation-text.pipe";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "../../utils/pipes/alt-text.pipe";

@Component({
  selector: "app-navigation-subtext",
  templateUrl: "./navigation-subtext.component.html",
  styleUrls: ["./navigation-subtext.component.scss"],
  standalone: true,
  imports: [PillPipe, NavigationTextPipe, CommonModule, AltTextPipe],
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
