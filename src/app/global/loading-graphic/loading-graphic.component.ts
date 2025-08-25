import { Component, input, InputSignal } from "@angular/core";

interface Dimensions {
  height: string;
  width: string;
  margin: string;
}

@Component({
  selector: "app-loading-graphic",
  templateUrl: "./loading-graphic.component.html",
  styleUrls: ["./loading-graphic.component.scss"],
  standalone: false
})
export class LoadingGraphicComponent {
  public isLoading: InputSignal<boolean> = input<boolean>(true);
  public smallLoader: InputSignal<boolean> = input<boolean>(false);
  public graphicDimensions: InputSignal<Dimensions> = input<Dimensions>({
    height: '100%',
    width: '100%',
    margin: '0'
  });
  public logo = "../../../assets/img/logo.svg";
}
