import { AppActions } from '../app.actions';
import { ExecutionAction, ExecutionActions } from './../actions/execution.actions';
import { IPayloadAction } from './utils/payload-action';
import { Message } from 'primeng/primeng';

import { TestExecution, Answer } from './../api/index';

const INITIAL_STATE: TestExecution = {
  id: null,
  test: null,
  answersGiven: [],
  dateOfStart: null,
  dateOfFill: null
};

export function executionReducer( state: TestExecution = INITIAL_STATE, action: ExecutionAction = null): TestExecution {
    if (!action) return state;

    switch (action.type) {
        case ExecutionActions.SET_EXECUTION:
            state = action.execution;
            return state;
        case ExecutionActions.SET_UPDATE_ANSWERS:
            //let isIn = false;
            for (let i = 0; i < state.test.questions.length; i++) {
                for (let j = 0; j < state.test.questions[i].answersAll.length; j++) {
                    if (state.test.questions[i].answersAll[j].id == action.answer.id) {
                        for ( let k = 0; k < state.test.questions[i].answersAll.length; k++) {
                            if (state.answersGiven.indexOf(state.test.questions[i].answersAll[k]) > -1)
                                state.answersGiven.splice(state.answersGiven.indexOf(state.test.questions[i].answersAll[k]),1);
                        }
                        break;
                    }
                }
            }
            state.answersGiven.push(action.answer);
            // for (let i = 0; i < state.answersGiven.length; i++) {
            //     if (state.answersGiven[i].id == action.answer.id) {
            //         isIn = true;
            //         state.answersGiven[i] = action.answer;
            //     }
            // }
            // if (!isIn) {
            //     state.answersGiven.push(action.answer);
            // }
            return state;
        case ExecutionActions.SET_CLOSE_EXECUTION:
            state.dateOfFill = action.closeDate;
            return state;
        default: return state;
    }
}
