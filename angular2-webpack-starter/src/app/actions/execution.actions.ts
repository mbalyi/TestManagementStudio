import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './../reducers/store/app.state';

import { TestExecution, Answer } from './../api/index';

export interface ExecutionAction extends Action {
    execution: TestExecution; 
    answer: Answer;
    closeDate: Date;
}

@Injectable()
export class ExecutionActions {
  static readonly SET_EXECUTION = 'SET_EXECUTION';
  static readonly SET_UPDATE_ANSWERS = 'SET_UPDATE_ANSWERS';
  static readonly SET_CLOSE_EXECUTION = 'SET_CLOSE_EXECUTION';

  constructor(private ngRedux: NgRedux<IAppState>) {}

  setExecution(execution: TestExecution) {
    this.ngRedux.dispatch({ type: ExecutionActions.SET_EXECUTION, execution: execution });
  }

  updateAnswer(answer: Answer) {
      this.ngRedux.dispatch({ type: ExecutionActions.SET_UPDATE_ANSWERS, answer: answer });
  }

  closeExecution(closeDate: Date) {
      this.ngRedux.dispatch({ type: ExecutionActions.SET_CLOSE_EXECUTION, closeDate: closeDate });
  }
}
