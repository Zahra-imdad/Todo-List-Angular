import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ToolTipDirective } from './tool-tip.directive';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ToolTipDirective,
    TodoFormComponent,
    TodoItemsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
