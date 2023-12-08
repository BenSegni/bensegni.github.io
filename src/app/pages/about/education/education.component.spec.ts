import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { LogoPipe } from '../../../../app/_global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../../../app/_global/utils/pipes/alt-text.pipe';
import { PostEducationInsertComponent } from './post-education-insert/post-education-insert.component';
import { EducationInsertComponent } from './education-insert/education-insert.component';

describe('EducationComponent', () => {
    let component: EducationComponent;
    let fixture: ComponentFixture<EducationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                EducationComponent,
                LogoPipe,
                AltTextPipe,
                PostEducationInsertComponent,
                EducationInsertComponent
            ]
        });
        fixture = TestBed.createComponent(EducationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('testing Subscription()', () => {
        it('should emit values', () => {
            component.education$.subscribe({
                next: (response) => {
                    expect(response).toBeTruthy();
                    expect(response[0].institution).toBe('Northumbria University, Newcastle upon Tyne')
                }
            })
        })
    })
});
