import { createAction, createReducer, on, props } from '@ngrx/store';

export interface IAppState {
  counter: number;
}

export const appInitialState: IAppState = {
  counter: 2,
};

export const counterIncrement = createAction(`[App] count increase`);
export const counterDecrement = createAction(`[App] count deincrease`);
export const setCounter = createAction(
  `[App] count set`,
  props<{ counter: number }>()
);

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
  })
);
