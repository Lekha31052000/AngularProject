import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile-component/profile/profile.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';


const routes: Routes = [
    
    
    {path:"profile",component:ProfileComponent},
    {path:"profileEdit",component:ProfileEditComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}