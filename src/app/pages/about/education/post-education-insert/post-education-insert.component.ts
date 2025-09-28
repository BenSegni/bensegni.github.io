import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { AltTextPipe } from "../../../../global/utils/pipes/alt-text/alt-text.pipe";
import { LogoPipe } from "../../../../global/utils/pipes/logo/logo.pipe";
import { PillPipe } from "../../../../global/utils/pipes/pill/pill.pipe";

@Component({
  selector: "app-post-education-insert",
  templateUrl: "./post-education-insert.component.html",
  styleUrls: ["./post-education-insert.component.scss"],
  imports: [AltTextPipe, LogoPipe, PillPipe, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostEducationInsertComponent {
  public training: InputSignal<string> = input<string>("");
}
