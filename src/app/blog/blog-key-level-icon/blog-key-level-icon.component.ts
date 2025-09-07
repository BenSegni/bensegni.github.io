import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AltTextPipe } from "src/app/global/utils/pipes/alt-text.pipe";
import { LogoPipe } from "src/app/global/utils/pipes/logo.pipe";

@Component({
  selector: "app-blog-key-level-icon",
  templateUrl: "./blog-key-level-icon.component.html",
  styleUrls: ["./blog-key-level-icon.component.scss"],
  standalone: true,
  imports: [RouterLink, CommonModule, LogoPipe, AltTextPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogKeyLevelIconComponent {
  public level: InputSignal<string> = input<string>("");
  public isInternal: InputSignal<boolean> = input<boolean>(false);
}
