import { enTranslations } from './../translations/en';
import { ruTranslations } from './../translations/ru';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public translations: { 
    [key: string]: { 
      [key: string] : string 
    } 
  } = {
    ru: ruTranslations,
    en: enTranslations
  }
}