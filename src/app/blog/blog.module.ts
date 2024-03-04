import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { UtilsModule } from '../global/utils/utils.module';
import { GlobalModule } from '../global/global.module';
import { BlogArticlesComponent } from './blog-articles/blog-articles.component';
import { HttpClientModule} from '@angular/common/http';
import { SafeResourcePipe } from './utils/safe-resource.pipe';
import { BlogContactDetailsComponent } from './blog-contact-details/blog-contact-details.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogArticleComponent,
    BlogPostComponent,
    BlogArticlesComponent,
    SafeResourcePipe,
    BlogContactDetailsComponent,
  ],
  imports: [
    BlogRoutingModule,
    CommonModule,
    UtilsModule,
    GlobalModule,
    HttpClientModule
  ]
})
export class BlogModule { }
