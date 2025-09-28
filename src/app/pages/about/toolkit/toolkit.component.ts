import { Component } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { StackConfig } from "../../../global/stack-list/interface/stack";
import { StackListComponent } from "../../../global/stack-list/stack-list.component";

@Component({
  selector: "app-toolkit",
  templateUrl: "./toolkit.component.html",
  imports: [StackListComponent],
})
export class ToolkitComponent extends GlobalDataService {
  public stackConfig: StackConfig = {
    title: "ToolKit",
    data$: this.toolkit$,
  };
}
