import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAppComponent } from './aboutApp/aboutApp.component';
import { FeaturesComponent } from './features/features.component';
import { PreLoginComponent } from './preLogin.component';




const routes: Routes = [
    
    
    {path:"preLogin",component:PreLoginComponent},
    {path:"preLogin/features",component:FeaturesComponent},
    {path:"preLogin/aboutApp",component:AboutAppComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreLoginRoutingModule {}