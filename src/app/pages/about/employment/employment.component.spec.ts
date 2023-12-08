import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentComponent } from './employment.component';
import { AltTextPipe } from '../../../../app/_global/utils/pipes/alt-text.pipe';
import { UsefulLinksComponent } from '../useful-links/useful-links.component';
import { EmploymentInsertComponent } from './employment-insert/employment-insert.component';
import { SkillPillsComponent } from '../../../../app/_global/skill-pills/skill-pills.component';
import { PillPipe } from '../../../../app/_global/utils/pipes/pill.pipe';
import { LogoPipe } from '../../../../app/_global/utils/pipes/logo.pipe';

describe('EmploymentComponent', () => {
  let component: EmploymentComponent;
  let fixture: ComponentFixture<EmploymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmploymentComponent,
        AltTextPipe,
        UsefulLinksComponent,
        EmploymentInsertComponent,
        SkillPillsComponent,
        PillPipe,
        LogoPipe
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
