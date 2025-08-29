import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-about-sub-navigation",
  templateUrl: "./about-sub-navigation.component.html",
  styleUrls: ["./about-sub-navigation.component.scss"],
  imports: [RouterLinkActive, RouterLink],
})
export class AboutSubNavigationComponent {}
