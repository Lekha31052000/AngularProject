
import { Component,  Input,  OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared-folder/services/auth-service/auth.service';
import { WebRequestService } from 'src/app/shared-folder/services/web-service/web-request.service';
import { RegisterService } from '../../register-module/register.service';
import { ProfileService } from '../profile.service';
import { ProfileEditService } from '../profileEdit.service';



@Component({
  selector: 'app-profileEdit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

 @Input() email:any;
 values=new FormGroup({
  'name': new FormControl(''),
  'email':new FormControl(''),
  'age':new FormControl('')
})
  constructor(
    private profService:ProfileService,
    private route:ActivatedRoute,
    private router:Router,
    private webservice:WebRequestService,
    private authService:AuthService,
    private editService:ProfileEditService
    
    ) { 

      
    }
    fname:any;
    mail:any;
    age:any;
    res:any;
id:any=this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    
    // this.profService.profile(this.email).subscribe(res=>{
this.res=this.authService.result;
this.setValues(this.res);
this.fname=this.res?.name;
this.mail=this.res?.email;
this.age=this.res?.age;
       console.log(this.res?.email);
  
        
    // })

      }
  


    onSubmit(){
        console.log("profileedit");
        this.editService.profileEdit(this.values.value.name,this.values.value.email,this.values.value.age).subscribe((res: any)=>{
          console.log(res);
          this.setValues(res);
        })

    }

    
    setValues(res:any){
      let details={
        name:res.name,
        email:res.email,
        age:res.age
      }
      this.values.setValue(details);
      console.log("details",details)
    }
}

