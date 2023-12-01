import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSubNavigationComponent } from './about-sub-navigation.component';

describe('AboutSubNavigationComponent', () => {
  let component: AboutSubNavigationComponent;
  let fixture: ComponentFixture<AboutSubNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSubNavigationComponent]
    });
    fixture = TestBed.createComponent(AboutSubNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
