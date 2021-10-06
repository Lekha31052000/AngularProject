import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private webReqService:WebRequestService) { }

  profile(email:string){
    return this.webReqService.post('profile',email);
  }
  // getLoginData(res:any){
  //   console.log(res._id,res.name,res.password);
  //   this.data=res;
    //return res;
  // }
  user(email:string){
    return this.webReqService.post('user',email);
  }
}
