import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  selected = '';
  iconItems = [
    {text: 'Home', icon: 'Home'},
    {text: 'Customer Value', icon: 'face'},
    {text: 'Why us', icon: 'notifications_off'},
    {text: 'Coverage', icon: 'notifications_off'},
    {text: 'Integration', icon: 'notifications_off'},
    {text: 'Curated results', icon: 'notifications_off'},
    {text: 'Automated process', icon: 'notifications_off'}
  ];

  select(text: string) { this.selected = text; }

  constructor() { }

  ngOnInit() {
  }

}
