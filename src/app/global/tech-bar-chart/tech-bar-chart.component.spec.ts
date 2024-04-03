import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBarChartComponent } from './tech-bar-chart.component';
import { PillPipe } from '../utils/pipes/pill.pipe';
import { LogoPipe } from '../utils/pipes/logo.pipe';

describe('TechBarChartComponent', () => {
  let component: TechBarChartComponent;
  let fixture: ComponentFixture<TechBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechBarChartComponent, PillPipe, LogoPipe]
    });
    fixture = TestBed.createComponent(TechBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
