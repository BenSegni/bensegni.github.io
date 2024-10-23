import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";
import { Showcase } from "../../showcase/interface/showcase";
import { GlobalDataService } from "../../../global/global-data.service";

@Component({
  selector: "app-related-synopsis",
  templateUrl: "./related-synopsis.component.html",
  styleUrls: ["./related-synopsis.component.scss"],
})
export class RelatedSynopsisComponent implements OnChanges {
  @Input() public showcaseProject: Showcase | undefined;
  @Output() public showcaseEmitter: EventEmitter<Showcase> = new EventEmitter();
  public relatedProject: Showcase | undefined;

  public constructor(
    private _globalService: GlobalDataService,
    private _router: Router
  ) {}

  public ngOnChanges(): void {
    this.findRelatedProject();
  }

  private findRelatedProject(): void {
    this.relatedProject = this._globalService
      .showcaseSignal$()
      .find((project) => this.showcaseProject?.relatedProjectId === project.id);
  }

  public navigateToSynopsis(project: Showcase): void {
    this._router.navigate([`./showcase/` + project.routeUrl + "/synopsis"]);
    this.findRelatedProject();
    this.showcaseEmitter.emit(project);
  }
}
