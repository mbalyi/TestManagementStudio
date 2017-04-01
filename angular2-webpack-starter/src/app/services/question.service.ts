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
import { Question, Answer, Category } from './../api/index';

@Injectable()
export class QuestionService extends RequestService {
    
    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }

    getAll(): Observable<Question[]> {
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
        const path = this.basePath + `/question/`+question.id;
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
        const path = this.basePath + `/question/`+question.id;
        let object: Object[] = this.createParamsForSaveUpdate(question);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getAnswersByQuestion(id: number): Observable<Answer[]> {
        const path = this.basePath + `/question/`+id+`/answers`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    saveAnswersByQuestion(id: number, answers: Answer[]): Observable<Question> {
        const path = this.basePath + `/question/`+id+`/answers`;
        let object: Object[] = this.createParamsForSaveUpdate(answers);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getCategoriesByQuestion(id: number): Observable<Category[]> {
        const path = this.basePath + `/question/`+id+`/categories`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    saveCategoriesByQuestion(id: number, categories: Category[]): Observable<Category> {
        const path = this.basePath + `/question/`+id+`/categories`;
        let object: Object[] = this.createParamsForSaveUpdate(categories);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }
}