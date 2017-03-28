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
    
    getAll(): Observable<User[]> {
        const path = this.basePath + `/users`;
        let object: Object[] = this.createParamsForSaveUpdate();
        return this.authHttp.get(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    getUserRoles(user: User): Observable<Role[]> {
        const path = this.basePath + `/users/`+user.id+`/roles`;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.authHttp.get(path).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    addUserRoles(id: number, roles: Role[]): Observable<Role[]> {
        const path = this.basePath + `/users/`+id+`/roles`;
        let object: Object[] = this.createParamsForSaveUpdate(roles);

        return this.authHttp.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    save(user: User): Observable<User> {
        const path = this.basePath + `/users`;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.authHttp.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    update(user: User): Observable<User> {
        const path = this.basePath + `/users/`+user.id;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.authHttp.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    delete(user: User): Observable<{}> {
        const path = this.basePath + `/users/`+user.id;
        let object: Object[] = this.createParamsForSaveUpdate(user);

        return this.authHttp.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }
}