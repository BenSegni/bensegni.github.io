import { Component, input, InputSignal } from "@angular/core";

import { ImageDisplay } from "../../showcase/interface/showcase";

@Component({
    selector: "app-grid-display",
    templateUrl: "./grid-display.component.html",
    standalone: false
})
export class GridDisplayComponent {
  public displayImages: InputSignal<ImageDisplay[]> = input<ImageDisplay[]>([
    {
      url: "",
    },
  ]);
  public isLoading: InputSignal<boolean> = input<boolean>(true);
}
