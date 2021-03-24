import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignUpUserModel } from '../../../core/models/signup-user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmitForm(form: NgForm) {
    let user = new SignUpUserModel(
      form.value.name,
      form.value.email,
      form.value.username,
      form.value.password);

    this.authService.signUpUser(user).subscribe(res => {
      
    },
    (error) => {
      console.log(error.error);
    });
  }

}
