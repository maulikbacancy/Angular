import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './features/about/about.component';
import { AuthComponent } from './features/auth/auth.component';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { ContactComponent } from './features/contact/contact.component';
import { FeaturesComponent } from './features/features/features.component';
import { HomeComponent } from './features/home/home.component';
import { EqualValidator } from './features/auth/confirmPasswordValidate.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    FeaturesComponent,
    ForgotPasswordComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
