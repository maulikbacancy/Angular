import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUserModel } from '../../../core/models/login-user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService, 
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    
    this.authService.loginUser({email: form.value.email, password: form.value.password}).subscribe(
      (res: LoginUserModel) => {
        this.authService.user.next(res);
        this.toastr.success(form.value.email,'Welcome!');   
        this.router.navigate(['/useredit']);  
      },
      (error) => {
        console.log(error.error);
      });
  }

}
