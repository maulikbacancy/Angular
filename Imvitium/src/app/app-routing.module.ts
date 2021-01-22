import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ForgotPasswordComponent } from './core/auth/forgot-password/forgot-password.component';
import { LoginComponent } from './core/auth/login/login.component';
import { SignupComponent } from './core/auth/signup/signup.component';
import { ContactComponent } from './core/contact/contact.component';
import { FeaturesComponent } from './core/features/features.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path: '',redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forgotpassword', component: ForgotPasswordComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'features', component: FeaturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
