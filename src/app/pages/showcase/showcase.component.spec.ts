import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';
import { UtilsModule } from '../../global/utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowcaseItemsComponent } from './showcase-items/showcase-items.component';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';
import { SharedFilterComponent } from '../../global/shared-filter/shared-filter.component';
import { ProjectDetailsLinkComponent } from './project-details-link/project-details-link.component';

describe('ShowcaseComponent', () => {
    let component: ShowcaseComponent;
    let fixture: ComponentFixture<ShowcaseComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UtilsModule, BrowserAnimationsModule, RouterTestingModule],
            declarations: [
              ShowcaseComponent,
              ProjectDetailsComponent,
              ShowcaseItemsComponent,
              SkillPillsComponent,
              SharedFilterComponent,
              ProjectDetailsLinkComponent
            ]
        });
        fixture = TestBed.createComponent(ShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Testing changeViewLayout()', () => {
      beforeEach(() => {
        component.columnLayout = false;
      });

      it('should toggle the layout from grid to column', () => {
        component.changeViewLayout(true);

        expect(component.columnLayout).toBeTruthy();
      })
    });
});
