import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PrivacyPolicyLogoComponent } from '../privacy-policy-logo/privacy-policy-logo.component';

describe('PrivacyPolicyComponent', () => {
  let component: PrivacyPolicyComponent;
  let fixture: ComponentFixture<PrivacyPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyPolicyComponent, PrivacyPolicyLogoComponent]
    });
    fixture = TestBed.createComponent(PrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
