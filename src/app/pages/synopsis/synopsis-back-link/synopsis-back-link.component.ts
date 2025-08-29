import { Component } from "@angular/core";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";

@Component({
  selector: "app-synopsis-back-link",
  templateUrl: "./synopsis-back-link.component.html",
  styleUrls: ["./synopsis-back-link.component.scss"],
  imports: [AltTextPipe],
})
export class SynopsisBackLinkComponent {
  public gridIcon = "../../../assets/img/grid_icon.svg";
}
