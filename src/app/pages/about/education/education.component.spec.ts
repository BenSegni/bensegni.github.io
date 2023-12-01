import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationComponent } from './education.component';
import { LogoPipe } from 'src/app/_global/utils/pipes/logo.pipe';
import { AltTextPipe } from 'src/app/_global/utils/pipes/alt-text.pipe';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationComponent, LogoPipe, AltTextPipe]
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
