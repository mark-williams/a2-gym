import { Component } from '@angular/core';
import { InstructorListComponent } from '../instructors/instructor-list/instructor-list.component';
import { SelectedInstructorComponent } from '../instructors/selected-instructor/selected-instructor.component';
import { Instructor } from '../instructors/shared/instructor.model';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    directives: [InstructorListComponent, SelectedInstructorComponent]
})
export class DashboardComponent {
    selectedInstructor: Instructor = null;

    onSelected(selected: Instructor) {
        this.selectedInstructor = selected;
    }
}
