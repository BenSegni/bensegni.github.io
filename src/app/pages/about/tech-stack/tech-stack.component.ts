import { Component } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { StackConfig } from "../../../global/stack-list/interface/stack";
import { StackListComponent } from "../../../global/stack-list/stack-list.component";

@Component({
  selector: "app-tech-stack",
  templateUrl: "./tech-stack.component.html",
  imports: [StackListComponent],
})
export class TechStackComponent extends GlobalDataService {
  public stackConfig: StackConfig = {
    title: "Technologies",
    data$: this.technologies$,
  };
}
