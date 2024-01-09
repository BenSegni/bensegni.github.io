import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackComponent } from './tech-stack.component';
import { LogoPipe } from '../../../global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../../global/utils/pipes/alt-text.pipe';
import { PillPipe } from '../../../global/utils/pipes/pill.pipe';

describe('TechStackComponent', () => {
  let component: TechStackComponent;
  let fixture: ComponentFixture<TechStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechStackComponent, LogoPipe, AltTextPipe, PillPipe]
    });
    fixture = TestBed.createComponent(TechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
