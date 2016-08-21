#Angular 2 Gym
Simple application that will (eventually!) allow a user to manage gym sessions for a set of instructors.

Gym is hopefully appropriate as this is where I plan to hone my Angular 2 skills (_starting with low weights on the bar at first!_).


###12 Aug 2016
Added a child component to display a list of instructors (this will eventually contain its own children)

###13 Aug 2016
Clicking on an instructor in the instructor list now causes the instructor details to be displayed (currently fairly minimal, just the name and session cost, but we can enlarge these details later and add the ability to edit). To decouple the list and the detail display the list emits a changed event when an instructor is clicked; the containing component hooks into this event to set the selected instructor to display. (Less brittle than the Angular 1 two-way binding and shared scopes approach.)

###14 Aug 2016
Reorganised folder structure according to Angular 2 guidelines:

https://angular.io/docs/ts/latest/guide/style-guide.html#!#04-08

This will be a work in progress; folders will be split further as the project size increases.

###15 Aug 2016
Added some (very) rudimentary styling, using Material Design Lite. (Makes a change from using Bootstrap!)

###17 Aug 2016
Moed the acquisition of instructor data from within the *instructor-list* component into a dedicated service. This will allow data to be shared in the future. 

The new service is injected into the *instructor-list* component by decorating it with *@Injectable()*:

~~~~
@Injectable()
export class InstructorService {
    instructors = [];

    getInstructors() {
        return this.instructors;
    }
}
~~~~

and marking it as a provider in the main containing component:

~~~~
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [HeaderComponent, DashboardComponent],
    providers: [InstructorService]
})
export class AppComponent {
}
~~~~

As the *InstructorService* is concerned with instructor data I have moved the *Instructor* class to the same location.

Refactored the *instructor-list* component so that its data retrieval is now performed outside of its constructor; to do this it now implements Aangular's *OnInit* interface.

###18 Aug 2016
Added an http call to get instructor data. As no api currently exists this is merely a path to a json file contained in the *api* folder.

N.B In order to use the *map* function on the Observable returned by *get* I had to include the following imports:

~~~~
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
~~~~

###18 Aug 2016
Added ability to book and amend an instructor's session by entering/amending the client name. This uses two-way binding, using the 'banana-in-the-box' syntax in the view:
~~~~
<input [attr.id]="'session-id-' + index" type="text"  class="mdl-textfield__input" [(ngModel)]="session.client" />
~~~~

Two-way binding can of course be problematic, especially in larger applications, where a flux pattern (such as *Redux*) is worthy of consideration, however I've used it here because: first, it's very local the the component and second, this is a sandbox application!

Of course after updating the model we would have to decide when to save the data (e.g. using an api), maybe a *Save* button on the details section?

###21 Aug 2016
Added *moduleId* to component decorators - this allows for much simpler (relative) template paths (see https://angular.io/docs/ts/latest/cookbook/component-relative-paths.html)
