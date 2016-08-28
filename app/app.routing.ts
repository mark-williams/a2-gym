import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/index';
import { InstructorMaintenanceListComponent } from './instructor-maintenance/index';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dash', component: DashboardComponent },
    { path: 'instructors', component: InstructorMaintenanceListComponent },
    { path: '**', component: DashboardComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: any = RouterModule.forRoot(appRoutes);
