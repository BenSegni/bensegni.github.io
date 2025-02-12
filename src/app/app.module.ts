import { NgModule, isDevMode } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";

import { AboutModule } from "./pages/about/about.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ContactComponent } from "./pages/contact/contact.component";
import { ContactDetailsComponent } from "./pages/contact/contact-details/contact-details.component";
import { ContactLinkPipe } from "./pages/contact/pipes/contact-link.pipe";
import { ContactTypeComponent } from "./pages/contact/contact-type/contact-type.component";
import { CurrentProjectDetailComponent } from "./pages/current-projects/current-project-detail/current-project-detail.component";
import { CurrentProjectHeaderComponent } from "./pages/current-projects/current-project-header/current-project-header.component";
import { CurrentProjectPresentationComponent } from "./pages/current-projects/current-project-presentation/current-project-presentation.component";
import { CurrentProjectsComponent } from "./pages/current-projects/current-projects.component";
import { CvDownloadComponent } from "./pages/contact/cv-download/cv-download.component";
import { FeedbackComponent } from "./pages/current-projects/feedback/feedback.component";
import { FeedbackLinkComponent } from "./pages/current-projects/feedback-link/feedback-link.component";
import { GithubComponent } from "./pages/github/github.component";
import { GlobalModule } from "./global/global.module";
import { GridDisplayComponent } from "./pages/synopsis/grid-display/grid-display.component";
import { NpmComponent } from "./pages/npm/npm.component";
import { ProjectDetailsComponent } from "./pages/showcase/project-details/project-details.component";
import { ProjectDetailsLinkComponent } from "./pages/showcase/project-details-link/project-details-link.component";
import { RecentBlogPostComponent } from "./global/recent-blog-post/recent-blog-post.component";
import { ReferencesComponent } from "./pages/contact/references/references.component";
import { RelatedSynopsisComponent } from "./pages/synopsis/related-synopsis/related-synopsis.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { ShareIconsComponent } from "./global/share-icons/share-icons.component";
import { ShowcaseComponent } from "./pages/showcase/showcase.component";
import { ShowcaseItemsComponent } from "./pages/showcase/showcase-items/showcase-items.component";
import { SynopsisBackLinkComponent } from "./pages/synopsis/synopsis-back-link/synopsis-back-link.component";
import { SynopsisComponent } from "./pages/synopsis/synopsis.component";
import { SynopsisHeaderDisplayComponent } from "./pages/synopsis/synopsis-header-display/synopsis-header-display.component";
import { SynopsisHeaderSectionComponent } from "./pages/synopsis/synopsis-header-section/synopsis-header-section.component";
import { UtilsModule } from "./global/utils/utils.module";

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    CurrentProjectsComponent,
    ContactComponent,
    FeedbackComponent,
    FeedbackLinkComponent,
    SynopsisComponent,
    GridDisplayComponent,
    ContactDetailsComponent,
    ProjectDetailsComponent,
    CurrentProjectHeaderComponent,
    CurrentProjectDetailComponent,
    CurrentProjectPresentationComponent,
    ShowcaseItemsComponent,
    ReferencesComponent,
    CvDownloadComponent,
    GithubComponent,
    RelatedSynopsisComponent,
    ContactTypeComponent,
    ContactLinkPipe,
    SynopsisHeaderSectionComponent,
    SynopsisHeaderDisplayComponent,
    SynopsisBackLinkComponent,
    ProjectDetailsLinkComponent,
    NpmComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    GlobalModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AboutModule,
    UtilsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: !isDevMode(),
      registrationStrategy: "registerWhenStable:30000",
    }),
    RecentBlogPostComponent,
    ShareIconsComponent,
  ],
  providers: [provideHttpClient(withFetch())],
})
export class AppModule {}
