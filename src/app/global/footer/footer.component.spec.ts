import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../utils/pipes/alt-text/alt-text.pipe';
import { FooterComponent } from './footer.component';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';
import { LogoPipe } from '../utils/pipes/logo/logo.pipe';
import { PrivacyPolicyComponent } from '../privacy-policy/privacy-policy.component';
import { PrivacyPolicyLogoComponent } from '../privacy-policy-logo/privacy-policy-logo.component';
import { RouterTestingModule } from '@angular/router/testing';

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
              GithubIconComponent,
              LogoPipe,
              AltTextPipe
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
