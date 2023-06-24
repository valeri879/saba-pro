import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './layout/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SingUpPageComponent } from './pages/sing-up-page/sing-up-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { VerificationPageComponent } from './pages/verification-page/verification-page.component';

console.log('App module loaded...');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundPageComponent,
    LoginPageComponent,
    SingUpPageComponent,
    AuthPageComponent,
    ProfilePageComponent,
    VerificationPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
