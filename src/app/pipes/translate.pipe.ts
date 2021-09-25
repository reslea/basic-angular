import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(
    private readonly translationService: TranslationService,
    private readonly langSevice: LanguageService) {
  }

  transform(value: string): string {
    const translations = this.translationService.translations;
    const currLanguage = this.langSevice.language$.value;

    return translations[currLanguage][value] || value;
  }
}
