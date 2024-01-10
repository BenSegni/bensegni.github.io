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
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { routes } from './app-routing.module';

class MockRouter {
    public ne = new NavigationStart(0, 'http://localhost:4200/about');
    public events = new Observable(observer => {
        observer.next(this.ne);
        observer.complete();
    });
}

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
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
                AltTextPipe
            ],
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
    })
});
