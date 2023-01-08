import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import {
  IAppState,
  ITodo,
  loadTodos,
  setTodos,
  successLoadTodos,
} from './app.state';

@Injectable({
  providedIn: 'root',
})
export class TodosEffectService {
  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) {}

  loadTodos = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      withLatestFrom(this.store.select(`app`).pipe(map((data) => data.todos))),
      switchMap(([action, todos]) => {
        if (todos.length === 0) {
          return this.http
            .get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos`)
            .pipe(
              tap((todos) => this.store.dispatch(setTodos({ payload: todos }))),
              map(() => successLoadTodos())
            );
        }
        return of(successLoadTodos());
      })
    )
  );
}
