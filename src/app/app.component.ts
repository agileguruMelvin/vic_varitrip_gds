import { Component } from '@angular/core';
import { TextReaderService } from './text-reader.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected = '';
  iconItems = [
    {text: 'Travel Products', icon: 'face'},
    {text: 'Why Varitrip', icon: 'notifications_off'},
    {text: 'Coverage', icon: 'notifications_off'},
    {text: 'Integration', icon: 'notifications_off'},
    {text: 'Curated results', icon: 'notifications_off'},
    {text: 'Automated process', icon: 'notifications_off'}
  ];

  constructor(private _textReaderService: TextReaderService) {}

  changeLanguage(lang) {
    // alert(lang);
    this._textReaderService.changeLanguage(lang);
  }

  goToElement(elementID) {
    // window.location.href = '#contact-us';
    var element = document.getElementById(elementID);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }
}
