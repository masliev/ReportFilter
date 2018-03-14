import { Component, OnInit } from '@angular/core';
import {IMyDrpOptions, IMyDateRangeModel} from 'mydaterangepicker';
import {DatepickerService} from "../../services/datepicker.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username =  localStorage.getItem('username');

    constructor(private datepicker: DatepickerService) { }

    onDateRangeChanged(event: IMyDateRangeModel) {
        console.log(event.beginEpoc, event.endEpoc);
        var daterange_json = {
          "start": event.beginEpoc,
          "end": event.endEpoc
        };
        console.log(daterange_json);
        this.datepicker.daterange(daterange_json)
        .catch((err) => {
          console.log(err);
        });
    }

}
