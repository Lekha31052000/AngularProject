import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/shared-folder/services/auth-service/auth.service';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';
import { ProfileService } from '../../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   message: any;
@Input() result:any;
 @Input() email:any;


  constructor(private authService:AuthService,private profileService:ProfileService,private http:HttpClient) { }

  ngOnInit(): void {
  const result=this.authService.result;
    console.log(this.authService.result);
    // this.profileService.profile(mail).subscribe((data)=>{
      this.message=result;
      // console.log(data);
     
    // });
      }
    //    name=localStorage.getItem('NAME');
 
    //  password=localStorage.getItem('PASSWORD');



Logout(){
  this.authService.logout();

}

// getData(){
//    this.id= this.profileService.getLoginData(res._id);
//    this.name=this.profileService.getLoginData(res.name);
//    this.password=this.profileService.getLoginData(res.password);

// }


}
