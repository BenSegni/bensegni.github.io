import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmComponent } from './npm.component';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';
import { NpmIconComponent } from '../../global/icons/npm-icon/npm-icon.component';
import { PillPipe } from '../../global/utils/pipes/pill.pipe';
import { FilterPipe } from '../../global/utils/pipes/filter.pipe';
import { LogoPipe } from '../../global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../global/utils/pipes/alt-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterLinkPipe } from '../../global/utils/pipes/filter-link.pipe';

describe('NpmComponent', () => {
  let component: NpmComponent;
  let fixture: ComponentFixture<NpmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NpmComponent,
        SkillPillsComponent,
        NpmIconComponent,
        PillPipe,
        FilterPipe,
        LogoPipe,
        AltTextPipe,
        FilterLinkPipe
      ],
      imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(NpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
