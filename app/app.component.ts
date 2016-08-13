import { Component } from '@angular/core';
import { InstructorListComponent } from './instructors/instructor-list.component';
import { Instructor } from './instructors/instructor';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [InstructorListComponent]
})
export class AppComponent {
    selectedInstructor: Instructor = null;

    onSelected = function(selected: Instructor) {
        this.selectedInstructor = selected;
    }
}
