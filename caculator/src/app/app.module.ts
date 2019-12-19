import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingAppComponent } from './rating-app/rating-app.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingAppComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
