import { Component } from '@angular/core';
import { Instructor } from './instructor';

@Component({
    selector: 'instructor-list',
    templateUrl: 'app/instructors/instructor-list.component.html'
})
export class InstructorListComponent { 
    instructors = [
        new Instructor(1, 'Simon Hall'),
        new Instructor(2, 'Liz Jones'),
        new Instructor(3, 'Joanne Wilkins'),
        new Instructor(4, 'Paul Regan'),
        new Instructor(5, 'Steph Harris')
    ];
}
