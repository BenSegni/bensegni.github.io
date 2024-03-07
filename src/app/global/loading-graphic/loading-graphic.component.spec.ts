import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingGraphicComponent } from './loading-graphic.component';
import { AltTextPipe } from '../utils/pipes/alt-text.pipe';

describe('LoadingGraphicComponent', () => {
  let component: LoadingGraphicComponent;
  let fixture: ComponentFixture<LoadingGraphicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingGraphicComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(LoadingGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
