import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-listing',
  templateUrl: './appointment-listing.component.html',
  styleUrls: ['./appointment-listing.component.css']
})
export class AppointmentListingComponent implements OnInit {
  CheckUpTypes: any;

  constructor() {
    this.CheckUpTypes = ['Bruises', 'Splean Operation', 'Kidney Transplant', 'Kidney Removal', 'ENT', 'Brain Surgery'];
  }

  ngOnInit(): void {
  }

}
