import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectPresentationComponent } from './current-project-presentation.component';

describe('CurrentProjectPresentationComponent', () => {
  let component: CurrentProjectPresentationComponent;
  let fixture: ComponentFixture<CurrentProjectPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentProjectPresentationComponent]
    });
    fixture = TestBed.createComponent(CurrentProjectPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
