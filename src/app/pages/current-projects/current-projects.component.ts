import { Component } from "@angular/core";
import { GlobalDataService } from "../../global/global-data.service";
import { CommonModule } from "@angular/common";
import { CurrentProjectHeaderComponent } from "./current-project-header/current-project-header.component";
import { CurrentProjectDetailComponent } from "./current-project-detail/current-project-detail.component";
import { CurrentProjectPresentationComponent } from "./current-project-presentation/current-project-presentation.component";
import { FeedbackComponent } from "./feedback/feedback.component";

@Component({
  selector: "app-current-projects",
  templateUrl: "./current-projects.component.html",
  imports: [
    CommonModule,
    CurrentProjectHeaderComponent,
    CurrentProjectDetailComponent,
    CurrentProjectPresentationComponent,
    FeedbackComponent,
  ],
})
export class CurrentProjectsComponent extends GlobalDataService {}
