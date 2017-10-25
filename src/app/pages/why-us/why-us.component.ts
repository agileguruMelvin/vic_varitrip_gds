import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent implements OnInit {
  iconItems = [
    {text: 'One Account, Hundreds of Products', icon: 'user'},
    {text: 'Complete China Coverage', icon: 'china'},
    {text: 'Easy Bookings', icon: 'network'},
    {text: 'Competitive Prices', icon: 'revenue'},
    {text: 'Easy Integration', icon: 'gears'},
    {text: 'Last Minute Bookings & Instant Confirmations', icon: 'timer'},
    {text: '24/7 Operations Support', icon: '247'},
    {text: 'Easy Redemption', icon: 'redemption'},
    {text: 'No Annual or Monthly Fees', icon: 'free'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
