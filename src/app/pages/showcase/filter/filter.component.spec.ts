import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { AltTextPipe } from '../../../global/utils/pipes/alt-text.pipe';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FilterComponent, AltTextPipe]
        });
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Testing openCloseFilter', () => {
        beforeEach(() => {
            component.showFilterList = true;
        });

        it('should hide filterlist on click', () => {
            component.openCloseFilter();

            expect(component.showFilterList).toBeFalsy();
        })
    });

    describe('Testing resetFilter()', () => {
        it('should reset the filter search', () => {
            const spyTrigger = spyOn(component, 'triggerFilter');

            component.resetFilter();

            expect(spyTrigger).toHaveBeenCalledWith(component.techStackEnum.UI);
            expect(component._globalService.showcaseFilterValue).toEqual('');
            expect(component.filteredShowcaselength).toEqual(0);
        })
    })
});
