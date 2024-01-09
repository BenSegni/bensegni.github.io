import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './global/social-media/social-media.component';
import { PageHeaderComponent } from './global/page-header/page-header.component';
import { NavigationComponent } from './global/navigation/navigation.component';
import { PreviousCompaniesComponent } from './global/previous-companies/previous-companies.component';
import { FooterComponent } from './global/footer/footer.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent,
                SocialMediaComponent,
                PageHeaderComponent,
                NavigationComponent,
                PreviousCompaniesComponent,
                FooterComponent
            ],
        });
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
