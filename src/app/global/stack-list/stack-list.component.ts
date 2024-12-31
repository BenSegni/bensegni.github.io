import { ChangeDetectionStrategy, Component, Input, input } from "@angular/core";

import { StackConfig } from "./interface/stack";
import { of } from "rxjs";

@Component({
  selector: "app-stack-list",
  templateUrl: "./stack-list.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StackListComponent<T> {
  public config = input<StackConfig<T>>({
    title: "",
    data$: of([]),
  });
}
