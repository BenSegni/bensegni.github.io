import {
  Component,
  OnDestroy,
  input,
  output,
  signal,
  InputSignal,
  inject,
  OutputEmitterRef,
} from "@angular/core";

import { FadeInButton } from "../utils/animations/fade.animation";
import { FilterConfig } from "./interface/filter.config";
import { GlobalDataService } from "../global-data.service";
import { TechnologyEnum } from "../enum/technology.enum";
import { CommonModule } from "@angular/common";
import { AltTextPipe } from "../utils/pipes/alt-text.pipe";
import { LogoPipe } from "../utils/pipes/logo.pipe";
import { FilterLinkPipe } from "../utils/pipes/filter-link.pipe";

interface Filterable {
  skills: string[];
}

@Component({
  selector: "app-shared-filter",
  templateUrl: "./shared-filter.component.html",
  styleUrls: ["./shared-filter.component.scss"],
  animations: [FadeInButton()],
  standalone: true,
  imports: [CommonModule, AltTextPipe, LogoPipe, FilterLinkPipe],
})
export class SharedFilterComponent<T extends Filterable> implements OnDestroy {
  public config: InputSignal<FilterConfig<T>> = input<FilterConfig<T>>({
    data: [],
    listLength: 0,
    signalData: signal<T[]>([]),
    options: [],
    resetValue: "",
  });

  public showLayout: InputSignal<boolean> = input<boolean>(false);
  public emitLayout: OutputEmitterRef<boolean> = output<boolean>();
  public columnLayout = false;
  public grid = "../../../assets/img/grid_icon.svg";
  public column = "../../../assets/img/column_icon.svg";
  public filteredLength = 0;
  public options: string[] = [];
  public techStackEnum = TechnologyEnum;
  public showFilterList = false;
  public selectedOption = "";
  public filterIcon = "../../../assets/img/filter_icon.svg";

  public _globalService: GlobalDataService = inject(GlobalDataService);

  public ngOnDestroy(): void {
    this.triggerFilter(this.techStackEnum.UI);
    this._globalService.filterValue = "";
  }

  public openCloseFilter(): void {
    this.showFilterList = !this.showFilterList;
  }

  public triggerFilter(option: string): void {
    this.selectedOption = option;
    this._globalService.filterValue = option;
    this.showFilterList = false;
    const filteredData = this.config().data.filter((item) =>
      item.skills.includes(option)
    );
    this.filteredLength = filteredData.length;
    this.config().signalData.set(filteredData);
  }

  public resetFilter(): void {
    this.triggerFilter(this.config().resetValue);
    this._globalService.filterValue = "";
    this.filteredLength = 0;
  }

  public changeViewLayout(): void {
    this.columnLayout = !this.columnLayout;
    this.emitLayout.emit(this.columnLayout);
  }
}
