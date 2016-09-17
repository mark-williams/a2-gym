import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import  { HTTP_PROVIDERS, HttpModule, XHRBackend } from '@angular/http';
import { InMemoryWebApiModule, InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard/index';
import { InstructorMaintenanceListComponent, InstructorMaintenanceComponent } from './instructor-maintenance/index';
import { InstructorData } from './api/in-memory-data.service';

console.log('WEBAPI', InMemoryWebApiModule);

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule, InMemoryWebApiModule.forRoot(InstructorData) ],
  declarations: [ AppComponent, DashboardComponent, InstructorMaintenanceListComponent, InstructorMaintenanceComponent ],
  providers: [
    HTTP_PROVIDERS,
    appRoutingProviders,
    { provide: XHRBackend, useClass: InMemoryBackendService },
    { provide: SEED_DATA, useClass: InstructorData }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
