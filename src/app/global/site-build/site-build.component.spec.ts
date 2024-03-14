import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBuildComponent } from './site-build.component';
import { SkillPillsComponent } from '../skill-pills/skill-pills.component';
import { ProjectLinkComponent } from '../project-link/project-link.component';
import { PillPipe } from '../utils/pipes/pill.pipe';
import { FilterPipe } from '../utils/pipes/filter.pipe';
import { LogoPipe } from '../utils/pipes/logo.pipe';
import { AltTextPipe } from '../utils/pipes/alt-text.pipe';
import { FilterLinkPipe } from '../utils/pipes/filter-link.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BehanceIconComponent } from '../icons/behance-icon/behance-icon.component';

describe('SiteBuildComponent', () => {
    let component: SiteBuildComponent;
    let fixture: ComponentFixture<SiteBuildComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [
                SiteBuildComponent,
                SkillPillsComponent,
                ProjectLinkComponent,
                PillPipe,
                FilterPipe,
                LogoPipe,
                AltTextPipe,
                FilterLinkPipe,
                BehanceIconComponent
            ]
        });
        fixture = TestBed.createComponent(SiteBuildComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
