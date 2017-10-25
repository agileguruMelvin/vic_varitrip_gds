import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class TextReaderService {
  public static language;
  // Observable sources
  private langChangeSource = new Subject();
  // Observable streams
  langChange$:any = this.langChangeSource.asObservable();

  constructor(private _http:Http) { 
    TextReaderService.language = 'en'; // init english
  }

  readMap() {
    let file = 'assets/text/maps.json';

    return this._http.get(file).map(response => {
      return response.json();
    });
  }

  changeLanguage(lang) {
    TextReaderService.language = lang;
    // tell listeners to switch languages
    this.langChangeSource.next(TextReaderService.language);

    console.log(TextReaderService.language);
  }

  readFile(fileName) {
    let file = 'assets/text/' + fileName;

    return this._http.get(file).map(response => {
      return {
        text: response.json(),
        language: TextReaderService.language
      };
    });
  }

}
