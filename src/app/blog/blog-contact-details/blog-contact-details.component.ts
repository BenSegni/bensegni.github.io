import { Component } from "@angular/core";
import { LinkedinIconComponent } from "../../global/icons/linkedin-icon/linkedin-icon.component";

@Component({
  selector: "app-blog-contact-details",
  templateUrl: "./blog-contact-details.component.html",
  styleUrls: ["./blog-contact-details.component.scss"],
  standalone: true,
  imports: [LinkedinIconComponent],
})
export class BlogContactDetailsComponent {}
