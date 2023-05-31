import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { PrefixPipe } from './pipes/prefix.pipe';
import { SharedModule } from './shared.module';

console.log('App module loaded...');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomePageComponent,
    CoursesPageComponent,
    HeaderComponent,
    NotFoundPageComponent,
    CourseListPageComponent,
    LoginPageComponent,
    SingUpPageComponent,
    AuthPageComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
