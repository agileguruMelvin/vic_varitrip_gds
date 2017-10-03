import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-above-thefold',
  templateUrl: './above-thefold.component.html',
  styleUrls: ['./above-thefold.component.scss']
})
export class AboveThefoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToContactUs() {
    window.location.href = '#contact-us';
  }

}
