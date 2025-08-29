import { Component, input, InputSignal } from "@angular/core";

import { ImageDisplay } from "../../showcase/interface/showcase";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";

@Component({
  selector: "app-grid-display",
  templateUrl: "./grid-display.component.html",
  imports: [CommonModule, AltTextPipe],
})
export class GridDisplayComponent {
  public displayImages: InputSignal<ImageDisplay[]> = input<ImageDisplay[]>([
    {
      url: "",
    },
  ]);

  public isLoading: InputSignal<boolean> = input<boolean>(true);
}
