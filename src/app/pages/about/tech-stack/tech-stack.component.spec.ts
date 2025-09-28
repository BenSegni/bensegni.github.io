import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackComponent } from './tech-stack.component';
import { LogoPipe } from '../../../global/utils/pipes/logo/logo.pipe';
import { AltTextPipe } from '../../../global/utils/pipes/alt-text/alt-text.pipe';
import { PillPipe } from '../../../global/utils/pipes/pill/pill.pipe';
import { StackListComponent } from '../../../global/stack-list/stack-list.component';
import { FilterLinkPipe } from '../../../global/utils/pipes/filter-link/filter-link.pipe';

describe('TechStackComponent', () => {
  let component: TechStackComponent;
  let fixture: ComponentFixture<TechStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechStackComponent, LogoPipe, AltTextPipe, PillPipe, StackListComponent, FilterLinkPipe]
    });
    fixture = TestBed.createComponent(TechStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
