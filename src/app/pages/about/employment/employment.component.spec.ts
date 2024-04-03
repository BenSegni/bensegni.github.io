import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentComponent } from './employment.component';
import { AltTextPipe } from '../../../global/utils/pipes/alt-text.pipe';
import { UsefulLinksComponent } from '../useful-links/useful-links.component';
import { EmploymentInsertComponent } from './employment-insert/employment-insert.component';
import { SkillPillsComponent } from '../../../global/skill-pills/skill-pills.component';
import { PillPipe } from '../../../global/utils/pipes/pill.pipe';
import { LogoPipe } from '../../../global/utils/pipes/logo.pipe';
import { FilterPipe } from '../../../global/utils/pipes/filter.pipe';
import { FilterLinkPipe } from '../../../global/utils/pipes/filter-link.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechBarChartComponent } from 'src/app/global/tech-bar-chart/tech-bar-chart.component';

describe('EmploymentComponent', () => {
    let component: EmploymentComponent;
    let fixture: ComponentFixture<EmploymentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BrowserAnimationsModule],
            declarations: [
                EmploymentComponent,
                AltTextPipe,
                UsefulLinksComponent,
                EmploymentInsertComponent,
                SkillPillsComponent,
                PillPipe,
                LogoPipe,
                FilterPipe,
                FilterLinkPipe,
                TechBarChartComponent
            ]
        });
        fixture = TestBed.createComponent(EmploymentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('testing Subscription()', () => {
        it('should emit values', () => {
            component.employment$.subscribe({
                next: (response) => {
                    expect(response).toBeTruthy();
                    expect(response[0].company).toBe('British Airways Plc')
                }
            })
        })
    })
});
