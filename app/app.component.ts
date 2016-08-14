import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DashboardComponent]
})
export class AppComponent {
}
