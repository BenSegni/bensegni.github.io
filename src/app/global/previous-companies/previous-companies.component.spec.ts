import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCompaniesComponent } from './previous-companies.component';
import { AltTextPipe } from '../utils/pipes/alt-text/alt-text.pipe';

describe('PreviousCompaniesComponent', () => {
  let component: PreviousCompaniesComponent;
  let fixture: ComponentFixture<PreviousCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousCompaniesComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(PreviousCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('testing Subscription()', () => {
    it('should emit values', () => {
        component.logos$.subscribe({
            next: (response) => {
                expect(response).toBeTruthy();
                expect(response[0]).toBe('../../../assets/img/amazon.svg')
            }
        })
    })
  })
});
