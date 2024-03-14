import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { PrivacyPolicyLogoComponent } from '../privacy-policy-logo/privacy-policy-logo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
              FooterComponent,
              PrivacyPolicyComponent,
              PrivacyPolicyLogoComponent,
              GithubIconComponent
            ]
        });
        fixture = TestBed.createComponent(FooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
