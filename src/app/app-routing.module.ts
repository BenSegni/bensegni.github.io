import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { AboutComponent } from './pages/about/about.component';
import { CurrentProjectsComponent } from './pages/current-projects/current-projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProfileComponent } from './pages/about/profile/profile.component';
import { EmploymentComponent } from './pages/about/employment/employment.component';
import { EducationComponent } from './pages/about/education/education.component';
import { TechStackComponent } from './pages/about/tech-stack/tech-stack.component';
import { PageNotFoundComponent } from './_global/page-not-found/page-not-found.component';
import { SynopsisComponent } from './pages/synopsis/synopsis.component';
import { PrivacyPolicyComponent } from './_global/privacy-policy/privacy-policy.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'showcase', pathMatch: 'full',
    },
    {
        path: 'showcase',
        component: ShowcaseComponent,
    },
    {
        path: 'showcase/:id/synopsis',
        component: SynopsisComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            breadcrumb: 'About'
        },
        children: [
            {
                path: '',
                redirectTo: 'about-me', pathMatch: 'full',
            },
            {
                path: 'about-me',
                component: ProfileComponent,
                data: {
                    breadcrumb: 'About Me'
                }
            },
            {
                path: 'employment',
                component: EmploymentComponent,
                data: {
                    breadcrumb: 'Employment'
                }

            },
            {
                path: 'education',
                component: EducationComponent,
                data: {
                    breadcrumb: 'Education'
                }

            },
            {
                path: 'technologies',
                component: TechStackComponent,
                data: {
                    breadcrumb: 'Technologies'
                }

            }
        ]
    },
    {
        path: 'current-projects',
        component: CurrentProjectsComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
