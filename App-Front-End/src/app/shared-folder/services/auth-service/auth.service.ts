import { Injectable } from "@angular/core";

import * as moment from "moment";


@Injectable({providedIn:"root"})

export class AuthService{
    constructor(){}
    result:any;
    setLocalStorage(res:any){
        const expires=moment().add(res.expiresIn);
        localStorage.setItem('mail',res.user.email);
        localStorage.setItem('token',res.token);
        localStorage.setItem('expires',JSON.stringify(expires.valueOf()));
    }
    // setLoginLocalstorage(res:any){
    //     console.log("going to set");
    //     localStorage.setItem("NAME",res.user.name);
    //     localStorage.setItem("PASSWORD",res.user.password);
    //     console.log("set");
    // }
   
    storage(res:any){
        this.result=res;
        const expires=moment().add(res.expiresIn);

        localStorage.setItem('token',res.idToken);
        localStorage.setItem('expires',JSON.stringify(expires.valueOf()));
    }
    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        // localStorage.removeItem("NAME");
        // localStorage.removeItem("PASSWORD");
    }

    isLoggedIn(){
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut(){
        return !this.isLoggedIn();
    }

    getExpiration(){
        const expiration:any=localStorage.getItem("expires");
        const expiresAt=JSON.parse(expiration);
        return moment(expiresAt);
    }
}

