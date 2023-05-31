import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home' },
  { path: 'auth', component: AuthPageComponent, children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'sign-up', component: SingUpPageComponent },
    ]
  },
  { path: 'courses', component: CoursesPageComponent, title: 'Courses' },
  { path: 'course-list/:id', component: CourseListPageComponent, title: 'Course List' },
  /* admin routes */
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: '**', component: NotFoundPageComponent, title: 'Page not found 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
