import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selected = '';
  iconItems = [
    {text: 'Travel Experience', icon: 'face'},
    {text: 'Why Varitrip', icon: 'notifications_off'},
    {text: 'Coverage', icon: 'notifications_off'},
    {text: 'Integration', icon: 'notifications_off'},
    {text: 'Curated results', icon: 'notifications_off'},
    {text: 'Automated process', icon: 'notifications_off'}
  ];
}
