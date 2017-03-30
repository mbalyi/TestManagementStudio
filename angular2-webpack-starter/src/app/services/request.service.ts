import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { BASE_PATH, COLLECTION_FORMATS } from './../api/variables';
import { Configuration } from './../api/configuration';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from 'angular2-jwt';
import { AuthApi } from './../api/v1/AuthApi';

@Injectable()
export class RequestService extends AuthApi {
    protected basePath = 'http://api.onlab.iceht.eu/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    createParamsForSaveUpdate(data: Object = null): Object[] {
        let bodyString = JSON.stringify(data);
        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // to determine the Content-Type header
        let consumes: string[] = [
            'application/x-www-form-urlencoded', 
            'application/json'
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (Bearer) required
        if (localStorage.getItem('id_token')) {
            headers.set('Authorization', 'Bearer '+localStorage.getItem('id_token'));
        }
        
        let requestOptions: RequestOptionsArgs = new RequestOptions({
            headers: headers,
            search: queryParameters
        });

        let object: Object[] = [];
        object.push(bodyString);
        object.push(requestOptions);

        return object;
    }
}