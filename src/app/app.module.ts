import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.state';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodoComponent } from './todo/todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffectService } from './store/todos.effect.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterDisplayComponent,
    UserDetailsComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([TodosEffectService]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
