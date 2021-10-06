import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {  SocialAuthService, SocialAuthServiceConfig} from 'angularx-social-login';

// import {SocialLoginModule,GoogleLoginProvider} from 'angularx-social-login';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './modules/login-module/login.module';
import { RegisterModule } from './modules/register-module/register.module';
import { ProfileModule } from './modules/profile-module/profile.module';
import { AuthService } from './shared-folder/services/auth-service/auth.service';
import { AuthInterceptor } from './interceptors/auth-interceptor';

 
 import { GoogleSignInComponent } from './googleSignIn/googleSignIn.component';
import { GoogleSignInService } from './googleSignIn/googleSignIn.service';
import { NavComponent } from './navbar/nav.component';
import { ProfileRoutingModule } from './modules/profile-module/profile-routing.module';
import { PreLoginComponent } from './starterPage/preLogin.component';
import { PreLoginModule } from './starterPage/preLogin.module';

// import { inject } from '@angular/core/testing';


import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { TodoListModule } from './TodoList/todo.module';

// const config=new SocialAuthServiceConfig([
//   {
//     id:GoogleLoginProvider.PROVIDER_ID,
//     provider:new GoogleLoginProvider('195935177725-80j33511ufmcraag9tbg1h8869t31om0.apps.googleusercontent.com')
//   }
// ]);

// export function provideConfig(){
//   return config;
// }
// })()
@NgModule({
  declarations: [
    AppComponent,
   GoogleSignInComponent,
   NavComponent,
  
  ],
  imports: [
    BrowserModule,
     SocialLoginModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    ProfileModule,
    PreLoginModule,
  
    HttpClientModule,
  
    TodoListModule
  ],
  providers: [
   
  GoogleSignInService,
    AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              "261425568318-829qa79aonbq8a36bsp83cfsmta5t89t.apps.googleusercontent.com"
              
            )
          },  
          // {
          //   id: FacebookLoginProvider.PROVIDER_ID,
          //   provider: new FacebookLoginProvider('clientId')
          // }
        ]
      } as SocialAuthServiceConfig,
    }
    // {
     
    //   provide:"SocialAuthServiceConfig",
    // //useFactory:config
    //   useValue:{
    //      autoLogin:false,
    //     providers:[
    //       {
            
    //         id:GoogleLoginProvider.PROVIDER_ID,
    //         provider:new GoogleLoginProvider(
    //           "487381878136-1vvaesfm2omd6bfnmq3dktdtnrn43skd.apps.googleusercontent.com"
    //         )
    //       }
    //     ]
    //   } as SocialAuthServiceConfig
    // },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


