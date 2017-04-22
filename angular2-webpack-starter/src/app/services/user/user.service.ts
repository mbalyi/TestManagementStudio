import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { BASE_PATH, COLLECTION_FORMATS } from './../../api/variables';
import { Configuration } from './../../api/configuration';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { RequestService } from './../request.service';
import { User, Role } from './../../api/index';

@Injectable()
export class UserService extends RequestService {

    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }

    getCurrentUser(): Observable<User> {
        const path = this.basePath + `/users/me`;
        let object: Object[] = this.createParamsForSaveUpdate();
        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }
    
    getAll(): Observable<User[]> {
        const path = this.basePath + `users`;
        let object: Object[] = this.createParamsForSaveUpdate();
        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getUserRoles(user: User): Observable<Role[]> {
        const path = this.basePath + `users/`+user.id+`/roles`;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.http.get(path).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    addUserRoles(id: number, roles: Role[]): Observable<Role[]> {
        const path = this.basePath + `users/`+id+`/roles`;
        let object: Object[] = this.createParamsForSaveUpdate(roles);

        return this.http.post(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    save(user: User): Observable<User> {
        const path = this.basePath + `users`;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.http.post(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    update(user: User): Observable<User> {
        const path = this.basePath + `users/`+user.id;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.http.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    delete(user: User): Observable<{}> {
        const path = this.basePath + `users/`+user.id;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }
}