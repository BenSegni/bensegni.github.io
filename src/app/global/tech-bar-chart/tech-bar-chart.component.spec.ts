import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechBarChartComponent } from './tech-bar-chart.component';

describe('TechBarChartComponent', () => {
  let component: TechBarChartComponent;
  let fixture: ComponentFixture<TechBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechBarChartComponent]
    });
    fixture = TestBed.createComponent(TechBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
