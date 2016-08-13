import { Component, Output, EventEmitter } from '@angular/core';
import { Instructor } from './instructor';

@Component({
    selector: 'instructor-list',
    templateUrl: 'app/instructors/instructor-list.component.html'
})
export class InstructorListComponent {
    @Output() changed = new EventEmitter<Instructor>(); 
    instructors = [
        new Instructor(1, 'Simon Hall', 30),
        new Instructor(2, 'Liz Jones', 30),
        new Instructor(3, 'Joanne Wilkins', 25),
        new Instructor(4, 'Paul Regan', 20),
        new Instructor(5, 'Steph Harris', 27.50)
    ];

    selectedInstructor: Instructor = null;

    select = function(instructor: Instructor) {
        this.selectedInstructor = instructor;
        this.changed.emit(instructor);
    }
}
