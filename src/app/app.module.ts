import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppointmentsComponent } from './appointment/appointment.component';
import { FilterHeaderComponent } from './filter-header/filter-header.component';
import { APIURLS } from './utils/APIURLS';
import { ListingTabsComponent } from './listing-tabs/listing-tabs.component';
import { AppointmentListingComponent } from './appointment-listing/appointment-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    FilterHeaderComponent,
    ListingTabsComponent,
    AppointmentListingComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [ APIURLS],
  bootstrap: [AppComponent]
})
export class AppModule { }
