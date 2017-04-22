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
import { Role } from './../../api/index';

@Injectable()
export class RoleService extends RequestService {

    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }
    
    getAll(): Observable<Role[]> {
        const path = this.basePath + `roles`;
        let object: Object[] = this.createParamsForSaveUpdate();
        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }
}