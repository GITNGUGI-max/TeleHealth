import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.service';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'sign-up', component:SignUpComponent},
  {path:'sign-in', component:SignInComponent},
  {path:'register', component:RegisterComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
