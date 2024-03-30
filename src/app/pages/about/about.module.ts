import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import { AboutSubNavigationComponent } from './about-sub-navigation/about-sub-navigation.component';
import { UtilsModule } from '../../global/utils/utils.module';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { UsefulLinksComponent } from './useful-links/useful-links.component';
import { GlobalModule } from '../../global/global.module';
import { EmploymentInsertComponent } from './employment/employment-insert/employment-insert.component';
import { EducationInsertComponent } from './education/education-insert/education-insert.component';
import { PostEducationInsertComponent } from './education/post-education-insert/post-education-insert.component';
import { ProfileImagesComponent } from './profile/profile-images/profile-images.component';
import { ToolkitComponent } from './toolkit/toolkit.component';



@NgModule({
    declarations: [
        AboutComponent,
        ProfileComponent,
        EmploymentComponent,
        EducationComponent,
        AboutSubNavigationComponent,
        TechStackComponent,
        UsefulLinksComponent,
        EmploymentInsertComponent,
        EducationInsertComponent,
        PostEducationInsertComponent,
        ProfileImagesComponent,
        ToolkitComponent
    ],
    imports: [
        CommonModule,
        AboutRoutingModule,
        UtilsModule,
        GlobalModule,
    ]
})
export class AboutModule { }
