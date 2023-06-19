import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { loginGuard } from './guards/login.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { profileGuard } from './guards/profile.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'auth',
    component: AuthPageComponent, 
    canActivate: [ loginGuard ],
    children: [
      { path: 'login', component: LoginPageComponent },
      { path: 'sign-up', component: SingUpPageComponent },
    ]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [ profileGuard ]
  },
  { path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule) },
  { path: 'courses-list', loadChildren: () => import('./modules/courses-list/courses-list.module').then(m => m.CoursesListModule) },
  { path: 'course-detail', loadChildren: () => import('./modules/course-detail/course-detail.module').then(m => m.CourseDetailModule) },
  { path: 'blog', loadChildren: () => import('./modules/blog/blog.module').then(m => m.BlogModule) },
  /* admin routes */
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: '**', component: NotFoundPageComponent, title: 'Page not found 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
