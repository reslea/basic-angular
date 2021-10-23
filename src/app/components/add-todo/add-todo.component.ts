import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from './../../services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent {
  formData = {
    title: ''
  };

  @Output() add = new EventEmitter<Todo>();

  addTodo(): void {
    const todo: Todo = {
      userId: 0,
      id: Math.random() * 100000,
      title: this.formData.title,
      completed: false
    };

    this.add.emit(todo);
  }
}
