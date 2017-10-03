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
    {text: 'Fast & Efficient Bookings', icon: 'network'},
    {text: 'Best Prices', icon: 'revenue'},
    {text: 'Easy Integration', icon: 'gears'},
    {text: 'Late Bookings / Instant Confirmation', icon: 'email'},
    {text: '24/7 Operations Support', icon: '247'},
    {text: 'Easy & Best Redemption Methods', icon: 'redemption'},
    {text: 'No Annual or Monthly Fees', icon: 'free'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
