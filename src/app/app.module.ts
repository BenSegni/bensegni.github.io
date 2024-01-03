import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { CurrentProjectsComponent } from './pages/current-projects/current-projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/current-projects/feedback/feedback.component';
import { AboutModule } from './pages/about/about.module';
import { FeedbackLinkComponent } from './pages/current-projects/feedback-link/feedback-link.component';
import { UtilsModule } from './_global/utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SynopsisComponent } from './pages/synopsis/synopsis.component';
import { GridDisplayComponent } from './pages/synopsis/grid-display/grid-display.component';
import { LoadingGraphicComponent } from './pages/synopsis/loading-graphic/loading-graphic.component';
import { ContactDetailsComponent } from './pages/contact/contact-details/contact-details.component';
import { ProjectDetailsComponent } from './pages/showcase/project-details/project-details.component';
import { GlobalModule } from './_global/global.module';
import { CurrentProjectHeaderComponent } from './pages/current-projects/current-project-header/current-project-header.component';
import { CurrentProjectDetailComponent } from './pages/current-projects/current-project-detail/current-project-detail.component';
import { CurrentProjectPresentationComponent } from './pages/current-projects/current-project-presentation/current-project-presentation.component';
import { FilterComponent } from './pages/showcase/filter/filter.component';
import { ShowcaseItemsComponent } from './pages/showcase/showcase-items/showcase-items.component';
import { ReferencesComponent } from './pages/contact/references/references.component';
import { CvDownloadComponent } from './pages/contact/cv-download/cv-download.component';
import { GithubComponent } from './pages/github/github.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ScrollComponent } from './scroll/scroll.component';

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
    LoadingGraphicComponent,
    ContactDetailsComponent,
    ProjectDetailsComponent,
    CurrentProjectHeaderComponent,
    CurrentProjectDetailComponent,
    CurrentProjectPresentationComponent,
    FilterComponent,
    ShowcaseItemsComponent,
    ReferencesComponent,
    CvDownloadComponent,
    GithubComponent,
    ScrollComponent,
  ],
  imports: [
    GlobalModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AboutModule,
    UtilsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
