import { tap } from 'rxjs/operators';
import { Todo, TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private readonly service: TodosService) { }

  ngOnInit() {
    this.loadTodos();
  }
  
  loadTodos() {
    var todos$ = this.service.getTodos();

    todos$.pipe(
      tap(_ => console.log(`showing ${_.length} items`))
    )
    .subscribe(result => this.todos = result);
  }
}
