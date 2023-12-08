import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { TechnologyEnum } from '../../../../app/_global/enum/technology.enum';
import { GlobalDataService } from '../../../../app/_global/global-data.service';
import { showcaseData } from '../../../../app/_global/data/showcase-data';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnDestroy {
    public showcaseLength = 8;
    public filteredShowcaselength = 0;
    public options: string[] = [
        TechnologyEnum.Angular,
        TechnologyEnum.Directus,
        TechnologyEnum.HTML5,
        TechnologyEnum.SASS,
        TechnologyEnum.Typescript,
        TechnologyEnum.UI,
    ];
    public techStackEnum = TechnologyEnum;
    public showFilterList = false;
    public selectedOption = '';
    public filterIcon = '../../../assets/img/filter_icon.svg';

    constructor(public _globalService: GlobalDataService) {}

    public ngOnDestroy(): void {
        this.triggerFilter(this.techStackEnum.UI);
        this._globalService.showcaseFilterValue = '';
    }

    public openCloseFilter(): void {
        this.showFilterList = !this.showFilterList;
    }

    public triggerFilter(option: string): void {
        this.selectedOption = option;
        this._globalService.showcaseFilterValue = option;
        this.showFilterList = false;
        const filteredData = showcaseData.filter(item => item.skills.includes(option));
        this.filteredShowcaselength = filteredData.length;
        this._globalService.showcaseSignal$.set(filteredData)
    }

    public resetFilter():void {
        this.triggerFilter(this.techStackEnum.UI);
        this._globalService.showcaseFilterValue = '';
        this.filteredShowcaselength = 0;
    }
}
