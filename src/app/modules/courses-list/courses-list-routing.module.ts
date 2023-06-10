import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListPageComponent } from 'src/app/pages/courses-list-page/courses-list-page.component';

const routes: Routes = [
  { path: ':id', component: CoursesListPageComponent, title: 'Courses list' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesListRoutingModule { }
