import { Component, Input } from '@angular/core';
import { Instructor } from '../../shared/instructor.model';

@Component({
    moduleId: module.id,
    selector: 'selected-instructor',
    templateUrl: 'selected-instructor.component.html'
})
export class SelectedInstructorComponent {
    @Input() instructor: Instructor;

    constructor() {
    }
}
