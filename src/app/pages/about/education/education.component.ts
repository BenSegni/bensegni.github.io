import { Component } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { EducationInsertComponent } from "./education-insert/education-insert.component";
import { PostEducationInsertComponent } from "./post-education-insert/post-education-insert.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  imports: [
    PostEducationInsertComponent,
    EducationInsertComponent,
    CommonModule,
  ],
})
export class EducationComponent extends GlobalDataService {}
