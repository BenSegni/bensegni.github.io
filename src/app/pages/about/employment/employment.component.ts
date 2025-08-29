import { Component } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { EmploymentInsertComponent } from "./employment-insert/employment-insert.component";
import { UsefulLinksComponent } from "../useful-links/useful-links.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-employment",
  templateUrl: "./employment.component.html",
  imports: [EmploymentInsertComponent, UsefulLinksComponent, CommonModule],
})
export class EmploymentComponent extends GlobalDataService {}
