import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'courses', component: CoursesPageComponent, title: 'Courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
