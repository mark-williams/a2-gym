import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructorService } from './shared/instructor.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, DashboardComponent],
    providers: [InstructorService]
})
export class AppComponent {
}
