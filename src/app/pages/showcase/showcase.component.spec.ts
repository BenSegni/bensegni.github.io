import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';
import { UtilsModule } from '../../global/utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FilterComponent } from './filter/filter.component';
import { ShowcaseItemsComponent } from './showcase-items/showcase-items.component';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';

describe('ShowcaseComponent', () => {
    let component: ShowcaseComponent;
    let fixture: ComponentFixture<ShowcaseComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UtilsModule, BrowserAnimationsModule, RouterTestingModule],
            declarations: [ShowcaseComponent, ProjectDetailsComponent, FilterComponent, ShowcaseItemsComponent, SkillPillsComponent]
        });
        fixture = TestBed.createComponent(ShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Testing changeViewLayout()', () => {
        it('should change column Layout using boolean', () => {
            component.changeViewLayout();
            expect(component.columnLayout).toBeTruthy();
        })
    })
});
