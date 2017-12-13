import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as Datamap from 'datamaps';

import { MatDialog, MatDialogRef } from '@angular/material';
import { ListOfCitiesComponent } from '../../shared/list-of-cities/list-of-cities.component';

import { TextReaderService } from '../../text-reader.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  listOfCountries;

  constructor(public dialog: MatDialog, private _textReaderService: TextReaderService) { }

  ngOnInit() {
    this._textReaderService.readMap().subscribe( response => {
      this.listOfCountries = [];
      this.listOfCountries = response;
      this.listOfCountries.sort(function(a, b){
          var x = a.country.toLowerCase();
          var y = b.country.toLowerCase();
          var s = a.name.toLowerCase();
          var t = b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          if (s < t) {return -1;}
          if (s > t) {return 1;}
          return 0;
      });
      this.draw();
    });
  }

  draw() {
    var radius_size = 10;
    var bubble_map = new Datamap({
      element: document.getElementById("bubbles"),
      geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
      },
      bubblesConfig: {
        animate: false
      },
      fills: {
        defaultFill: '#212121',
        USA: '#3A549A'
      }
    });
    bubble_map.bubbles(this.listOfCountries, {
      popupTemplate: function(geo, data) {
        // return '<div class="hoverinfo">Yield:' + data.yeild + 'Exploded on ' + data.date + ' by the '  + data.country + '</div>';
        return '<div class="hoverinfo">' + data.name + ', ' + data.country + '</div>';
      }
    });
  }

  openDialog() {
    let dialogRef = this.dialog.open(ListOfCitiesComponent, {
      data: {
        listOfCountries: this.listOfCountries
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      // this.selectedOption = result; // if option is present in dialog, retrieve it
    });
  }

}
