import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'gym-header',
    templateUrl: 'app/layout/header.component.html',
    directives: [ RouterLink ]
})
export class HeaderComponent {
}
