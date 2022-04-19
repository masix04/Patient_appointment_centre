import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIURLS } from './utils/APIURLS';
import { Router } from '@angular/router';
import { AppointmentsComponent } from './appointment/appointment.component';

const routes: Routes = [

  // {path: 'appointments/:date'}
];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'appointments', component: AppointmentsComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  dynamicRoute : string;

  constructor(private apis:APIURLS, private router: Router)
  {
    this.dynamicRoute = this.apis.urlKeyword;

    this.router.resetConfig([

      {path: this.dynamicRoute+'/appointments', component: AppointmentsComponent},
      // {path: '**', redirectTo: this.dynamicRoute, pathMatch: 'full'},
      // {path: '', redirectTo: this.dynamicRoute, pathMatch: 'full'},
    ]);
  }
}
