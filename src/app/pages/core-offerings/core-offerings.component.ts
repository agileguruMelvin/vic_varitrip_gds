import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-offerings',
  templateUrl: './core-offerings.component.html',
  styleUrls: ['./core-offerings.component.scss']
})
export class CoreOfferingsComponent implements OnInit {
  iconItems = [
    {text: 'UNESCO & Historical Sites', icon: 'hedge'},
    {text: 'Museums', icon: 'jewel'},
    {text: 'Cultural Sites & Tours', icon: 'buddah'},
    {text: 'Animal & Amusement Parks', icon: 'panda'},
    {text: 'Food Tours', icon: 'sushi'},
    {text: 'Walking Tours', icon: 'shoe'},
    {text: 'Scenic & Nature Tours', icon: 'mountain'},
    {text: 'Bus Tours', icon: 'bus'},
    {text: 'Airport <—> Hotel Transfers', icon: 'plane'},
    {text: 'Night & City Tours', icon: 'city'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
