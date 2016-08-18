import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { InstructorService } from '../../shared/instructor.service';
import { Instructor } from '../../shared/instructor.model';

@Component({
    selector: 'instructor-list',
    templateUrl: 'app/instructors/instructor-list/instructor-list.component.html'
})
export class InstructorListComponent implements OnInit {
    @Output() changed = new EventEmitter<Instructor>(); 

    instructors: Instructor[];
    data: number[];
    selectedInstructor: Instructor = null;

    constructor(private _instructorService: InstructorService) {
    }
        
    ngOnInit() {
        this._instructorService
            .getInstructors()
            .subscribe((instructors) => this.instructors = instructors);
    }

    select(instructor: Instructor) {
        this.selectedInstructor = instructor;
        this.changed.emit(instructor);
    }
}
