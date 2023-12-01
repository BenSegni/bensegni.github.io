import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { CurrentProjectsComponent } from './pages/current-projects/current-projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavigationComponent } from './_global/navigation/navigation.component';
import { PageHeaderComponent } from './_global/page-header/page-header.component';
import { SocialMediaComponent } from './_global/social-media/social-media.component';
import { FooterComponent } from './_global/footer/footer.component';
import { FeedbackComponent } from './pages/current-projects/feedback/feedback.component';
import { AboutModule } from './pages/about/about.module';
import { FeedbackLinkComponent } from './pages/current-projects/feedback-link/feedback-link.component';
import { UtilsModule } from './_global/utils/utils.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './_global/page-not-found/page-not-found.component';
import { SynopsisComponent } from './pages/synopsis/synopsis.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowcaseComponent,
    CurrentProjectsComponent,
    ContactComponent,
    NavigationComponent,
    PageHeaderComponent,
    SocialMediaComponent,
    FooterComponent,
    FeedbackComponent,
    FeedbackLinkComponent,
    PageNotFoundComponent,
    SynopsisComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AboutModule,
    UtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
