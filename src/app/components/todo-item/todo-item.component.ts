import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Todo} from '../../services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todo: Todo;

  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter<string>();
  @Output() toggle = new EventEmitter();

  editMode = false;

  editItem(): void {
    if (!this.todo.title) { return; }

    this.edit.emit(this.todo.title);
    this.editMode = false;
  }

  toggleItem(): void {
    this.toggle.emit();
  }

  removeItem(): void {
    this.remove.emit();
  }

  startEditMode(): void {
    this.editMode = true;
  }
}
