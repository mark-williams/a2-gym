import { Component, OnInit } from '@angular/core';
import { InstructorService, Instructor } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'instructor-maintenance-list',
    templateUrl: 'instructor-maintenance-list.component.html'
})
export class InstructorMaintenanceListComponent implements OnInit {

    instructors: Instructor[];

    constructor(private _instructorService: InstructorService) { }

    ngOnInit() {
        this._instructorService
            .getInstructors()
            .subscribe((data) => this.instructors = data);
    }
}
