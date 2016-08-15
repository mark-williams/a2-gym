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

