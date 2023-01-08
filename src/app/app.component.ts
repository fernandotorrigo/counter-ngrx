import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import {
  counterDecrement,
  counterIncrement,
  IAppState,
  setCounter,
} from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store<{ app: IAppState }>) {}

  counter$ = this.store.select(`app`).pipe(map((data) => data.counter));

  ngOnInit() {}

  increase() {
    this.store.dispatch(counterIncrement());
  }

  decrease() {
    this.store.dispatch(counterDecrement());
  }

  setCounter(value: string) {
    const parsedValue = parseFloat(value);
    this.store.dispatch(setCounter({ counter: parsedValue }));
  }
}
