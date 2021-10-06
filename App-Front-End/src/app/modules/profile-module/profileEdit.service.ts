import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileEditService {

  constructor(private webReqService:WebRequestService) { }


  profileEdit(name:string,email:string,age:string){
    return this.webReqService.post('profileEdit',{name,email,age});

  }
}
