import { Component } from "@angular/core";
import { ContactDetailsComponent } from "./contact-details/contact-details.component";
import { CvDownloadComponent } from "./cv-download/cv-download.component";
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  imports: [
    ContactDetailsComponent,
    CvDownloadComponent,
    ReferencesComponent
  ],
})
export class ContactComponent {}
