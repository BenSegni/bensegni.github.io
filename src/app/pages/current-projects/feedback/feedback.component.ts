import { Component } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { AltTextPipe } from "../../../global/utils/pipes/alt-text/alt-text.pipe";
import { FeedbackLinkComponent } from "../feedback-link/feedback-link.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  imports: [FeedbackLinkComponent, AltTextPipe, CommonModule],
})
export class FeedbackComponent extends GlobalDataService {}
