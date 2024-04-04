import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './global/social-media/social-media.component';
import { PageHeaderComponent } from './global/page-header/page-header.component';
import { NavigationComponent } from './global/navigation/navigation.component';
import { PreviousCompaniesComponent } from './global/previous-companies/previous-companies.component';
import { FooterComponent } from './global/footer/footer.component';
import { ScrollComponent } from './global/scroll/scroll.component';
import { LoadingIconComponent } from './global/loading-icon/loading-icon.component';
import { PrivacyPolicyLogoComponent } from './global/privacy-policy-logo/privacy-policy-logo.component';
import { AltTextPipe } from './global/utils/pipes/alt-text.pipe';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from './app-routing.module';
import { BehanceIconComponent } from './global/icons/behance-icon/behance-icon.component';
import { GithubIconComponent } from './global/icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from './global/icons/linkedin-icon/linkedin-icon.component';
import { NpmIconComponent } from './global/icons/npm-icon/npm-icon.component';
import { RecentBlogPostComponent } from './global/recent-blog-post/recent-blog-post.component';
import { LocationIconComponent } from './global/icons/location-icon/location-icon.component';

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
                LocationIconComponent
            ]
        });

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        expect(component).toBeTruthy();
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
