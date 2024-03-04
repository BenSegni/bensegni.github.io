import { Injectable, WritableSignal, signal } from '@angular/core';
import { BehaviorSubject, Observable, of, take, timer } from 'rxjs';
import { Education } from '../pages/about/education/interface/education';
import { postEducationData } from './data/post-education-data';
import { Employment } from '../pages/about/employment/interface/employment';
import { CurrentProject } from '../pages/current-projects/interface/project';
import { Feedback } from '../pages/current-projects/feedback/interface/feedback';
import { Showcase } from '../pages/showcase/interface/showcase';
import { companyLogos } from './data/company-logo-data';
import { educationData } from './data/education-data';
import { employmentData } from './data/employment-data';
import { feedbackData } from './data/feedback-data';
import { projectData } from './data/project-data';
import { showcaseData } from './data/showcase-data';
import { Technology } from '../pages/about/tech-stack/interface/technology';
import { technologiesData } from './data/technologies-data';
import { usefulLinksData } from './data/useful-links-data';
import { Github } from '../pages/github/interface/github';
import { githubProjectData } from './data/gitihub-project-data';
import { toolkitData } from './data/toolkit-data';
import { ToolKit } from '../pages/about/toolkit/interface/toolkit';
import { NPM } from '../pages/npm/interface/npm';
import { npmPackageData } from './data/npm-package-data';
import { Blog } from '../blog/interface/blog';
import { blogData } from './data/blog-data';

@Injectable({
    providedIn: 'root'
})
export class GlobalDataService {
    public postEducation$: Observable<string[]> = of(postEducationData)
    public education$: Observable<Education[]> = of(educationData);
    public employment$: Observable<Employment[]> = of(employmentData);
    public logos$: Observable<string[]> = of(companyLogos);
    public projects$: Observable<CurrentProject> = of(projectData);
    public feedback$: Observable<Feedback[]> = of(feedbackData);
    public showcaseSignal$: WritableSignal<Showcase[]> = signal(showcaseData);
    public technologies$: Observable<Technology[]> = of(technologiesData);
    public usefuLinks$: Observable<string[]> = of(usefulLinksData);
    public githubProjects$: Observable<Github[]> = of(githubProjectData);
    public npmPackages$: Observable<NPM[]> = of(npmPackageData);
    public toolkit$: Observable<ToolKit[]> = of(toolkitData);
    public blog$: WritableSignal<Blog[]> = signal(blogData);
    public isLoading = true;
    private delay$ = timer(1200);
    public showcaseFilterValue = '';

    public onLoad(): void {
        this.delay$.pipe(take(1)).subscribe({
            complete: () => this.isLoading = false
        })
    }

    public onInitialLoad(): void {
        if (sessionStorage.getItem('initialLoad')) this.isLoading = false;

        this.delay$.pipe(take(1)).subscribe({
            next: () => sessionStorage.setItem('initialLoad', "true"),
            complete: () => this.isLoading = false
        })
    }
}
