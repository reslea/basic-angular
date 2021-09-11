import { LanguageService } from './../../services/language.service';
import { Languages } from './languages';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {
  Languages = Languages;
  language: Languages;

  constructor(private readonly langService: LanguageService) {
    langService.language$.subscribe(newLang => this.language = newLang as Languages);
  }

  ngOnInit(): void {
  }

  getLanguageKeys() : string[] {
    var keys = Object.keys(Languages);
    return keys;
  }

  langChanged(evt) {
    const newLang = evt.target.value;
    this.langService.setLanguage(newLang);
  }
}
