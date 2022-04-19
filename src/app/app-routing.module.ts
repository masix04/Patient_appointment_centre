import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

import { APIURLS } from './utils/APIURLS';
import { AppointmentListingComponent } from './appointment-listing/appointment-listing.component';

const routes: Routes = [

  { path: 'past-week', component: AppointmentListingComponent },
  { path: 'today', component: AppointmentListingComponent },
  { path: 'next-week', component: AppointmentListingComponent },
  { path: 'this-week-old', component: AppointmentListingComponent },
  { path: 'this-week-upcomming', component: AppointmentListingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  dynamicRoute : string;

  constructor(private apis:APIURLS, private router: Router)
  {
    this.dynamicRoute = this.apis.urlKeyword;

  }
}
