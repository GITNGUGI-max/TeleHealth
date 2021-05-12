import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpClientModule} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url ="http://localhost:8000/api";

  constructor( private http:HttpClient) { }
  register(name:string, specialization:string, bio: string, qualification: string,
    experience:string,  hospital:string, languages:string, job_type: string, contact1: number, contact2:number,
    email1:string, email2:string, address: string, consultation_fee: string){
    return this.http.post(
      this.url.concat('/doctors/'),
      {name, specialization, bio, qualification,
    experience,  hospital, languages, job_type, contact1, contact2,
    email1, email2, address, consultation_fee}
    );
  }


}
