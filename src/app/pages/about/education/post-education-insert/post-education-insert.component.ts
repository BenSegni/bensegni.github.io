import { CommonModule } from "@angular/common";
import { Component, input, InputSignal } from "@angular/core";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";
import { LogoPipe } from "src/app/global/utils/pipes/logo.pipe";
import { PillPipe } from "src/app/global/utils/pipes/pill.pipe";

@Component({
  selector: "app-post-education-insert",
  templateUrl: "./post-education-insert.component.html",
  styleUrls: ["./post-education-insert.component.scss"],
  imports: [AltTextPipe, LogoPipe, PillPipe, CommonModule],
})
export class PostEducationInsertComponent {
  public training: InputSignal<string> = input<string>("");
}
