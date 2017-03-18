import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { BASE_PATH, COLLECTION_FORMATS } from './../api/variables';
import { Configuration } from './../api/configuration';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { AuthApi } from './../api/v1/AuthApi';
import { Question } from './../api/index';

@Injectable()
export class QuestionService extends AuthApi {
    
    constructor (protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(http, basePath, configuration);
    }

    getAll(): Observable<Question> {
        const path = this.basePath + `/question`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    getByCategoryId(id: number): Observable<Question> {
        const path = this.basePath + `/question/category/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    save(question: Question): Observable<Question> {
        const path = this.basePath + `/question`;
        let object: Object[] = this.createParamsForSaveUpdate(question);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    update(question: Question): Observable<Question> {
        const path = this.basePath + `/question`;
        let object: Object[] = this.createParamsForSaveUpdate(question);

        return this.http.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    delete(question: Question): Observable<{}> {
        const path = this.basePath + `/question`;
        let object: Object[] = this.createParamsForSaveUpdate(question);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    createParamsForSaveUpdate(question: Question = null): Object[] {
        let bodyString = JSON.stringify(question);
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
        if (this.configuration.apiKey) {
            headers.set('Authorization', this.configuration.apiKey);
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