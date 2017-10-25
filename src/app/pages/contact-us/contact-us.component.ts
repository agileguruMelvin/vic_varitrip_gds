import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../../contact-form.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  isSending = false;

  constructor(private _contactFormService: ContactFormService) { }

  ngOnInit() {
  }

  onSubmit(userdata) {
    // console.log(userdata);
    this.isSending = true;
    
    this._contactFormService.onSubmit(userdata).subscribe( response => {
      console.log(response);
      if (response === "SUCCESS") {
        alert('Thank you. We will be in contact with you in 24 hours.');
      } else {
        alert('There was an error in sending the form, please try again.');
      }

      this.isSending = false;
    });
  }

}
