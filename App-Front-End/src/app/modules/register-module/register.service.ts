import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
mail:any;
  constructor(private webReqService:WebRequestService) { }

  register(name:string,email:string,password:string,age:string){
    this.mail=email;
    return this.webReqService.post('register',{name,email,password,age});
    
  }
}
