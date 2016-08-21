import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { InstructorService } from '../../shared/instructor.service';
import { Instructor } from '../../shared/instructor.model';

@Component({
    moduleId: module.id,
    selector: 'instructor-list',
    templateUrl: 'instructor-list.component.html'
})
export class InstructorListComponent implements OnInit {
    @Output() changed = new EventEmitter<Instructor>();

    instructors: Instructor[];
    selectedInstructor: Instructor = null;
    errorMessage: string;

    constructor(private _instructorService: InstructorService) {
    }

    ngOnInit() {
        this._instructorService
            .getInstructors()
            .subscribe(
                (instructors) => this.instructors = instructors,
                (error) => {
                    let resp = <Response>error;
                    this.errorMessage = resp.statusText;
                }
            );
    }

    select(instructor: Instructor) {
        this.selectedInstructor = instructor;
        this.changed.emit(instructor);
    }
}
