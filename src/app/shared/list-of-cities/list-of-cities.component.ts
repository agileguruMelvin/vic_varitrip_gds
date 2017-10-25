import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-list-of-cities',
  templateUrl: './list-of-cities.component.html',
  styleUrls: ['./list-of-cities.component.scss']
})
export class ListOfCitiesComponent implements OnInit {

  constructor(
    @Inject(MD_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // console.log(this.data.listOfCountries);
  }

}
