import { Component } from '@angular/core';
import { InstructorListComponent } from '../instructors/instructor-list/instructor-list.component';
import { SelectedInstructorComponent } from '../instructors/selected-instructor/selected-instructor.component';
import { Instructor } from '../shared/instructor.model';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    directives: [InstructorListComponent, SelectedInstructorComponent]
})
export class DashboardComponent {
    selectedInstructor: Instructor = null;

    onSelected(selected: Instructor) {
        this.selectedInstructor = selected;
    }
}
