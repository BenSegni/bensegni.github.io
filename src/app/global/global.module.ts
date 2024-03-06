import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillPillsComponent } from './skill-pills/skill-pills.component';
import { UtilsModule } from './utils/utils.module';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PreviousCompaniesComponent } from './previous-companies/previous-companies.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PrivacyPolicyLogoComponent } from './privacy-policy-logo/privacy-policy-logo.component';
import { NavigationSubtextComponent } from './navigation/navigation-subtext/navigation-subtext.component';
import { ProjectLinkComponent } from './project-link/project-link.component';
import { SiteBuildComponent } from './site-build/site-build.component';
import { ScrollComponent } from './scroll/scroll.component';
import { LoadingIconComponent } from './loading-icon/loading-icon.component';
import { MediumIconComponent } from './icons/medium-icon/medium-icon.component';
import { BehanceIconComponent } from './icons/behance-icon/behance-icon.component';
import { PdfIconComponent } from './icons/pdf-icon/pdf-icon.component';
import { GithubIconComponent } from './icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from './icons/linkedin-icon/linkedin-icon.component';
import { EmailIconComponent } from './icons/email-icon/email-icon.component';
import { LocationIconComponent } from './icons/location-icon/location-icon.component';
import { NpmIconComponent } from './icons/npm-icon/npm-icon.component';
import { ShareIconComponent } from './icons/share-icon/share-icon.component';
import { ClockIconComponent } from './icons/clock-icon/clock-icon.component';



@NgModule({
    declarations: [
        FooterComponent,
        NavigationComponent,
        PageHeaderComponent,
        PageNotFoundComponent,
        PreviousCompaniesComponent,
        SocialMediaComponent,
        PrivacyPolicyComponent,
        PrivacyPolicyLogoComponent,
        NavigationSubtextComponent,
        ProjectLinkComponent,
        SiteBuildComponent,
        SkillPillsComponent,
        ScrollComponent,
        LoadingIconComponent,
        MediumIconComponent,
        BehanceIconComponent,
        PdfIconComponent,
        GithubIconComponent,
        LinkedinIconComponent,
        EmailIconComponent,
        LocationIconComponent,
        NpmIconComponent,
        ShareIconComponent,
        ClockIconComponent
    ],
    imports: [
        CommonModule,
        UtilsModule,
        RouterModule
    ],
    exports: [
        FooterComponent,
        NavigationComponent,
        PageHeaderComponent,
        PageNotFoundComponent,
        PreviousCompaniesComponent,
        SocialMediaComponent,
        SkillPillsComponent,
        ProjectLinkComponent,
        ScrollComponent,
        LoadingIconComponent,
        MediumIconComponent,
        BehanceIconComponent,
        PdfIconComponent,
        GithubIconComponent,
        LinkedinIconComponent,
        EmailIconComponent,
        LocationIconComponent,
        NpmIconComponent,
        ShareIconComponent,
        ClockIconComponent
    ]
})
export class GlobalModule { }
