import { Component, Input, input } from "@angular/core";

import { ImageDisplay } from "../../showcase/interface/showcase";

@Component({
  selector: "app-grid-display",
  templateUrl: "./grid-display.component.html",
})
export class GridDisplayComponent {
  public displayImages = input<ImageDisplay[]>([
    {
      url: "",
    },
  ]);
  public isLoading = input<boolean>(true);
}
