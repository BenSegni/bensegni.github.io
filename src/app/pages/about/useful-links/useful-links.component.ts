import { Component } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-useful-links",
  templateUrl: "./useful-links.component.html",
  imports: [CommonModule],
})
export class UsefulLinksComponent extends GlobalDataService {}
