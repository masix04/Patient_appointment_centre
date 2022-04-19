import {Component, OnInit} from '@angular/core';
import {APIURLS} from '../utils/APIURLS';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector:'filter-header-comp',
    templateUrl:'./filter-header.component.html',
    styleUrls:['./filter-header.component.css'],
    providers:[DatePipe]
})
export class FilterHeaderComponent implements OnInit{
    today: any  = new Date();
    ages: any;
    months: any;

    constructor(public apis:APIURLS, public router:Router)
    {
      this.ages = ['Below 3','Above 3','Above 5','Above 10','Above 20','Above 30','Above 40','Above 50','Above 60','Above 70','Above 80'];
      this.months = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October','November','December'];
    }
    ngOnInit()
    {

    }
    getAppointments() {
      console.log('Getting Appointments...');
    }
}
