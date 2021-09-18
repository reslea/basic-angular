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

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    const todos$ = this.service.getTodos();

    todos$.pipe(
      tap(_ => console.log(`showing ${_.length} items`))
    )
    .subscribe(result => this.todos = result);
  }

  removeTodo(id: number): void {
    console.log(id);
    // это обновит данные в памяти, но т.к. мы их берем с сервера,
    // то данные на сервере останутся старые

    // this.todos = this.todos.filter(t => t.id !== id);

    this.service.removeTodo(id).subscribe(() => {
      // обычно лучше заново загрузить данные с сервера
      // this.loadTodos();

      this.todos = this.todos.filter(t => t.id !== id);
    },
    // этот код выполнится при неуспешном выполнении запроса
    () => {
      console.log('remove failed');
    });
  }

  addTodo(newTodo: Todo): void {
    console.log(newTodo);

    this.service.addTodo(newTodo)
      .subscribe(() => {
        // обычно лучше заново загрузить данные с сервера
        // this.loadTodos();

      this.todos = [newTodo, ...this.todos];
      });
  }

  editTodo(id: number, newTitle: string): void {
    const changedTodo = this.findTodo(id);

    changedTodo.title = newTitle;
    this.service.editTodo(id, changedTodo)
      .subscribe();
  }

  toggleTodo(id: number): void {
    const toggledTodo = this.findTodo(id);

    toggledTodo.completed = !toggledTodo.completed;

    this.service.toggleTodo(id, toggledTodo)
      .subscribe();
  }

  private findTodo(id: number): Todo | null {
    return this.todos.find(t => t.id === id);
  }
}
