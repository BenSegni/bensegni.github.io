import { Component, input, InputSignal } from "@angular/core";

@Component({
    selector: "app-synopsis-header-display",
    templateUrl: "./synopsis-header-display.component.html",
    styleUrls: ["./synopsis-header-display.component.scss"],
    standalone: false
})
export class SynopsisHeaderDisplayComponent {
  public imageConfig: InputSignal<{
    backgroundImage: string;
    isLoading: boolean;
  }> = input<{
    backgroundImage: string;
    isLoading: boolean;
  }>({
    backgroundImage: "",
    isLoading: false,
  });
}
