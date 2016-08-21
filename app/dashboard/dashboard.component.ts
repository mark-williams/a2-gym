import { Component } from '@angular/core';
import { InstructorListComponent, SelectedInstructorComponent } from '../instructors/index';
import { Instructor } from '../shared/index';

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
