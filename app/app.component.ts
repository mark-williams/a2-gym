import { Component } from '@angular/core';
import { InstructorListComponent } from './instructors/instructor-list/instructor-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Instructor } from './instructors/shared/instructor.model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [DashboardComponent]
})
export class AppComponent {
    // selectedInstructor: Instructor = null;

    // onSelected(selected: Instructor) {
    //     this.selectedInstructor = selected;
    }
}
