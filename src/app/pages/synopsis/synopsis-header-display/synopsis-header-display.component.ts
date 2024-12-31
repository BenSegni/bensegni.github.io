import { Component, input } from "@angular/core";

@Component({
  selector: "app-synopsis-header-display",
  templateUrl: "./synopsis-header-display.component.html",
  styleUrls: ["./synopsis-header-display.component.scss"],
})
export class SynopsisHeaderDisplayComponent {
  public imageConfig = input<{
    backgroundImage: string;
    isLoading: boolean;
  }>({
    backgroundImage: "",
    isLoading: false,
  });
}
