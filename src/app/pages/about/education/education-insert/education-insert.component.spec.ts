import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationInsertComponent } from './education-insert.component';

describe('EducationInsertComponent', () => {
  let component: EducationInsertComponent;
  let fixture: ComponentFixture<EducationInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationInsertComponent]
    });
    fixture = TestBed.createComponent(EducationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
