import { Component, Input, input } from "@angular/core";

interface Dimensions {
  height: string;
  width: string;
  margin: string;
}

@Component({
  selector: "app-loading-graphic",
  templateUrl: "./loading-graphic.component.html",
  styleUrls: ["./loading-graphic.component.scss"],
})
export class LoadingGraphicComponent {
  public isLoading = input<boolean>(true);
  public smallLoader = input<boolean>(false);
  public graphicDimensions= input<Dimensions>();
  public logo = "../../../assets/img/logo.svg";
}
