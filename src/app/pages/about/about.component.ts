import { Component } from "@angular/core";
import { AboutSubNavigationComponent } from "./about-sub-navigation/about-sub-navigation.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  imports: [AboutSubNavigationComponent, RouterOutlet],
})
export class AboutComponent {}
