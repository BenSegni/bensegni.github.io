import { ChangeDetectionStrategy, Component, inject, input, InputSignal } from "@angular/core";

import { GlobalDataService } from "../global-data.service";
import { skillsHighlightAnimation } from "../utils/animations/skills.animation";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";
import { FilterLinkPipe } from "../utils/pipes/filter-link/filter-link.pipe";
import { FilterPipe } from "../utils/pipes/filter/filter.pipe";
import { LogoPipe } from "../utils/pipes/logo/logo.pipe";
import { PillPipe } from "../utils/pipes/pill/pill.pipe";

@Component({
  selector: "app-skill-pills",
  templateUrl: "./skill-pills.component.html",
  styleUrls: ["./skill-pills.component.scss"],
  animations: [skillsHighlightAnimation()],
  imports: [
    CommonModule,
    AltTextPipe,
    LogoPipe,
    FilterLinkPipe,
    FilterPipe,
    PillPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillPillsComponent {
  public skills: InputSignal<string[]> = input<string[]>([""]);
  public skillsType: InputSignal<string> = input<string>("");
  public size: InputSignal<string> = input<string>("");
  public showLink: InputSignal<boolean> = input<boolean>(false);
  public _globalService: GlobalDataService = inject(GlobalDataService);
}
