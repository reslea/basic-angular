import { LanguageService } from './../../services/language.service';
import { TranslationService } from './../../services/translation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translation-test',
  templateUrl: './translation-test.component.html',
  styleUrls: ['./translation-test.component.scss']
})
export class TranslationTestComponent implements OnInit {

  constructor(readonly langService: LanguageService) { }

  ngOnInit(): void {
  }

}
