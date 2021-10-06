import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login-component/login/login.component';
import { LoginService } from './login.service';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginNavComponent } from './login-nav/loginNav.component';


@NgModule({
  declarations: [
   
    LoginComponent,
    LoginNavComponent
  ],
  imports: [
    BrowserModule,
   CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule

  ],
  providers: [LoginService],
//   bootstrap: [AppComponent]
})
export class LoginModule { }
