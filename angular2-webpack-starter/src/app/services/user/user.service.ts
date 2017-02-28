import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Users } from './../../models/users.model';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {
    
    constructor(private http: Http) { }
    
    getUsers(): Observable<Users[]> {
        return this.http.get('/api/userscontroller/users')
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}