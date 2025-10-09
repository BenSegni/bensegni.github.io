import { Component, inject } from "@angular/core";
import { GlobalDataService } from "../../../global/global-data.service";
import { AsyncPipe } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: "app-project-list",
  imports: [AsyncPipe],
  templateUrl: "./project-list.component.html",
  styleUrl: "./project-list.component.scss",
})
export class ProjectListComponent extends GlobalDataService {
  private readonly _router: Router = inject(Router);
  viewProject(projectId: string) {
    this._router.navigate(["/current-projects", projectId]);
  }
}
