import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyLogoComponent } from './privacy-policy-logo.component';

describe('PrivacyPolicyLogoComponent', () => {
  let component: PrivacyPolicyLogoComponent;
  let fixture: ComponentFixture<PrivacyPolicyLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyLogoComponent]
    });
    fixture = TestBed.createComponent(PrivacyPolicyLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
