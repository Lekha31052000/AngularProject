import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared-folder/services/auth-service/auth.service';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  mail:any;
  constructor(private webRequestService:WebRequestService,private regService:RegisterService,private authService:AuthService) { }

  ngOnInit(): void {

    // this.webRequestService.post('register',{})
    //   .subscribe((res)=>{
        
    //   if(res){
       
    //     console.log(res);
    //     console.log("register is here!!");
    //   }
    // })
  }
  onSubmit(f:any){
 
  this.mail=f.email;

    this.regService.register(f.name,f.email,f.password,f.age).subscribe(res=>{
      this.authService.setLocalStorage(res);
      console.log(res);
      
    });
   }
  // onSubmit(f:any){
  //   this.registerService.register(f.name,f.email,f.password).subscribe(res=>{
     
  //     console.log(res);
  //   });
    
  // }
  // }

}
