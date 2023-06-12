import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailPageComponent } from 'src/app/pages/course-detail-page/course-detail-page.component';

const routes: Routes = [
  { path: ':id', component: CourseDetailPageComponent, title: 'კურსის დეტალური' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseDetailRoutingModule { }
