import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { UtilsModule } from '../global/utils/utils.module';
import { GlobalModule } from '../global/global.module';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { SafeResourcePipe } from './utils/safe-resource.pipe';
import { BlogContactDetailsComponent } from './blog-contact-details/blog-contact-details.component';
import { BlogKeyComponent } from './blog-key/blog-key.component';
import { BlogKeyLevelIconComponent } from './blog-key-level-icon/blog-key-level-icon.component';
import { BlogLevelDescriptionsComponent } from './blog-level-descriptions/blog-level-descriptions.component';
import { AnchorPipe } from './utils/anchor.pipe';



@NgModule({
  declarations: [
    BlogComponent,
    BlogArticleComponent,
    BlogPostComponent,
    BlogArticlesComponent,
    SafeResourcePipe,
    BlogContactDetailsComponent,
    BlogKeyComponent,
    BlogKeyLevelIconComponent,
    BlogLevelDescriptionsComponent,
    AnchorPipe,
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    UtilsModule,
    GlobalModule
  ]
})
export class BlogModule { }
