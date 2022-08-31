import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  
  
  todos= [
    {id:1,todoItem:'Todo Item 1',completed:true},
    {id:2,todoItem:'Todo Item 2',completed:false},
    {id:3,todoItem:'Todo Item 3',completed:true},
    {id:4,todoItem:'Todo Item 4',completed:false},
  ]
  id:number = this.todos.length+1
  newTodo(todoTask:string){
    console.log(todoTask)
    this.todos.push({id:this.id,todoItem:todoTask,completed:false})
    this.id++
  }
  onStatusChanged(e:{id:number, checked:boolean}){
    this.todos.forEach((item)=>{
      if(item.id === e.id){
        item.completed = e.checked
      }
    })
  }
  deleteTodo(id:number){
    console.log(typeof(id))
    let newTodos = this.todos.filter(todo=>todo.id !== id)
    this.todos = newTodos;
  }
  updateTodo(e: any){
    console.log("update")
    this.todos.forEach((todo)=>{
      if(todo.id === e.updatedId){
        todo.todoItem = e.editedValue;
      }
    })
  }
}