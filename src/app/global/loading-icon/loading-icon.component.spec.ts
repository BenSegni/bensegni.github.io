import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIconComponent } from './loading-icon.component';
import { AltTextPipe } from '../utils/pipes/alt-text/alt-text.pipe';

describe('LoadingIconComponent', () => {
  let component: LoadingIconComponent;
  let fixture: ComponentFixture<LoadingIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingIconComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(LoadingIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
