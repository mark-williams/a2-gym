import { Injectable } from '@angular/core';
import { Instructor } from './instructor.model';


@Injectable()
export class InstructorService {
    instructors = [
            new Instructor(1, 'Simon Hall', 30),
            new Instructor(2, 'Liz Jones', 30),
            new Instructor(3, 'Jo Wilkins', 22),
            new Instructor(4, 'Paul Regan', 22),
            new Instructor(5, 'Steph Harris', 32.00)
        ];

    getInstructors() {
        return this.instructors;
    }
}