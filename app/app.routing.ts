import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/index';
import { InstructorMaintenanceListComponent, InstructorMaintenanceComponent } from './instructor-maintenance/index';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dash', component: DashboardComponent },
    { path: 'instructors', component: InstructorMaintenanceListComponent },
    { path: 'instructors/:id', component: InstructorMaintenanceComponent },
    { path: '**', component: DashboardComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: any = RouterModule.forRoot(appRoutes);
