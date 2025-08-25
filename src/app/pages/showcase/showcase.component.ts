import { Component } from '@angular/core';
import { FilterConfig } from '../../global/shared-filter/interface/filter.config';
import { GlobalDataService } from '../../global/global-data.service';
import { Showcase } from './interface/showcase';
import { TechnologyEnum } from '../../global/enum/technology.enum';
import { showcaseData } from '../../global/data/showcase-data';

@Component({
    selector: 'app-showcase',
    templateUrl: './showcase.component.html',
    standalone: false
})
export class ShowcaseComponent {
  public columnLayout = false;

  public constructor(private _globalDataService: GlobalDataService) { }

  public changeViewLayout(layout: boolean): void {
    this.columnLayout = layout;
  }

  public filterConfig: FilterConfig<Showcase> = {
    data: showcaseData,
    listLength: showcaseData.length,
    signalData: this._globalDataService.showcaseSignal$,
    options: [
      TechnologyEnum.Angular,
      TechnologyEnum.Directus,
      TechnologyEnum.HTML5,
      TechnologyEnum.SASS,
      TechnologyEnum.Typescript,
    ],
    resetValue: TechnologyEnum.UI,
  }
}
