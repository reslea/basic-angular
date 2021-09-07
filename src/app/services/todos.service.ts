import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private readonly client: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    const url = "https://jsonplaceholder.typicode.com/todos";
    
    return this.client.get<Todo[]>(url)
      .pipe(
        tap(_ => console.log(`loaded: ${_.length} items`))
      );
  }
}
