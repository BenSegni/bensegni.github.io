import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../utils/pipes/alt-text.pipe';
import { LogoPipe } from '../utils/pipes/logo.pipe';
import { PillPipe } from '../utils/pipes/pill.pipe';
import { TechBarChartComponent } from './tech-bar-chart.component';

describe('TechBarChartComponent', () => {
  let component: TechBarChartComponent;
  let fixture: ComponentFixture<TechBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechBarChartComponent, PillPipe, LogoPipe, AltTextPipe]
    });
    fixture = TestBed.createComponent(TechBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
