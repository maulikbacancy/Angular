import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from '../../core/sevices/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy {

  public isLoginMode = true;
  private authObsSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  public onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    this.authObsSubscription = authObs.subscribe(
      resData => {
        console.log(resData);
        this.router.navigate(['product']);
        this.toastr.success(email,'Welcome!');
      }
    );

    form.reset();
  }

  ngOnDestroy(): void {
    this.authObsSubscription.unsubscribe();
  }


}
