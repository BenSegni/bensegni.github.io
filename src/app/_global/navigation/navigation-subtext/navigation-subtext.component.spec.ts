import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSubtextComponent } from './navigation-subtext.component';

describe('NavigationSubtextComponent', () => {
  let component: NavigationSubtextComponent;
  let fixture: ComponentFixture<NavigationSubtextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationSubtextComponent]
    });
    fixture = TestBed.createComponent(NavigationSubtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
