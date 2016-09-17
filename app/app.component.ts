import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './layout/index';
import { DashboardComponent } from './dashboard/index';
import { InstructorService } from './shared/index';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [HeaderComponent, DashboardComponent, RouterOutlet],
    providers: [InstructorService]
})
export class AppComponent {
}

//    providers: [HTTP_PROVIDERS, InstructorService]

