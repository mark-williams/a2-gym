import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { HeaderComponent } from './layout/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstructorService } from './shared/instructor.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [HeaderComponent, DashboardComponent],
    providers: [HTTP_PROVIDERS, InstructorService]
})
export class AppComponent {
}
