import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private webReqService:WebRequestService,private http:HttpClient) { }
  listMail!: string;
  list(id:number,title:string,completed:boolean){
    // return this.http.post('todoList',{id,title,completed})
    return this.webReqService.post('todoList',{id,title,completed});
  }
}
