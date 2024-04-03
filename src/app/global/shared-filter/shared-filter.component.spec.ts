import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFilterComponent } from './shared-filter.component';
import { showcaseData } from '../data/showcase-data';

describe('SharedFilterComponent', () => {
  let component: SharedFilterComponent;
  let fixture: ComponentFixture<SharedFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedFilterComponent]
    });
    fixture = TestBed.createComponent(SharedFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing resetFilter()', () => {
    beforeEach(() => {
      component.config = {
        data: showcaseData,
        listLength: showcaseData.length,
        signalData: component['_globalService'].showcaseSignal$,
        resetValue: 'UX/UI',
        options: ['A', 'B', 'C']
      }
    });

    it('should reset the filter', () => {
      const spyTrigger = spyOn(component, 'triggerFilter').and.callThrough();

      component.resetFilter();

      expect(component.filteredLength).toBe(0);
      expect(component['_globalService'].filterValue).toBe('');
      expect(spyTrigger).toHaveBeenCalledWith('UX/UI')
    });
  })
});
