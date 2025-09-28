import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
} from "@angular/core";

import { StackConfig } from "./interface/stack";
import { of } from "rxjs";
import { FilterLinkPipe } from "../utils/pipes/filter-link/filter-link.pipe";
import { CommonModule } from "@angular/common";
import { LogoPipe } from "../utils/pipes/logo/logo.pipe";
import { AltTextPipe } from "../utils/pipes/alt-text/alt-text.pipe";
import { PillPipe } from "../utils/pipes/pill/pill.pipe";

@Component({
  selector: "app-stack-list",
  templateUrl: "./stack-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FilterLinkPipe, CommonModule, LogoPipe, PillPipe, AltTextPipe],
})
export class StackListComponent {
  public config: InputSignal<StackConfig> = input<StackConfig>({
    title: "",
    data$: of([]),
  });
}
