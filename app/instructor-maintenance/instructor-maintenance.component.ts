import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Instructor, InstructorService } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'instructor-maint',
    templateUrl: 'instructor-maintenance.component.html'
})
export class InstructorMaintenanceComponent implements OnInit {

    instructor: any;

    constructor(private _route: ActivatedRoute, private _service: InstructorService) { }

    ngOnInit() {
        let id = parseInt(this._route.snapshot.params['id'], 10);

        this._service
            .getInstructors()
            .subscribe(
                (results) => {
                    this.instructor = results.find((i: Instructor) => { return i.id === id; });
                },
                error => {
                    console.log('ERROR', error);
                }
            );
    }
}
