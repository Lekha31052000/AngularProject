

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo.component';
import { TodoListRoutingModule } from './todo-routing.module';






@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    BrowserModule,
   CommonModule,
    FormsModule,
    ReactiveFormsModule,
  TodoListRoutingModule

  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class TodoListModule { }