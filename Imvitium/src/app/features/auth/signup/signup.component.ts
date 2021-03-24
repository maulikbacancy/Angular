import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { SignUpUserModel } from '../../../core/models/signup-user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tostrService: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    let user = new SignUpUserModel(
      form.value.name,
      form.value.email,
      form.value.username,
      form.value.password);

    this.subscription = this.authService.signUpUser(user).subscribe(res => {
      this.tostrService.success(user.email,'Account Created Successfully!');
      this.router.navigate(['auth/login']);
    },
    (error) => {
      console.log(error.error);
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
