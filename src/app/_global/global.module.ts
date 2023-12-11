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
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PrivacyPolicyLogoComponent } from './privacy-policy-logo/privacy-policy-logo.component';



@NgModule({
    declarations: [
        FooterComponent,
        NavigationComponent,
        PageHeaderComponent,
        PageNotFoundComponent,
        PreviousCompaniesComponent,
        SocialMediaComponent,
        SkillPillsComponent,
        BreadcrumbComponent,
        PrivacyPolicyComponent,
        PrivacyPolicyLogoComponent
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
        BreadcrumbComponent
    ]
})
export class GlobalModule { }
