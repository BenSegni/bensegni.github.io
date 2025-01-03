import { Injectable, WritableSignal, signal } from "@angular/core";
import { Observable, of, take, timer } from "rxjs";

import { Blog } from "../blog/interface/blog";
import { CurrentProject } from "../pages/current-projects/interface/project";
import { Education } from "../pages/about/education/interface/education";
import { Employment } from "../pages/about/employment/interface/employment";
import { Feedback } from "../pages/current-projects/feedback/interface/feedback";
import { Github } from "../pages/github/interface/github";
import { NPM } from "../pages/npm/interface/npm";
import { Showcase } from "../pages/showcase/interface/showcase";
import { Technology } from "../pages/about/tech-stack/interface/technology";
import { ToolKit } from "../pages/about/toolkit/interface/toolkit";
import { blogData } from "./data/blog-data";
import { companyLogos } from "./data/company-logo-data";
import { educationData } from "./data/education-data";
import { employmentData } from "./data/employment-data";
import { feedbackData } from "./data/feedback-data";
import { githubProjectData } from "./data/gitihub-project-data";
import { npmPackageData } from "./data/npm-package-data";
import { postEducationData } from "./data/post-education-data";
import { projectData } from "./data/project-data";
import { showcaseData } from "./data/showcase-data";
import { technologiesData } from "./data/technologies-data";
import { toolkitData } from "./data/toolkit-data";
import { usefulLinksData } from "./data/useful-links-data";

@Injectable({
  providedIn: "root",
})
export class GlobalDataService {
  public postEducation$: Observable<string[]> = of(postEducationData);
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
  public isLoading$: WritableSignal<boolean> = signal(true);
  private delay$ = timer(300);
  public showcaseFilterValue = "";
  public filterValue = "";

  public onLoad(): void {
    this.delay$.pipe(take(1)).subscribe({
      next: () => this.showcaseSignal$.set(showcaseData),
      complete: () => ((this.isLoading = false), this.isLoading$.set(false)),
    });
  }

  public onInitialLoad(): void {
    if (sessionStorage.getItem("initialLoad")) this.isLoading = false;

    this.delay$.pipe(take(1)).subscribe({
      next: () => sessionStorage.setItem("initialLoad", "true"),
      complete: () => (this.isLoading = false),
    });
  }
}
