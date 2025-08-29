import { Component } from "@angular/core";
import { LocationIconComponent } from "../icons/location-icon/location-icon.component";

interface Header {
  greeting: string;
  jobTitle: string;
  skills: string[];
  location: string;
  locationLink: string;
  logoPath: string;
}

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  standalone: true,
  imports: [LocationIconComponent],
})
export class PageHeaderComponent {
  public headerContent: Header = {
    greeting:
      "<q><span>Hi</span>, <span>I'm</span> <span>Ben Segni.</span></q>",
    jobTitle:
      "- <span>A</span> <span>Frontend</span> <span>full-stack developer.</span>",
    skills: [
      "Angular",
      "HTML5",
      "Jasmine",
      "NestJs",
      "NgRx",
      "ReactJs",
      "RxJs",
      "SASS",
      "Typescript",
    ],
    location: "County Durham, United Kingdom.",
    locationLink: "https://maps.app.goo.gl/X1s9Tfpd2ZJWqGSN7",
    logoPath: "../../../assets/img/me/me_3.webp",
  };
}
