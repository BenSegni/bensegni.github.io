import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitComponent } from './toolkit.component';
import { PillPipe } from '../../../global/utils/pipes/pill.pipe';
import { LogoPipe } from '../../../global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../../global/utils/pipes/alt-text.pipe';
import { FilterLinkPipe } from '../../../global/utils/pipes/filter-link.pipe';
import { StackListComponent } from '../../../global/stack-list/stack-list.component';

describe('ToolkitComponent', () => {
  let component: ToolkitComponent;
  let fixture: ComponentFixture<ToolkitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolkitComponent, PillPipe, LogoPipe, AltTextPipe, FilterLinkPipe, StackListComponent]
    });
    fixture = TestBed.createComponent(ToolkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
