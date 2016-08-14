import { Component, Input, EventEmitter } from '@angular/core';
import { Instructor } from '../shared/instructor.model';

@Component({
    selector: 'selected-instructor',
    templateUrl: 'app/instructors/selected-instructor/selected-instructor.component.html'
})
export class SelectedInstructorComponent {
    @Input() instructor: Instructor;

    constructor() {
    }
}
