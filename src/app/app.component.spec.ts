import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

import { AltTextPipe } from './global/utils/pipes/alt-text.pipe';
import { AppComponent } from './app.component';
import { BehanceIconComponent } from './global/icons/behance-icon/behance-icon.component';
import { FooterComponent } from './global/footer/footer.component';
import { GithubIconComponent } from './global/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from './global/icons/linkedin-icon/linkedin-icon.component';
import { LoadingIconComponent } from './global/loading-icon/loading-icon.component';
import { LocationIconComponent } from './global/icons/location-icon/location-icon.component';
import { LogoPipe } from './global/utils/pipes/logo.pipe';
import { NavigationComponent } from './global/navigation/navigation.component';
import { NpmIconComponent } from './global/icons/npm-icon/npm-icon.component';
import { Observable } from 'rxjs';
import { PageHeaderComponent } from './global/page-header/page-header.component';
import { PreviousCompaniesComponent } from './global/previous-companies/previous-companies.component';
import { PrivacyPolicyLogoComponent } from './global/privacy-policy-logo/privacy-policy-logo.component';
import { RecentBlogPostComponent } from './global/recent-blog-post/recent-blog-post.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollComponent } from './global/scroll/scroll.component';
import { SocialMediaComponent } from './global/social-media/social-media.component';
import { routes } from './app-routing.module';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), RecentBlogPostComponent],
            declarations: [
                AppComponent,
                SocialMediaComponent,
                PageHeaderComponent,
                NavigationComponent,
                PreviousCompaniesComponent,
                FooterComponent,
                ScrollComponent,
                LoadingIconComponent,
                PrivacyPolicyLogoComponent,
                AltTextPipe,
                BehanceIconComponent,
                GithubIconComponent,
                LinkedinIconComponent,
                NpmIconComponent,
                LocationIconComponent,
                LogoPipe
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Testing ngOnInit LifeCycle Hook', () => {
        it('should call oninitialLoad method', () => {
            const spyLoad = spyOn(component, 'onInitialLoad').and.callThrough();
            const spyScroll = spyOn<any>(component, 'scrollToTop').and.callThrough();

            component.ngOnInit();

            expect(spyLoad).toHaveBeenCalled();
            expect(spyScroll).toHaveBeenCalled();
        })
    });
});
