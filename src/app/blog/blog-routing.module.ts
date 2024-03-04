import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';

export const routes: Routes = [
  {
    path: '',
    component: BlogComponent
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
