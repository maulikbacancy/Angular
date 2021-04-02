import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  public submitLoader = false;
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmitForm(form: NgForm) {
    this.submitLoader = true;
    this.subscription =  this.authService.forgotPassword(form.value.email).subscribe(res => {
      this.toastr.success('you will receive one link on your email address for resetting you password Soon!');
      this.router.navigate(['auth/login']);
      this.submitLoader = false;
    },
    (error) => {
      console.log(error);
      this.submitLoader = false;
      this.toastr.error(error.error.error);
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
