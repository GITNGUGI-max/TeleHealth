import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';  
import {forbiddenNameValidator} from '../shared/user-name.validator';
import {passwordValidator} from '../shared/password.validator';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  error:any;
  
  get username(){
    return this.signUpForm.get("username")
  }
  get email(){
    return this.signUpForm.get("email")
  }

  get password(){
    return this.signUpForm.get("password")
  }
  get confirmPassword(){
    return this.signUpForm.get("confirmPassword")
  }
  
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router,) { }

  signUpForm =this.fb.group({
    username :['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/ && /admin/ )]],
    email: ['', Validators.required],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirmPassword:['', Validators.required],


    

  }, {validator:passwordValidator})
  ngOnInit(): void {
  }

  signup(username:string, email:string, password1:string, password2:string){
    this.authService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['home']),
      error => this.error =error
    )
  }

}
