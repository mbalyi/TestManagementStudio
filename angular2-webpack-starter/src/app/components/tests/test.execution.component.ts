import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { ExecutionActions } from './../../actions/execution.actions';
import { NotificationActions } from './../../actions/notification.actions';
import { TestService } from './../../services/test.service';
import { QuestionModes } from './../../widgets/question.widget.context';

import { TestExecution, Test, Question, Answer } from './../../api/index';

@Component({
    selector: 'tms-test-execution',
    template: require('./test.execution.component.html')
})
export class TestExecutionComponent {
    @select(['execution']) readonly execution$: Observable<TestExecution>;
    private execution: TestExecution;
    private execute: QuestionModes = QuestionModes.execute;

    constructor(private executionAction: ExecutionActions, private notificationService: NotificationActions,
        private testService: TestService) {}

    ngOnInit() {
        this.execution$.subscribe( e => this.execution = e);
    }

    selectAnswer(event) {
        // //TO DO: send the request to the backend and store to reducer
        // let id = null;
        // for (let i = 0; i < this.execution.test.questions.length; i++) {
        //     for (let j = 0; j < this.execution.test.questions[i].answersAll.length; j++) {
        //         if (this.execution.test.questions[i].answersAll[j].id == event.id) {
        //            id = this.execution.test.questions[i].id;
        //            break;
        //         }
        //     }
        // }
        // this.testService.updateAnswer(id, event).subscribe(
        //     (data) => {
        //         this.executionAction.updateAnswer(event);
        //         this.notificationService.setNotification(true, 'Answer stored.', '');
        //     },
        //     err => this.notificationService.setNotification(true, 'Answer wasnt stored.', err.json().toString())
        // );
        this.executionAction.updateAnswer(event);
    }
}
