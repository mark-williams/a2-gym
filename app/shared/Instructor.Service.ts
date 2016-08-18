import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Instructor } from './instructor.model';


@Injectable()
export class InstructorService {
      
    constructor(private _http: Http) {}

    getInstructors() {
        return this._http.get('api/instructors.json')
                .map((response: Response) => <Instructor[]>response.json().data)
                .catch(this.handleError);
    }

    private handleError(err: Response) {
        return Observable.throw(err || 'Server error');
    }
}