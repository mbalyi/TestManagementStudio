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
import { Category, Test, Question } from './../api/index';

@Injectable()
export class CategoryService extends RequestService {
    
    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }

    getAll(): Observable<Category[]> {
        const path = this.basePath + `categories`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getByCategoryId(id: number): Observable<Category> {
        const path = this.basePath + `categories/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getMyCategories(id: number): Observable<Category[]> {
        const path = this.basePath + `categories`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    let categories = response.json().data;
                    let my = [];
                    for (let i = 0; i < categories.length; i++) {
                        for (let j = 0; j < categories[i].users.length; j++) {
                            if (categories[i].users[j].id == id) {
                                my.push(categories[i]);
                                break;
                            }
                        }
                    }
                    return my;
                }
            });
    }

    save(category: Category): Observable<Category> {
        const path = this.basePath + `categories`;
        let object: Object[] = this.createParamsForSaveUpdate(category);

        return this.http.post(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    update(category: Category): Observable<Category> {
        const path = this.basePath + `categories/`+category.id;
        let object: Object[] = this.createParamsForSaveUpdate(category);

        return this.http.put(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    delete(category: Category): Observable<{}> {
        const path = this.basePath + `categories/`+category.id;
        let object: Object[] = this.createParamsForSaveUpdate(category);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getTestsByCategory(id: number): Observable<Test[]> {
        const path = this.basePath + `categories/`+id+`/tests`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getQuestionsByCategory(id: number): Observable<Question[]> {
        const path = this.basePath + `categories/`+id+`/questions`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    addQuestionToCategory(id: number, question: Question): Observable<Question> {
        const path = this.basePath + `categories/`+id+`/questions`;
        let object: Object[] = this.createParamsForSaveUpdate(question);

        return this.http.post(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }
}