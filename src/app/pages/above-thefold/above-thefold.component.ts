import { Component, OnInit } from '@angular/core';
import { TextReaderService } from '../../text-reader.service'

@Component({
  selector: 'app-above-thefold',
  templateUrl: './above-thefold.component.html',
  styleUrls: ['./above-thefold.component.scss']
})
export class AboveThefoldComponent implements OnInit {
  showText = {
    'en': ['','','','','','','','','','',''],
    'cn': ['','','','','','','','','','','']
  };
  language = 'en';

  constructor(private _textReaderService: TextReaderService) { }

  ngOnInit() {
    this._textReaderService.readFile('section1.json').subscribe(response => {
      this.language = response.language;
      this.showText = response.text;
    });
    this._textReaderService.langChange$.subscribe(response => {
      this.language = response;
    });
  }

  goToContactUs() {
    // window.location.href = '#contact-us';
    var element = document.getElementById("contact-us");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }

}
