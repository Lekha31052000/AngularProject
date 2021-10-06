import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './register-component/registration/registration.component';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterNavComponent } from './registerNav/registerNav.component';


@NgModule({
  declarations: [
   RegistrationComponent,
   RegisterNavComponent
  ],
  imports: [
    BrowserModule,
   CommonModule,
    FormsModule,
  
    RegisterRoutingModule

  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class RegisterModule { }
