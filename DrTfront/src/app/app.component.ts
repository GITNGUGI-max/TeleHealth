import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DrTfront';

  constructor(public authService:AuthService, private router:Router){

  }
  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['home']),
      
    );
  }
  
  logout(){
   this.authService.logout();
   success => this.router.navigate(['home']);
      
  }
}
