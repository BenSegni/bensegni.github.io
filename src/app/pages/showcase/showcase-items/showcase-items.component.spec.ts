import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../../../global/utils/pipes/alt-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterLinkPipe } from '../../../global/utils/pipes/filter-link.pipe';
import { FilterPipe } from '../../../global/utils/pipes/filter.pipe';
import { LogoPipe } from '../../../global/utils/pipes/logo.pipe';
import { PillPipe } from '../../../global/utils/pipes/pill.pipe';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectDetailsLinkComponent } from '../project-details-link/project-details-link.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Showcase } from '../interface/showcase';
import { ShowcaseItemsComponent } from './showcase-items.component';
import { SkillPillsComponent } from '../../../global/skill-pills/skill-pills.component';

describe('ShowcaseItemsComponent', () => {
    let component: ShowcaseItemsComponent;
    let fixture: ComponentFixture<ShowcaseItemsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, BrowserAnimationsModule],
            declarations: [
                ShowcaseItemsComponent,
                ProjectDetailsComponent,
                SkillPillsComponent,
                PillPipe,
                FilterPipe,
                LogoPipe,
                AltTextPipe,
                FilterLinkPipe,
                ProjectDetailsLinkComponent
            ]
        });
        fixture = TestBed.createComponent(ShowcaseItemsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing navigateToSynopsis()', () => {
        it('should navigate to the identified project', () => {
            const routerstub: Router = TestBed.inject(Router);
            const spyRouter = spyOn(routerstub, 'navigate');
            const project = component['_globalService'].showcaseSignal$().find(project => project.id = '1');

            component.navigateToSynopsis(project as Showcase);

            expect(spyRouter).toHaveBeenCalled();
        })
    });
});
