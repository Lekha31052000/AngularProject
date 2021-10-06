import { Component, OnInit } from "@angular/core";
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
@Component({
  selector: 'app-googleSignIn',
  templateUrl: './googleSignIn.component.html',
  styleUrls: ['./googleSignIn.component.scss']
})
export class GoogleSignInComponent implements OnInit {
    user: SocialUser = new SocialUser;
    loggedIn: boolean = false;
  constructor(private authService: SocialAuthService) { }
    ngOnInit(): void {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
          });
        // throw new Error("Method not implemented.");
    }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

//   signInWithFB(): void {
//     this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
//   }

  signOut(): void {
    this.authService.signOut();
  }

}