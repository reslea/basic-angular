import { Languages } from './../components/language-picker/languages';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  language$ = new BehaviorSubject<string>('ru');

  setLanguage(newLang) {
    this.language$.next(newLang);
  }
}
