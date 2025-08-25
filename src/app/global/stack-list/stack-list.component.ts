import { ChangeDetectionStrategy, Component, input, InputSignal } from "@angular/core";

import { StackConfig } from "./interface/stack";
import { of } from "rxjs";

@Component({
    selector: "app-stack-list",
    templateUrl: "./stack-list.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class StackListComponent {
  public config: InputSignal<StackConfig> = input<StackConfig>({
    title: "",
    data$: of([]),
  });
}
