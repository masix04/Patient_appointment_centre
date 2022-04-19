import {Component, OnInit} from '@angular/core';
import {APIURLS} from '../utils/APIURLS';
import {Router} from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector:'appointments-comp',
    templateUrl:'./appointment.component.html',
    styleUrls:['./appointment.component.css'],
    providers:[DatePipe]
})
export class AppointmentsComponent implements OnInit{
    today: any  = new Date();
    constructor(public apis:APIURLS, public router:Router)
    {

    }
    ngOnInit()
    {

    }
}