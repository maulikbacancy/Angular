import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginUserModel } from '../../../core/models/login-user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public loginLoader = false;

  constructor(
    private authService: AuthService, 
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if(!!params.token) {          
          this.authService.verifyEmail(params.token).subscribe(res => {
            this.toastr.success(res);
          },
          (error)=> {
            this.toastr.error(error);
          });    
        }    
      }
    );
  }

  onSubmitForm(form: NgForm) {
    this.loginLoader = true;
    this.subscription = this.authService.loginUser({email: form.value.email, password: form.value.password}).subscribe(
      (res: LoginUserModel) => {
        this.authService.user.next(res);
        this.loginLoader = false;
        if(form.value.rememberMe) {
          localStorage.setItem('userData', JSON.stringify(res));
        }
        
        if(res.register.type === 'admin') {
          this.toastr.success(form.value.email,'Welcome!');   
          this.router.navigate(['/admin']);  
        }
        else {
          this.toastr.success(form.value.email,'Welcome!');   
          this.router.navigate(['/useredit']);
        } 
        
      },
      (error) => {
        this.toastr.error(error.error.error.error);        
        this.loginLoader = false;
      });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
