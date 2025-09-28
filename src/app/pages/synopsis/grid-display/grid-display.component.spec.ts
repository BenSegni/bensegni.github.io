import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../../../global/utils/pipes/alt-text/alt-text.pipe';
import { GridDisplayComponent } from './grid-display.component';

describe('GridDisplayComponent', () => {
  let component: GridDisplayComponent;
  let fixture: ComponentFixture<GridDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDisplayComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(GridDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
