import { Component } from '@angular/core';
import { InstructorListComponent } from './instructors/instructor-list.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Gym Sessions Manager</h1>
        <instructor-list></instructor-list>
        `,
    directives: [InstructorListComponent]
})
export class AppComponent { 

}
