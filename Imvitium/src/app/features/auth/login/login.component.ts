import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserModel } from 'src/app/core/models/login-user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    
    this.authService.loginUser({email: form.value.email, password: form.value.password}).subscribe(
      (res: LoginUserModel) => {
        this.authService.user.next(res);   
        this.router.navigate(['/useredit']);  
      },
      (error) => {
        console.log(error.error);
      });
  }

}
