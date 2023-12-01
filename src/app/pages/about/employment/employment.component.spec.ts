import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentComponent } from './employment.component';
import { AltTextPipe } from 'src/app/_global/utils/pipes/alt-text.pipe';

describe('EmploymentComponent', () => {
  let component: EmploymentComponent;
  let fixture: ComponentFixture<EmploymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentComponent, AltTextPipe]
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
