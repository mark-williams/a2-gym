import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/index';
import { InstructorMaintenanceListComponent } from './instructor-maintenance/index';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, DashboardComponent, InstructorMaintenanceListComponent ],
  providers: [ appRoutingProviders ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
