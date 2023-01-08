import { createAction, createReducer, on, props } from '@ngrx/store';

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export interface IAppState {
  counter: number;
  todos: ITodo[];
}

export const appInitialState: IAppState = {
  counter: 2,
  todos: [],
};

export const counterIncrement = createAction(`[App] count increase`);

export const counterDecrement = createAction(`[App] count deincrease`);

export const setCounter = createAction(
  `[App] count set`,
  props<{ counter: number }>()
);

export const loadTodos = createAction(`[App] Load todos`);

export const setTodos = createAction(
  `[App] Set todos`,
  props<{ payload: ITodo[] }>()
);

export const successLoadTodos = createAction(`[App] Success load todos`);

export const appReducer = createReducer(
  appInitialState,
  on(counterIncrement, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(counterDecrement, (state) => {
    state = {
      ...state,
      counter: state.counter - 1,
    };
    return state;
  }),
  on(setCounter, (state, { counter }) => {
    state = {
      ...state,
      counter,
    };
    return state;
  }),
  on(setTodos, (state, { payload }) => {
    state = {
      ...state,
      todos: payload,
    };
    return state;
  })
);
