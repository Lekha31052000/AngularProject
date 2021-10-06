import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { PreLoginComponent } from './preLogin.component';
import { PreLoginRoutingModule } from './preLogin-routing.module';
import { FeaturesComponent } from './features/features.component';
import { AboutAppComponent } from './aboutApp/aboutApp.component';




@NgModule({
  declarations: [
    PreLoginComponent,
    FeaturesComponent,
    AboutAppComponent
  ],
  imports: [
    BrowserModule,
   CommonModule,
    FormsModule,
    PreLoginRoutingModule

  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class PreLoginModule { }