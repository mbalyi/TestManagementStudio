/**
 * TestManagement Studio Backend API
 * <<Some text >>   Would respond with: ```js callbackFunction({     ... }); ``` 
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH }                                         from '../variables';
import { Configuration }                                     from '../configuration';
 
import { AuthHttp, tokenNotExpired } from 'angular2-jwt';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class AuthApi {
    protected basePath = 'http://api.onlab.iceht.eu/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    private extendObj<T1,T2>(objA: T1, objB: T2) { 
        for(let key in objB){ 
            if(objB.hasOwnProperty(key)){ 
                (objA as any)[key] = (objB as any)[key]; 
            } 
        } 
        return <T1&T2>objA; 
    } 
 
    /** 
     * Logs user into the system 
     *  
     * @param username The user name for login 
     * @param password The passworód for login in clear text 
     */ 
    public login(username?: string, password?: string, extraHttpRequestParams?: any): Observable<string> { 
        return this.loginWithHttpInfo(username, password, extraHttpRequestParams) 
            .map((response: Response) => { 
                if (response.status === 204) { 
                    return undefined; 
                } else { 
                    return response.json(); 
                } 
            }); 
    } 
 
    /** 
     * Invalidate the token of currently logged in user 
     *  
     */ 
    public logout(extraHttpRequestParams?: any): Observable<{}> { 
        return this.logoutWithHttpInfo(extraHttpRequestParams) 
            .map((response: Response) => { 
                if (response.status === 204) { 
                    return undefined; 
                } else { 
                    return response.json(); 
                } 
            }); 
    } 
 
 
    /** 
     * Logs user into the system 
     *  
     * @param username The user name for login 
     * @param password The passworód for login in clear text 
     */ 
    public loginWithHttpInfo(username?: string, password?: string, extraHttpRequestParams?: any): Observable<Response> { 
        const path = this.basePath + `/auth/login`; 
 
        let queryParameters = new URLSearchParams(); 
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845 
        let formParams = new URLSearchParams(); 
 
 
 
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
        if (this.configuration.apiKey) 
        { 
            headers.set('Authorization', this.configuration.apiKey); 
        } 
             
        headers.set('Content-Type', 'application/x-www-form-urlencoded'); 
 
 
        if (username !== undefined) { 
            formParams.set('username', <any>username);  
        } 
        if (password !== undefined) { 
            formParams.set('password', <any>password);  
        } 
 
        let requestOptions: RequestOptionsArgs = new RequestOptions({ 
            method: RequestMethod.Post, 
            headers: headers, 
            body: formParams.toString(), 
            search: queryParameters 
        }); 
         
        // https://github.com/swagger-api/swagger-codegen/issues/4037 
        if (extraHttpRequestParams) { 
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams); 
        } 
 
        return this.http.request(path, requestOptions); 
    } 
 
    /** 
     * Invalidate the token of currently logged in user 
     *  
     */ 
    public logoutWithHttpInfo(extraHttpRequestParams?: any): Observable<Response> { 
        const path = this.basePath + `/auth/logout`; 
 
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
        //if (this.configuration.apiKey) 
        //{ 
        //    headers.set('Authorization', this.configuration.apiKey); 
        //} 
 
        let requestOptions: RequestOptionsArgs = new RequestOptions({ 
            method: RequestMethod.Delete, 
            headers: headers, 
            search: queryParameters 
        }); 
         
        // https://github.com/swagger-api/swagger-codegen/issues/4037 
        if (extraHttpRequestParams) { 
            requestOptions = this.extendObj(requestOptions, extraHttpRequestParams); 
        } 
 
        return this.authHttp.request(path, requestOptions); 
    } 

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

}
