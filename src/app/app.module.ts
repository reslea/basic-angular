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

@NgModule({
  declarations: [
    AppComponent,
    CounterInfoComponent,
    CounterComponent,
    TodosComponent,
    LanguagePickerComponent,
    TranslationTestComponent,
    TranslatePipe
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
