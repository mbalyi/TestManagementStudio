import { Component } from '@angular/core';
import { DropdownModule, SelectItem } from 'primeng/primeng';

import { QuestionService } from './../../services/question.service';
import { CategoryService } from './../../services/category.service';
import { TestService } from './../../services/test.service';

import { NotificationActions } from './../../actions/notification.actions';

import { FakeAdminServer } from './../admin/fake.admin.server';

import { Category, Question, Test, User } from './../../api/index';

import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'tms-test-manager',
    template: require('./test.manager.component.html')
})

export class TestManagerComponent {
    @select(['currentuser']) readonly user$: Observable<User>;
    private user: User;

    private addBtnActive: boolean = true;
    private readonlyForm: boolean = true;
    private questions: Question[] = [];
    private question: Question = null;
    private filteredQuestions: Question[] = [];
    private selectedCategory: Category = null;
    private categories: Category[] = [];
    private categoryItems: SelectItem[] = [];
    private isNew: boolean = true;
    private displayDialog: boolean = false;

    private selectedTest: Test = null;
    private tests: Test[] = [];
    private filteredTests: Test[] = [];
    private date: Date = null;
    private schedule: Date = null;
    private owner: string = '';

    private selectedCategoryItem: any;
    
    private selectedQuestions: Question[] = [];
    private draggedQuestion: Question;

    private moveFrom: string = '';

    constructor(private questionService: QuestionService, private categoryService: CategoryService, 
        private testService: TestService, private msgAction: NotificationActions) {}

    ngOnInit() {
        this.user$.subscribe((s) => this.user = s );

        this.selectedCategory = null;
        this.selectedQuestions = [];
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
        this.date = new Date();
        //TO DO: get categories from server
        this.categoryService.getAll().subscribe(
            (data) => {
                this.categories = data;
                this.categoryItems.push({label: 'All Categories', value: { id: 0, name: 'All Categories' } });
                for(let i = 0; i < this.categories.length; i++) {
                    this.categoryItems.push({label: this.categories[i].name, value: { id: this.categories[i].id, name: this.categories[i].name } });
                }
                this.changeCategory();
            },
            err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
        );
    }

    changeCategory() {
        //TO DO: get questions, tests from server
        if ( this.selectedCategoryItem == null || this.selectedCategoryItem.id == 0) {
            this.questionService.getAll().subscribe(
                (data) => {
                    this.questions = data;
                    this.showPuller();
                },
                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
            );
            this.testService.getAll().subscribe(
                (data) => {
                    this.tests = data;
                    this.showPuller();
                },
                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
            );
        } else {
            this.selectedCategory = this.categoryService.getByCategoryId(this.selectedCategoryItem.id).subscribe(
                (data) => this.selectedCategory = data,
                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
            );
            this.questionService.getQuestionsByCategory(this.selectedCategoryItem.id).subscribe(
                (data) => {
                    this.questions = data;
                    this.showPuller();
                },
                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
            );
            this.testService.getTestsByCategory(this.selectedCategoryItem.id).subscribe(
                (data) => {
                    this.tests = data;
                    this.showPuller();
                },
                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
            );
        }
    }

    showPuller() {
        this.filteredQuestions = [];
        this.filteredTests = [];
        if ( this.questions != null && this.questions.length > 0)
            this.questions.forEach((x) => {
                    this.filteredQuestions.push(Object.assign({}, x));
                });
        if ( this.tests != null && this.tests.length > 0)
            this.tests.forEach((x) => {
                    this.filteredTests.push(Object.assign({}, x));
                });
        this.resetForm();
    }

    addTest() {
        this.addBtnActive = !this.addBtnActive;
        this.readonlyForm = false;
        this.filteredQuestions = [];
        this.questions.forEach((x) => {
                this.filteredQuestions.push(Object.assign({}, x));
            });
        this.selectedQuestions = [];
        this.owner = this.user.firstName+' '+this.user.lastName;
        this.schedule = null;
        this.selectedTest = { id: null, text: "", questions: [], owner: null, createdAt: new Date(), description: "", testSets: [] };
    }

    dragStart(event,question: Question) {
        this.draggedQuestion = question;
        this.moveFrom = event.currentTarget.parentElement.className;
    }
    
    drop(event) {
        if(this.draggedQuestion && this.moveFrom.indexOf('selectedQuestions') == -1) {
            this.selectedQuestions.push(this.draggedQuestion);
            this.filteredQuestions.splice(this.filteredQuestions.indexOf(this.draggedQuestion), 1);
        } else if(this.draggedQuestion && this.moveFrom.indexOf('selectedQuestions') > -1) {
            this.selectedQuestions.splice(this.selectedQuestions.indexOf(this.draggedQuestion), 1);
            this.selectedQuestions.push(this.draggedQuestion);
        }
    }

    deleteQuestion(event) {
        if(this.draggedQuestion && this.moveFrom.indexOf('selectedQuestions') > -1) {
            if (this.selectedQuestions.indexOf(this.draggedQuestion) > -1)
                this.selectedQuestions.splice(this.selectedQuestions.indexOf(this.draggedQuestion), 1);
            this.filteredQuestions.push(this.draggedQuestion);
        }
    }
    
    dragEnd(event) {
        this.draggedQuestion = null;
    }

    getQuestionIndex(questions: Question[], id: number): number {
        let index = null;
        for (let i = 0; i < questions.length; i++) {
            if (questions[i].id == id) {
                index = i;
                break;
            }
        }
        return index;
    }

    openTest(event) {
        this.readonlyForm = true;
        this.selectedTest = Object.assign({}, event);
        this.selectedTest.createdAt = new Date(this.selectedTest.createdAt);
        if(this.selectedTest.testSets.length > 0) 
            this.schedule = new Date(this.selectedTest.testSets[0].dueDate);
        else
            this.schedule = null;

        if (event.questions != null) {
            this.selectedQuestions = [];
            this.selectedTest.questions.forEach((x) => {
                this.selectedQuestions.push(Object.assign({}, x));
            });
            this.filteredQuestions = [];
            this.questions.forEach((x) => {
                this.filteredQuestions.push(Object.assign({}, x));
            });
            for (let i = 0; i < this.selectedTest.questions.length; i++) { 
                this.filteredQuestions.splice(this.getQuestionIndex(this.filteredQuestions,this.selectedTest.questions[i].id),1); 
            } 
        }
        if (this.selectedTest.owner && this.selectedTest.owner.firstName)
            this.owner = this.selectedTest.owner.firstName+' '+this.selectedTest.owner.lastName;
        else 
            this.owner = '';
    }

    saveScheduled() {
        let defsched = this.selectedTest.testSets;
        if (this.selectedTest.id && this.schedule != null) {
            let testSet = {id: null, dueDate: this.schedule};
            this.testService.saveTestSet(this.selectedTest.id, testSet).subscribe(
                testset => {
                    if (testset) {
                        this.selectedTest.testSets = [testset];
                        this.testService.update(this.selectedTest).subscribe(
                            data => {
                                for (let i = 0; i < this.filteredTests.length; i++) {
                                    if (this.filteredTests[i].id == this.selectedTest.id) {
                                        this.filteredTests[i] = Object.assign({}, this.selectedTest);
                                        break;
                                    }
                                }
                                this.testService.getTestsByCategory(this.selectedCategoryItem.id).subscribe(
                                    (data) => {
                                        let tests = data;
                                        let affectedTests = [];
                                        if (defsched.length > 0) {
                                            for (let i = 0; i < tests.length; i++) {
                                                if (tests[i].testSets.length > 0 && tests[i].testSets[0].id == defsched[0].id) {
                                                    affectedTests.push(tests[i]);
                                                }
                                            }
                                            for (let i = 0; i < affectedTests.length; i++) {
                                                this.testService.deleteSchedule(affectedTests[i]).subscribe(
                                                    data => {},
                                                    err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                                                );
                                            }
                                        }
                                        this.categoryService.getByCategoryId(this.selectedCategory.id).subscribe(
                                            category => {
                                                let cat = category;
                                                for (let i = 0; i < cat.users.length; i++) {
                                                    let e = {id: null, test: this.selectedTest.id, user: cat.users[i].id,
                                                        name: this.selectedTest.text, category: this.selectedCategory.id,
                                                        answersGiven: [], dueDate: new Date(this.schedule),
                                                        dateOfStart: null, dateOfFill: null};
                                                    this.testService.createExecution(e).subscribe(
                                                        data => {},
                                                        err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                                                    );
                                                }
                                            },
                                            err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                                        )
                                    },
                                    err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                                );
                                this.msgAction.setNotification(true, 'Request successfull.', 'New schedule date stored.');
                            },
                            err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                        );
                    }
                    else
                        this.msgAction.setNotification(false, 'Request failed.', 'Can not store the date.');
                },
                err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
            );
        }
    }

    getTestSet() {
        this.testService.getTestSetsByTest(this.selectedTest.id).subscribe(
            testsets => {
                if (testsets[0] && testsets[0].dueDate)
                    this.schedule = testsets[0].dueDate;
                else
                    this.schedule = null;
            },
            err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
        )
    }

    editTest() {
        this.readonlyForm = false;
    }

    deleteTest(event) {
        //TO DO delete test
        this.testService.delete(event).subscribe(
            (data) => {
                this.resetForm();
                this.filteredTests.splice(this.filteredTests.indexOf(event),1);
                this.msgAction.setNotification(true, 'Test deleted.', event.text);
                
            },
            err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
        )
    }

    cancel() {
        if (this.selectedTest == null || this.selectedTest.id == null) {
            this.resetForm();
        }
        else {
            for (let i = 0; i < this.tests.length; i++) {
                if (this.selectedTest.id == this.tests[i].id) {
                    this.openTest(Object.assign({}, this.tests[i]));
                    break;
                }
            }
        }
    }

    saveTest() {
        if (this.selectedTest.text == '' || this.selectedTest.text == null) {
            this.msgAction.setNotification(false, 'Title is missing!', 'Type the title of the new test.');
        } else if (this.selectedQuestions == null || this.selectedQuestions.length == 0) {
            this.msgAction.setNotification(false, 'Non question was selected!', 'Select questions.');
        } else { 
            if (this.selectedTest != null && this.selectedTest.id != null) {
                //TO DO update existing test
                this.selectedTest.questions = Object.assign([], this.selectedQuestions);
                this.selectedTest.createdAt = new Date(this.selectedTest.createdAt);
                this.testService.update(this.selectedTest).subscribe(
                    data => {
                        for (let i = 0; i < this.filteredTests.length; i++) {
                            if (this.filteredTests[i].id == this.selectedTest.id) {
                                this.filteredTests[i] = Object.assign({}, this.selectedTest);
                                break;
                            }
                        }
                        this.msgAction.setNotification(true, 'Test updated.', this.selectedTest.text);
                        this.saveScheduled();
                    },
                    err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                );
            } else {
                //TO DO save new test
                let own = this.user;
                let cat = this.selectedCategory == null || this.selectedCategory.id == 0 ? null : this.selectedCategory.id;
                
                let test = { id: null, text: this.selectedTest.text, questions: this.selectedQuestions, 
                    owner: own, category: cat, createdAt: new Date(this.selectedTest.createdAt), description: this.selectedTest.description, testSets: [] };
                this.testService.save(test).subscribe(
                    data => {
                            this.filteredTests.push(data);
                            this.msgAction.setNotification(true, 'Test stored.', this.selectedTest.text);
                            this.openTest(data);
                    },
                    err => this.msgAction.setNotification(false, 'Request failed.', err.toString())
                );
            }
            this.addBtnActive = true;
            this.readonlyForm = true;
        }
    }

    resetForm() {
        this.addBtnActive = true;
        this.readonlyForm = true;
        this.filteredQuestions = [];
        this.questions.forEach((x) => {
            this.filteredQuestions.push(Object.assign({}, x));
        });
        this.selectedTest = { id: null, text: "", questions: [], owner: null, createdAt: new Date(), description: "", testSets: [] };
        this.owner = '';
        this.schedule = null;
        this.selectedQuestions = [];
    }

    openQuestion(event) {
        this.question = event;
        this.displayDialog = true;
    }
}