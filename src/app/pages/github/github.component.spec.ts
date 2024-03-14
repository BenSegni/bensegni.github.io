import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';
import { InfoDirective } from '../../global/utils/directives/info.directive';
import { PillPipe } from '../../global/utils/pipes/pill.pipe';
import { FilterPipe } from '../../global/utils/pipes/filter.pipe';
import { LogoPipe } from '../../global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../global/utils/pipes/alt-text.pipe';
import { FilterLinkPipe } from '../../global/utils/pipes/filter-link.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubIconComponent } from '../../global/icons/github-icon/github-icon.component';

describe('GithubComponent', () => {
    let component: GithubComponent;
    let fixture: ComponentFixture<GithubComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [
                GithubComponent,
                SkillPillsComponent,
                InfoDirective,
                PillPipe,
                FilterPipe,
                LogoPipe,
                AltTextPipe,
                FilterLinkPipe,
                GithubIconComponent
            ]
        });
        fixture = TestBed.createComponent(GithubComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
