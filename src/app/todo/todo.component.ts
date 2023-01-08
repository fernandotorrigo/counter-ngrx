import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { IAppState, ITodo, setTodos } from '../store/app.state';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(
    private store: Store<{ app: IAppState }>,
    private http: HttpClient
  ) {}

  todoList$ = this.store.select(`app`).pipe(map((data) => data.todos));
  counter$ = this.store.select(`app`).pipe(map((data) => data.counter));

  ngOnInit() {
    this.store
      .select(`app`)
      .pipe(map((data) => data.todos))
      .subscribe({
        next: (todos) => {
          if (todos.length === 0) {
            this.http
              .get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos`)
              .subscribe({
                next: (res) => this.store.dispatch(setTodos({ payload: res })),
              });
          }
        },
      });
  }
}
