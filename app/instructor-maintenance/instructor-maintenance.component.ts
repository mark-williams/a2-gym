import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Instructor, InstructorService } from '../shared/index';

@Component({
    moduleId: module.id,
    selector: 'instructor-maint',
    templateUrl: 'instructor-maintenance.component.html'
})
export class InstructorMaintenanceComponent implements OnInit {

    instructor: Instructor;
    instructorUnderEdit: Instructor;
    errorMessage: string = '';

    constructor(private _route: ActivatedRoute, private _service: InstructorService) { }

    ngOnInit() {
        let id = parseInt(this._route.snapshot.params['id'], 10);

        this._service
            .getInstructors()
            .subscribe(
                (results) => {
                    let instructor = results.find((i: Instructor) => { return i.id === id; });
                    this.instructor = instructor;
                    this.setEditDetails(instructor);
                },
                error => {
                    console.log('ERROR', error);
                }
            );
    }

    save(edited: Instructor) {
        console.log(`Saving: ${edited.name}`);
        this._service.saveInstructor(edited)
            .then((result) => {
                this.instructor = result;
                this.setEditDetails(result);
            })
            .catch((err) => this.errorMessage = err);
    }

    private setEditDetails(instructor: Instructor): void {
        this.instructorUnderEdit = Object.assign({}, instructor);
    }
}
