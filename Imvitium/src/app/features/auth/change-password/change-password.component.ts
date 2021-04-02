import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ChangePasswordModel } from '../../../core/models/change-password.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  public resetPassword = false;
  private token: string;
  public submitLoader = false;

  constructor(
    private authService: AuthService,
    private toastrServive: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if(!!params.token) {
          this.resetPassword = true;
          this.token = params.token;
        } 
        else {
          this.resetPassword = false;
        }   
      }
    );
  }

  public onSubmitForm(form: NgForm): void {
    if(this.resetPassword) {
      this.submitLoader = true;
      this.subscription = this.authService.resetPassword(form.value.password, this.token).subscribe(res => {
        this.toastrServive.success('Password Reset Successfully!');
        this.router.navigate(['auth/login']);
        this.submitLoader = false;
      },
      (error) => {
        this.toastrServive.error(error.error,'Something Went Worong');
        this.submitLoader = false;
      });
    }
    else {
      this.submitLoader = true;
      let passwordData = new ChangePasswordModel(form.value.opassword,form.value.password);
      let id = this.authService.user.value.register.id;

      this.subscription = this.authService.changePassword(id, passwordData).subscribe(res => {
        this.toastrServive.success('Password Successfully Changed!');
        this.submitLoader = false;
      },
      (error)=> {
        this.toastrServive.error(error.error,'Something Went Worong');
        this.submitLoader = false;
      });
    }
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
