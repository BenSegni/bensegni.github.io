import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectsComponent } from './current-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackLinkComponent } from './feedback-link/feedback-link.component';
import { AltTextPipe } from '../../global/utils/pipes/alt-text/alt-text.pipe';
import { CurrentProjectHeaderComponent } from './current-project-header/current-project-header.component';
import { CurrentProjectPresentationComponent } from './current-project-presentation/current-project-presentation.component';
import { CurrentProjectDetailComponent } from './current-project-detail/current-project-detail.component';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';
import { PillPipe } from '../../global/utils/pipes/pill/pill.pipe';
import { FilterPipe } from '../../global/utils/pipes/filter/filter.pipe';
import { LogoPipe } from '../../global/utils/pipes/logo/logo.pipe';
import { FilterLinkPipe } from '../../global/utils/pipes/filter-link/filter-link.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechBarChartComponent } from '../../global/tech-bar-chart/tech-bar-chart.component';

describe('CurrentProjectsComponent', () => {
    let component: CurrentProjectsComponent;
    let fixture: ComponentFixture<CurrentProjectsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [
                CurrentProjectsComponent,
                FeedbackComponent,
                FeedbackLinkComponent,
                AltTextPipe,
                CurrentProjectHeaderComponent,
                CurrentProjectPresentationComponent,
                CurrentProjectDetailComponent,
                SkillPillsComponent,
                PillPipe,
                FilterPipe,
                LogoPipe,
                FilterLinkPipe,
                TechBarChartComponent
            ]
        });
        fixture = TestBed.createComponent(CurrentProjectsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('testing Subscription()', () => {
        it('should emit values', () => {
            component.projects$.subscribe({
                next: (response) => {
                    expect(response).toBeTruthy();
                    expect(response.title).toBe('Technical Design Lead, British Airways')
                }
            })
        })
    })
});
