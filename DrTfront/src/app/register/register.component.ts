import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';  
import {ApiService} from '../api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error:any;
  get name(){
    return this.registerForm.get("name")
  }
  get specialization(){
    return this.registerForm.get("specialization")
  }

  get bio(){
    return this.registerForm.get("bio")
  }
  get qualification(){
    return this.registerForm.get("qualification")
  }
  get experience(){
    return this.registerForm.get("experience")
  }
  get hospital(){
    return this.registerForm.get("hospital")
  }
  get languages(){
    return this.registerForm.get("languages")
  }

  get job_type(){
    return this.registerForm.get("job_type")
  }
  get contact1(){
    return this.registerForm.get("contact1")
  }
  get contact2(){
    return this.registerForm.get("contact2")
  }
  get email1(){
    return this.registerForm.get("email1")
  }

  get email2(){
    return this.registerForm.get("email2")
  }
  get address(){
    return this.registerForm.get("address")
  }
  get consultation_fee(){
    return this.registerForm.get("consultation_fee")
  }
  

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  registerForm =this.fb.group({
    name :['', [Validators.required, Validators.minLength(3)]],
    specialization: ['', Validators.required],
    bio:['', [Validators.required]],
    qualification:['', Validators.required],
    experience :['', [Validators.required]],
    hospital :['', [Validators.required]],
    languages: ['', Validators.required],
    job_type:['', [Validators.required]],
    contact1:['', Validators.required],
    contact2 :['', [Validators.required]],
    email1: ['', Validators.required],
    email2:['', [Validators.required]],
    address:['', Validators.required],
    consultation_fee :['', [Validators.required]],
    



    

  });

  ngOnInit(): void {
  }
  register(name:string, specialization:string, bio: string, qualification: string,
    experience:string,  hospital:string, languages:string, job_type: string, contact1: number, contact2:number,
    email1:string, email2:string, address: string, consultation_fee: string){
    this.api.register(name, specialization, bio, qualification,
      experience,  hospital, languages, job_type, contact1, contact2,
      email1, email2, address, consultation_fee).subscribe(
      success => this.router.navigate(['home']),
      error => this.error=error
    );
  }

}
