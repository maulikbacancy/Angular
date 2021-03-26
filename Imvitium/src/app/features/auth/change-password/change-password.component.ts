import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ChangePasswordModel } from 'src/app/core/models/change-password.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private toastrServive: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmitForm(form: NgForm): void {
    let passwordData = new ChangePasswordModel(form.value.opassword,form.value.password);
    let id = this.authService.user.value.register.id;

    this.subscription = this.authService.changePassword(id, passwordData).subscribe(res => {
      this.toastrServive.success('Password Successfully Changed!');
    },
    (error)=> {
      this.toastrServive.error(error.error,'Something Went Worong');
    })

  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
