import { Component } from "@angular/core";
import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";

@Component({
  selector: "app-loading-icon",
  templateUrl: "./loading-icon.component.html",
  standalone: true,
  imports: [AltTextPipe],
})
export class LoadingIconComponent {}
