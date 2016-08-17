import { Component, Output, EventEmitter } from '@angular/core';
import { InstructorService } from '../../shared/instructor.service';
import { Instructor } from '../../shared/instructor.model';

@Component({
    selector: 'instructor-list',
    templateUrl: 'app/instructors/instructor-list/instructor-list.component.html'
})
export class InstructorListComponent {
    @Output() changed = new EventEmitter<Instructor>(); 

    instructors: Instructor[];
    data: number[];
    selectedInstructor: Instructor = null;

    constructor(_instructorService: InstructorService) {
        this.instructors = _instructorService.getInstructors();
    }
        
    select(instructor: Instructor) {
        this.selectedInstructor = instructor;
        this.changed.emit(instructor);
    }
}
