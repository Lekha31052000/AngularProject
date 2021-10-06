import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebRequestService } from '../shared-folder/services/web-service/web-request.service';


@Injectable({
  providedIn: 'root'
})


export class GoogleSignInService {

  constructor(private webReqService:WebRequestService,private http:HttpClient) { }

  signIn(){
    return this.webReqService.get("google");
  }
}
