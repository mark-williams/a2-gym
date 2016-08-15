import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, DashboardComponent]
})
export class AppComponent {
}
