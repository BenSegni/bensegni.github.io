import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseComponent } from './showcase.component';
import { UtilsModule } from '../../global/utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ShowcaseComponent', () => {
    let component: ShowcaseComponent;
    let fixture: ComponentFixture<ShowcaseComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [UtilsModule, BrowserAnimationsModule, RouterTestingModule],
            declarations: [ShowcaseComponent, ProjectDetailsComponent]
        });
        fixture = TestBed.createComponent(ShowcaseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('testing Subscription()', () => {
        it('should emit values', () => {
            component.showcase$.subscribe({
                next: (response) => {
                    expect(response).toBeTruthy();
                    expect(response.length).toBe(8)
                    expect(response[0].projectTitle).toBe('9a Studios')
                }
            })
        })
    });

    describe('Testing changeViewLayout()', () => {
        it('should change column Layout using boolean', () => {
            component.changeViewLayout();
            expect(component.columnLayout).toBeTruthy();
        })
    })
});
