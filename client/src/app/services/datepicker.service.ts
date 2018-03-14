import { Injectable } from '@angular/core';
import {User} from "../models/user";
import { Headers, Http } from '@angular/http';

@Injectable()
export class DatepickerService {

  private BASE_URL: string = 'http://localhost:5000/';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  daterange(date): Promise<any> {
    let url: string = `${this.BASE_URL}reports/range`;
    return this.http.post(url, date, {headers: this.headers}).toPromise();
  }

}
