import { Component } from '@angular/core';

@Component({
    selector: 'instructor-list',
    templateUrl: 'app/instructors/instructor-list.html'
})
export class InstructorListComponent { 
    instructors = [
        'Simon Hall',
        'Liz Jones',
        'Joanne Wilkins',
        'Paul Regan',
        'Steph Harris'
    ];
}
