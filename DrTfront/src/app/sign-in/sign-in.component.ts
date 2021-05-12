import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';  
import {forbiddenNameValidator} from '../shared/user-name.validator';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  error: any;
  get username(){
    return this.signInForm.get("username")
  }
  

  get password(){
    return this.signInForm.get("password")
  }
  
  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router,) { }

  signInForm =this.fb.group({
    username :['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/ && /admin/ )]],
    password:['', Validators.required],


    

  })
  ngOnInit(): void {
    // login(username: string, password: string) {
      
    // }
  }
 
  login(username: string, password:string){
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['register']),
      error => this.error=error
    );
  }

}
