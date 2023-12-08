import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectDetailComponent } from './current-project-detail.component';

describe('CurrentProjectDetailComponent', () => {
  let component: CurrentProjectDetailComponent;
  let fixture: ComponentFixture<CurrentProjectDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentProjectDetailComponent]
    });
    fixture = TestBed.createComponent(CurrentProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
