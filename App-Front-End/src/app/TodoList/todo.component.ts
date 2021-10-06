export interface Todo{
    id:any;
    title:string;
    completed:boolean;
}


import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from "../modules/register-module/register.service";
import { AuthService } from "../shared-folder/services/auth-service/auth.service";
import { TodoModel } from "./todo.model";
import { ListService } from "./todo.service";

@Component({
    selector:"app-todo",
    templateUrl:"./todo.component.html"
})

export class TodoListComponent implements OnInit{
    constructor(private formBuilder:FormBuilder,private http:HttpClient,private listService:ListService,private auth:AuthService,private reg:RegisterService){}



name="lekha";
maill:string=this.auth.result?.email;
myMail:string|null="";
myTitle:any='';
value:any="";
id:any=''
complete:boolean=false;
myValues:TodoModel[]=[new TodoModel("lekha")];
Object=Object;
    public todos:Todo[]=[];
    public todoForm!: FormGroup;

ngOnInit():void{
   
    console.log(this.maill);
    this.myMail=localStorage.getItem('mail')
    this.http.get(`http://localhost:3000/display/${this.maill}`).subscribe((res)=>{
        console.log(res);
      this.myTitle=res
     
     console.log(this.id)
      })
      this.value=this.myTitle?.completed;
     this.value=this.complete;
      
      this.todoForm=this.formBuilder.group({
        title:['',[Validators.required]],
    })
}

add(){
    console.log("add");
   
    if(this.todoForm.valid){
        const title:string=this.todoForm.get('title')!.value as string;
        console.log(title);
        // let title:string=this.todoForm.get('title').value as string;
        const newTodo:Todo={
            id:this.myTitle.length,
            title:title,
            completed:false
        }
    
        this.myTitle.push(newTodo);
       
        // console.log(newTodo);
        this.listService.list(newTodo.id,newTodo.title,newTodo.completed).subscribe(res=>{
            console.log("kkkkk",res)
            // this.myTitle=res;
            
        
        });
        this.todoForm.reset() ;
    }
}

update(mytodo:any){
    console.log(mytodo);
    this.id=mytodo.title;
// this.todos[todo.id].completed=!this.todos[todo.id].completed;
this.myTitle[mytodo.id].completed=!this.myTitle[mytodo.id].completed;
console.log(this.myTitle[mytodo.id].completed)
this.http.get(`http://localhost:3000/updated/${this.id}/${this.myTitle[mytodo.id].completed}`).subscribe((res)=>{
        console.log(res);
      
     
      })

}
delete(todo:Todo){
    let title=todo.title;
    console.log("delete");
    this.myTitle=this.myTitle.filter((val: { id: number; })=>todo.id!==val.id);
    console.log(this.myTitle);
    this.http.get(`http://localhost:3000/delete/${title}`).subscribe((res)=>{
        console.log(res);
      
     
      })
// this.todos=this.todos.filter(val=>todo.id===val.id);
}

// list(){
// this.listService.list();
// }


}
function res(res: any) {
    throw new Error("Function not implemented.");
}

