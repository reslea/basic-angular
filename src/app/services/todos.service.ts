import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private readonly client: HttpClient) { }

  getTodos(): Observable<Todo[]> {

    return this.client.get<Todo[]>(this.url)
      .pipe(
        tap(_ => console.log(`loaded: ${_.length} items`))
      );
  }

  addTodo(newTodo: Todo): Observable<{}> {
    return this.client.post(this.url, newTodo);
  }

  removeTodo(id: number): Observable<{}> {
    return this.client.delete(`${this.url}/${id}`);
  }

  editTodo(id: number, changedTodo: Todo): Observable<{}> {
    return this.client.put<{}>(`${this.url}/${id}`, changedTodo);
  }

  toggleTodo(id: number, toggledTodo: Todo): Observable<{}> {
    return this.client.patch(`${this.url}/${id}`, {
      completed: toggledTodo.completed
    });
  }
}
