import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { BlogLevelDescriptionsComponent } from './blog-level-descriptions/blog-level-descriptions.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: 'description',
    component: BlogLevelDescriptionsComponent
  },
  {
    path: ':id',
    component: BlogArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
