import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile-component/profile/profile.component';

import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';



@NgModule({
  declarations: [
   
    ProfileComponent,
   ProfileEditComponent
  ],
  imports: [
    BrowserModule,
   CommonModule,
    FormsModule,
    ProfileRoutingModule,
    ReactiveFormsModule

  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class ProfileModule { }