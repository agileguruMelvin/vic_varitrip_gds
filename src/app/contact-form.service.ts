import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ContactFormService {

  constructor(private http: Http) { }

  onSubmit(userdata) {
    console.log(userdata);

    let createNewUserAPIEndpoint = 'https://4fy0xxlg24.execute-api.us-east-1.amazonaws.com/prod/gds-contact-us';
    let headers       = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option
    let body          = JSON.stringify(userdata);

    return this.http.post(createNewUserAPIEndpoint, body, options).map(response => {
      return response.json();
    });
  }

}
