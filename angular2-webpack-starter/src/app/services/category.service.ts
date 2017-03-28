import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { BASE_PATH, COLLECTION_FORMATS } from './../api/variables';
import { Configuration } from './../api/configuration';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';

import { RequestService } from './request.service';
import { Category } from './../api/index';

@Injectable()
export class CategoryService extends RequestService {
    
    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }

    getAll(): Observable<Category[]> {
        const path = this.basePath + `/category`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.authHttp.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    getByCategoryId(id: number): Observable<Category[]> {
        const path = this.basePath + `/category/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.authHttp.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    getMyCategories(): Observable<Category[]> {
        const path = this.basePath + `/category/my/`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.authHttp.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    save(category: Category): Observable<Category> {
        const path = this.basePath + `/category`;
        let object: Object[] = this.createParamsForSaveUpdate(category);

        return this.authHttp.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    update(category: Category): Observable<Category> {
        const path = this.basePath + `/category`;
        let object: Object[] = this.createParamsForSaveUpdate(category);

        return this.authHttp.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    delete(category: Category): Observable<{}> {
        const path = this.basePath + `/category`;
        let object: Object[] = this.createParamsForSaveUpdate(category);

        return this.authHttp.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }
}