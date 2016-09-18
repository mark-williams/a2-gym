import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Instructor } from './instructor.model';


@Injectable()
export class InstructorService {

    private apiUrl = 'app/instructors';

    constructor(private _http: Http) {}

    getInstructors() {
        return this._http.get(this.apiUrl)
            .map((response: Response) => <Instructor[]>response.json().data)
            .catch(this.handleObervableError);
    }

    saveInstructor(instructor: Instructor): Promise<Instructor> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let body = JSON.stringify(instructor);
        let url = `${this.apiUrl}/${instructor.id}`;
        return this._http.put(url, body, headers)
                .toPromise()
                .then(() => instructor)
                .catch(this.handlePromiseError);
    }

    private handleObervableError(err: Response) {
        return Observable.throw(err || 'Server error');
    }

    private handlePromiseError(err: any): Promise<any> {
        console.error('Error', err);
        return Promise.reject(err.message || err);
    }

}
