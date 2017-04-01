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
import { Group, User, Role } from './../../api/index';

@Injectable()
export class GroupService extends RequestService {

    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }
    
    getAll(): Observable<Group[]> {
        const path = this.basePath + `/groups`;
        let object: Object[] = this.createParamsForSaveUpdate();
        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getGroupMembers(id: number): Observable<User[]> {
        const path = this.basePath + `/groups/`+id+`/members`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    saveGroupMembers(id: number,users: User[]): Observable<Group> {
        const path = this.basePath + `/groups/`+id+`/members`;
        let object: Object[] = this.createParamsForSaveUpdate(users);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getGroupRoles(id: number): Observable<User[]> {
        const path = this.basePath + `/groups/`+id+`/roles`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    saveRoles(id: number,roles: Role[]): Observable<Group> {
        const path = this.basePath + `/groups/`+id+`/roles`;
        let object: Object[] = this.createParamsForSaveUpdate(roles);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    save(group: Group): Observable<Group> {
        const path = this.basePath + `/groups`;
        let object: Object[] = this.createParamsForSaveUpdate(group);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    update(group: Group): Observable<Group> {
        const path = this.basePath + `/groups/`+group.id;
        let object: Object[] = this.createParamsForSaveUpdate(group);

        return this.http.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    delete(group: Group): Observable<{}> {
        const path = this.basePath + `/groups/`+group.id;
        let object: Object[] = this.createParamsForSaveUpdate(group);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }
}