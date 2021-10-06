import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSignInComponent } from './googleSignIn/googleSignIn.component';
import { PreLoginComponent } from './starterPage/preLogin.component';





const routes: Routes = [
     {path:"",pathMatch:'full',redirectTo:'preLogin'},
    {path:"google",component:GoogleSignInComponent},

    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}








