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
import { Test, TestExecution, Question, Answer, TestSet } from './../api/index';

@Injectable()
export class TestService extends RequestService {
    
    constructor (protected authHttp: AuthHttp, protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        super(authHttp, http, basePath, configuration);
    }

    getAll(): Observable<Test[]> {
        const path = this.basePath + `tests`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getTestsByCategory(id: number): Observable<Test[]> {
        const path = this.basePath + `tests/?category=`+id;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getTest(id: any): Observable<Test> {
        const path = this.basePath + `tests/`+id;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    save(test: Test): Observable<Test> {
        const path = this.basePath + `tests`;
        let object: Object[] = this.createParamsForSaveUpdate(test);

        return this.http.post(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    update(test: Test): Observable<Test> {
        const path = this.basePath + `tests/`+test.id;
        let object: Object[] = this.createParamsForSaveUpdate(test);

        return this.http.put(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    delete(test: Test): Observable<{}> {
        const path = this.basePath + `tests/`+test.id;
        let object: Object[] = this.createParamsForSaveUpdate(test);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getTestSetsByTest(id: number): Observable<TestSet[]> {
        const path = this.basePath + `tests`+id+`/test-sets`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.request(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    saveTestSet(id: number, testSet: TestSet): Observable<TestSet> {
        const path = this.basePath + `testSets`;
        let object: Object[] = this.createParamsForSaveUpdate(testSet);

        return this.http.post(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    updateTestSet(id: number, testSet: TestSet): Observable<Test> {
        const path = this.basePath + `testSets/`+testSet.id;
        let object: Object[] = this.createParamsForSaveUpdate(testSet);

        return this.http.put(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    deleteTestSet(id: number, testSet: TestSet): Observable<{}> {
        const path = this.basePath + `tests/`+id+`/test-sets/`+testSet.id;
        let object: Object[] = this.createParamsForSaveUpdate(testSet);

        return this.http.delete(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getQuestionsByTestId(id: number): Observable<Question[]> {
        const path = this.basePath + `tests/`+id.toString()+`/questions`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json().data;
                }
            });
    }

    getExecutionByTestId(id: number, userid: number): Observable<TestExecution[]> {
        const path = this.basePath + `executions/?test=`+id.toString()+`&user=`+userid;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json().data;
                }
            });
    }

    getExecution(id: number): Observable<TestExecution> {
        const path = this.basePath + `executions/`+id;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json().data;
                }
            });
    }

    getExecutionsByCategory(userid: number, id: number): Observable<TestExecution[]> {
        const path = this.basePath + `executions/?category=`+id+`&user=`+userid;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                let exes = response.json().data;
                let result = [];
                for (let i = 0; i < exes.length; i++) {
                    if (exes[i].dateOfFill != null) {
                        result.push(exes[i]);
                    }
                }
                return result;
            }
        });
    }

    getAllExecutions(): Observable<TestExecution[]> {
        const path = this.basePath + `executions`;
        let object: Object[] = this.createParamsForSaveUpdate();

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                let exes = response.json().data;
                let result = [];
                for (let i = 0; i < exes.length; i++) {
                    if (exes[i].dateOfFill != null)
                        result.push(exes[i]);
                }
                return result;
            }
        });
    }

    updateExecution(execution: TestExecution): Observable<TestExecution> {
        const path = this.basePath + `executions/`+execution.id;
        let object: Object[] = this.createParamsForSaveUpdate(execution);

        return this.http.put(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    updateAnswer(id: number, answer: Answer): Observable<Answer> {
        const path = this.basePath + `tests/answer/`+id.toString();
        let object: Object[] = this.createParamsForSaveUpdate(answer);

        return this.http.put(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    close(execution: TestExecution): Observable<TestExecution> {
        const path = this.basePath + `executions/`+execution.id;
        let object: Object[] = this.createParamsForSaveUpdate(execution);

        return this.http.put(path, object[0], object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                return response.json().data;
            }
        });
    }

    getQuestionsOfTest(test: any): Observable<Question[]> {
        const path = this.basePath + `tests/`+test.id==null?test:test.id;
        let object: Object[] = this.createParamsForSaveUpdate();
        
        return this.http.get(path, object[1]).map((response: Response) => {
            debugger
            if (response.status === 204) {
                return undefined;
            } else {
                let test = response.json().data;
                debugger
                return test.questions;
            }
        });
    }

    getExecutableTest(userid: number, date: Date): Observable<TestExecution[]> {
        const path = this.basePath + `executions/?user=`+userid;
        let object: Object[] = this.createParamsForSaveUpdate();

        let start = new Date (date.toLocaleString().split(",")[0]+", 00:00:00");
        let end = new Date (date.toLocaleString().split(",")[0]+", 23:59:59");

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                let exes = response.json().data;
                let result = [];
                for (let i = 0; i < exes.length; i++) {
                    let cd = new Date(exes[i].dueDate);
                    exes[i].dueDate = new Date(exes[i].dueDate);
                    if (cd > start && cd < end && exes[i].dateOfFill == null)
                        result.push(exes[i]);
                }
                return result;
            }
        });
    }

    getNextTest(userid: number, date: Date): Observable<Test[]> {
        const path = this.basePath + `executions/?user=`+userid;
        let object: Object[] = this.createParamsForSaveUpdate();

        let end = new Date (date.toLocaleString().split(",")[0]+", 23:59:59");

        return this.http.get(path, object[1]).map((response: Response) => {
            if (response.status === 204) {
                return undefined;
            } else {
                let exes = response.json().data;
                let result = [];
                for (let i = 0; i < exes.length; i++) {
                    exes[i].dueDate = new Date(exes[i].dueDate);
                    if (new Date(exes[i].dueDate) > end)
                        result.push(exes[i]);
                }
                return result;
            }
        });
    }
}