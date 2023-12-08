import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectHeaderComponent } from './current-project-header.component';

describe('CurrentProjectHeaderComponent', () => {
  let component: CurrentProjectHeaderComponent;
  let fixture: ComponentFixture<CurrentProjectHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentProjectHeaderComponent]
    });
    fixture = TestBed.createComponent(CurrentProjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
