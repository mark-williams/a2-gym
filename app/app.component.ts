import { Component } from '@angular/core';
import { InstructorListComponent } from './instructors/instructor-list/instructor-list.component';
import { Instructor } from './instructors/shared/instructor.model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [InstructorListComponent]
})
export class AppComponent {
    selectedInstructor: Instructor = null;

    onSelected(selected: Instructor) {
        this.selectedInstructor = selected;
    }
}
