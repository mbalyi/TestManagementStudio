import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { TestExecution, Question, Answer } from './../../api/index';
import { QuestionModes } from './../../widgets/question.widget.context';

import { NavPageActions } from './../../actions/navheader.actions';
import { NavPages } from './../navheader/navheader.context';
import { ResultService } from './../../services/result.service';

@Component({
    selector: 'tms-test-result',
    template: require('./test.result.component.html')
})
export class TestResultComponent {
    @select(['execution']) readonly execution$: Observable<TestExecution>;
    private execution: TestExecution;
    private results: any[] = [];
    
    constructor(private pageAction: NavPageActions, private resultService: ResultService) { 
        pageAction.setPage('test-result');
    }

    ngOnInit() {
        this.execution$.subscribe( e => { this.execution = e; });
        this.results = this.resultService.makeResultObject(this.execution);
    }
}