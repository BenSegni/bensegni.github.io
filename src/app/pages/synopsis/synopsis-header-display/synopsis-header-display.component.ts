import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { LoadingGraphicComponent } from "../../../global/loading-graphic/loading-graphic.component";

@Component({
  selector: "app-synopsis-header-display",
  templateUrl: "./synopsis-header-display.component.html",
  styleUrls: ["./synopsis-header-display.component.scss"],
  imports: [CommonModule, LoadingGraphicComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
