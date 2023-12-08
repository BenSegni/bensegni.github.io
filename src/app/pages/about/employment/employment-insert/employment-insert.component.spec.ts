import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentInsertComponent } from './employment-insert.component';

describe('EmploymentInsertComponent', () => {
  let component: EmploymentInsertComponent;
  let fixture: ComponentFixture<EmploymentInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmploymentInsertComponent]
    });
    fixture = TestBed.createComponent(EmploymentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
