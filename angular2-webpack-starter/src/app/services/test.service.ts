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
import { Test, TestExecution, Question, Answer } from './../api/index';

@Injectable()
export class TestService extends RequestService {
    
    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }

    getAll(): Observable<Test[]> {
        const path = this.basePath + `/test`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    getByCategoryId(id: number): Observable<TestExecution[]> {
        const path = this.basePath + `/testexecution/category/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    save(test: Test): Observable<Test> {
        const path = this.basePath + `/test`;
        let object: Object[] = this.createParamsForSaveUpdate(test);

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    update(test: Test): Observable<Test> {
        const path = this.basePath + `/test`;
        let object: Object[] = this.createParamsForSaveUpdate(test);

        return this.http.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    delete(test: Test): Observable<{}> {
        const path = this.basePath + `/test`;
        let object: Object[] = this.createParamsForSaveUpdate(test);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getExecutionByTestId(id: number): Observable<TestExecution> {
        const path = this.basePath + `/testexecution/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    getAllExecutions(): Observable<TestExecution[]> {
        const path = this.basePath + `/executions`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    updateAnswer(id: number, answer: Answer): Observable<Answer> {
        const path = this.basePath + `/test/answer/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate(answer);

        return this.http.put(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    close(id: number, date: Date): Observable<TestExecution> {
        const path = this.basePath + `/testexecution/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate({'date': date});

        return this.http.post(path, object[0].toString(), object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getQuestionsOfTest(id: number): Observable<Question[]> {
        const path = this.basePath + `/tests/`+id.toString()+`/questions`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getExecutableTest(): Observable<Test[]> {
        const path = this.basePath + `/test/executable`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }

    getNextTest(): Observable<Test[]> {
        const path = this.basePath + `/test/next`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json();
            }
        });
    }
}