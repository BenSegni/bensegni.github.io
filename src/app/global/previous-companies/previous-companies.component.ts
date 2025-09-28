import { Component } from "@angular/core";
import { GlobalDataService } from "../global-data.service";
import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-previous-companies",
  templateUrl: "./previous-companies.component.html",
  standalone: true,
  imports: [AltTextPipe, CommonModule],
})
export class PreviousCompaniesComponent extends GlobalDataService {}
