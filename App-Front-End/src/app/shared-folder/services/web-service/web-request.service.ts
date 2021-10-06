import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;
  authToken: any;
  constructor(private http:HttpClient) {
    this.ROOT_URL="http://localhost:3000"
   }
  get(uri:string){
    
  
  
    return this.http.get(`${this.ROOT_URL}/${uri}`);
    // let cloned=req.clone({ setHeaders: { Authorization: 'Bearer' } });

    
  }
  
 
  
  post(uri:string,payload:any){
     
    // this.loadToken();
    console.log(payload);
      return this.http.post(`${this.ROOT_URL}/${uri}`,payload,{

        headers:{
          "Authorization":`Bearer+${this.authToken}`
        }
        }
      );
  }

  loadToken() {
    const token = localStorage.getItem("token");
    console.log(token);
    this.authToken = token;
  }

}
