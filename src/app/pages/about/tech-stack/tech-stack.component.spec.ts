import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackComponent } from './tech-stack.component';
import { LogoPipe } from '../../../../app/_global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../../../app/_global/utils/pipes/alt-text.pipe';

describe('TechStackComponent', () => {
  let component: TechStackComponent;
  let fixture: ComponentFixture<TechStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechStackComponent, LogoPipe, AltTextPipe]
    });
    fixture = TestBed.createComponent(TechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
