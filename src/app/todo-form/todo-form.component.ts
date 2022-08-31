import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
 @Output() onAdd = new EventEmitter<string>()
 todoTask :string=''
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    //if(this.todoTask==='') return;
    this.onAdd.emit(this.todoTask)
    this.todoTask=''
  }
}
