import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SocialMediaComponent } from './_global/social-media/social-media.component';
import { PageHeaderComponent } from './_global/page-header/page-header.component';
import { NavigationComponent } from './_global/navigation/navigation.component';
import { PreviousCompaniesComponent } from './_global/previous-companies/previous-companies.component';
import { FooterComponent } from './_global/footer/footer.component';

describe('AppComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [
            AppComponent,
            SocialMediaComponent,
            PageHeaderComponent,
            NavigationComponent,
            PreviousCompaniesComponent,
            FooterComponent
        ]
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
