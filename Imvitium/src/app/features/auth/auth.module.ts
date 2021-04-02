import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { LoginComponent } from "./login/login.component";
import { EqualValidator } from "./signup/equal-validator.directive";
import { SignupComponent } from "./signup/signup.component";
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginGuard } from "../../core/guards/login.guard";
import { AuthGuard } from "src/app/core/guards/auth.guard";

@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,
        EqualValidator,
        ChangePasswordComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([
            { 
                path: '', 
                component: AuthComponent,
                children: [
                    {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
                    {path: 'login/:token', component: LoginComponent, canActivate: [LoginGuard]},
                    {path: 'signup', component: SignupComponent, canActivate: [LoginGuard]},
                    {path: 'forgotpassword', component: ForgotPasswordComponent, canActivate: [LoginGuard]},
                    {path: 'resetpassword/:token', component: ChangePasswordComponent},
                    {path: 'changepassword', component: ChangePasswordComponent, canActivate: [AuthGuard]}    
                ]
            }

        ])
    ]
  })
  export class AuthModule {}