import { Component,  OnInit, Output} from '@angular/core';
import { LoginService } from '../../login.service';
import {  FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared-folder/services/auth-service/auth.service';
import { ProfileService } from 'src/app/modules/profile-module/profile.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ListService } from 'src/app/TodoList/todo.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() email:string=""
  user: SocialUser = new SocialUser;
  loggedIn: boolean = false;
  // email:string=""
  firstName=""
  isLogged=false
  @Output() result:any
  constructor(private router:Router,private http:HttpClient,private todoService:ListService ,private googleauthService: SocialAuthService,private loginService:LoginService,private authService:AuthService,private profileService:ProfileService) { }

  details=new FormGroup({
    'name': new FormControl(''),
    'password':new FormControl('')
  })


  ngOnInit(): void {

  
      this.googleauthService.authState.subscribe((user) => {
          this.user = user;
          this.loggedIn = (user != null);
        });
      // throw new Error("Method not implemented.");
  

  }
  onSubmit(){
   
    console.log("login");
    this.loginService.login(this.details.value.name,this.details.value.password).subscribe(res=>{
      console.log("llk");
      //this.authService.setLoginLocalstorage(res);
      //this.authService.setLocalStorage(res);
     // this.profileService.profile(res);
     console.log(res);
     this.result=res;
      
      this.isLogged=true
   
    });
  }
  // onSubmit(){
 
  
  //  this.loginService.login(this.details.value.name,this.details.value.password).subscribe(res=>{
  //    this.authService.setLocalStorage(res);
  //    console.log(res);
  //  });
  // }
  signInWithGoogle(): void {
    this.googleauthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(res=>{
      console.log(res);
      // this.email=res.email;
      // this.firstName=res.firstName;
      this.authService.storage(res);
      this.authService.result=res;
      this.todoService.listMail=res.email;
      console.log(res.email)
     
      this.http.get(`http://localhost:3000/profile/${res.email}`).subscribe((res)=>{
        console.log(res);
        this.authService.result=res;
        this.router.navigate(['/todoList']);
      },(err)=>{
        console.log(err);
      })
      // this.profileService.user(res.email).subscribe(res=>console.log(res));
    
    })
  }



  signOut(): void {
    this.googleauthService.signOut();
  }
}
