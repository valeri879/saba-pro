import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailPageComponent } from 'src/app/pages/blog-detail-page/blog-detail-page.component';
import { BlogPageComponent } from 'src/app/pages/blog-page/blog-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent },
  { path: 'detail/:id', component: BlogDetailPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
