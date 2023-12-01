import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import { AboutSubNavigationComponent } from './about-sub-navigation/about-sub-navigation.component';
import { PreviousCompaniesComponent } from '../../_global/previous-companies/previous-companies.component';
import { UtilsModule } from 'src/app/_global/utils/utils.module';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';



@NgModule({
    declarations: [
        AboutComponent,
        ProfileComponent,
        EmploymentComponent,
        EducationComponent,
        AboutSubNavigationComponent,
        PreviousCompaniesComponent,
        TechStackComponent,
        UsefulLinksComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        UtilsModule
    ],
    exports: [
        PreviousCompaniesComponent
    ]
})
export class AboutModule { }
