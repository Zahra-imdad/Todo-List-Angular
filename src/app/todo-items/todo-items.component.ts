import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  editClick = false;
  @Input() todos:any=[];
  @Output() onStatusChanged = new EventEmitter<{id:number,checked:boolean}>();
  @Output() onDeleteTodo = new EventEmitter()
  @Output() onUpdatedTodo = new EventEmitter<{ updatedId: number, editedValue: string}>();
  constructor() { }

  ngOnInit(): void {
  }
  tickCheckBox(id: number,e:any){
    console.log(id)
    console.log(e.target.checked)
    this.onStatusChanged.emit({id,checked:e.target.checked})
  }
  deleteTodo(id:number){
    console.log("I am del clicked")
    console.log(id);
    this.onDeleteTodo.emit(id)
  }
  updateTodo(todo:any,value:string,e:any){
    console.log("I am update clicked")
    console.log(todo);
    const updatedId = todo.id;
    const editedValue: string = e.target.previousElementSibling.value;
    this.onUpdatedTodo.emit({updatedId,editedValue})
    this.ToggleUpdateContainer(todo,false)
  }
  ToggleUpdateContainer(todo:any,open: boolean){
    todo.edit = open;
  }
}
