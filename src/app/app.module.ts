import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CounterInfoComponent } from './components/counter-info/counter-info.component';
import { CounterComponent } from './components/counter/counter.component';
import { TodosComponent } from './components/todos/todos.component';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { FormsModule } from '@angular/forms';
import { TranslationTestComponent } from './components/translation-test/translation-test.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterInfoComponent,
    CounterComponent,
    TodosComponent,
    LanguagePickerComponent,
    TranslationTestComponent,
    TranslatePipe,
    TodoItemComponent,
    AddTodoComponent,
    MyFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
