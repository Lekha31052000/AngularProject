import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private webReqService:WebRequestService) { }

  login(name:string,password:string){
    return this.webReqService.post('login',{name,password});
  }
}
