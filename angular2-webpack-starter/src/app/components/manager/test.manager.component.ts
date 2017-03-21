import { Component } from '@angular/core';
import { DropdownModule, SelectItem, Message } from 'primeng/primeng';

import { QuestionService } from './../../services/question.service';
import { CategoryService } from './../../services/category.service';
import { TestService } from './../../services/test.service';

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
    private owner: string = '';

    private selectedCategoryItem: any;
    
    private selectedQuestions: Question[] = [];
    private draggedQuestion: Question;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    private moveFrom: string = '';

    private msgs: Message[] = [];

    constructor(private questionService: QuestionService, private categoryService: CategoryService, private testService: TestService) {
        //TO DO: get categories from server
        //categoryService.getAll().subscribe((data) => this.categories = data);
        this.categories = this.fakeBackend.getCategories();
        this.categoryItems.push({label: 'All Categories', value: { id: 0, name: 'All Categories' } });
        for(let i = 0; i < this.categories.length; i++) {
            this.categoryItems.push({label: this.categories[i].name, value: { id: this.categories[i].id, name: this.categories[i].name } });
        }
        this.changeCategory();
        this.selectedCategory = null;
        this.selectedQuestions = [];
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
        this.date = new Date();
    }

    ngOnInit() {
        this.user$.subscribe((s) => this.user = s );
    }

    changeCategory() {
        // //TO DO: get questions, tests from server
        // if ( this.selectedCategoryItem.id == 0) {
        //     this.questionService.getAll().subscribe(
        //         (data) => this.questions = data
        //     );
        //     this.testService.getAll().subscribe(
        //         (data) => this.tests = data
        //     );
        // } else {
        //     this.questionService.getByCategoryId(this.selectedCategoryItem.id).subscribe(
        //         (data) => this.questions = data
        //     );
        //     this.testService.getByCategoryId(this.selectedCategoryItem.id).subscribe(
        //         (data) => this.tests = data
        //     );
        // }
        
        this.questions = this.fakeBackend.getQuestions();
        this.tests = this.fakeBackend.getTest();
        this.selectedCategory = null;
        if (this.selectedCategoryItem != null && this.selectedCategoryItem.id != 0) {
            this.questions = this.fakeBackend.getQuestionsByCatId(this.selectedCategoryItem.id);
            this.tests = this.fakeBackend.getTestByCatId(this.selectedCategoryItem.id);
            this.selectedCategory = this.fakeBackend.getCategoryById(this.selectedCategoryItem.id);
        }
        this.showPuller();
    }

    showPuller() {
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
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
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
        this.readonlyForm = true;
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
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
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

    openTest(event) {
        this.readonlyForm = true;
        this.selectedTest = Object.assign({}, event);
        if (event.questions != null) {
            this.selectedQuestions = [];
            event.questions.forEach((x) => {
                this.selectedQuestions.push(Object.assign({}, x));
            });
            this.filteredQuestions = [];
            this.questions.forEach((x) => {
                this.filteredQuestions.push(Object.assign({}, x));
            });
            for (let i = 0; i < event.questions.length; i++) { 
                this.filteredQuestions.splice(this.filteredQuestions.indexOf(event.questions[i]),1); 
            } 
        }
    }

    editTest() {
        this.readonlyForm = false;
    }

    deleteTest(event) {
        if (this.selectedTest = event) {
            this.resetForm();
        }
        // //TO DO delete test
        // this.testService.delete(event).subscribe(
        //     (data) => {
        //         if (data == true) {
        //             this.selectedTest = { id: null, text: "", questions: null, owner: null };
        //             this.filteredTests.splice(this.filteredTests.indexOf(event),1);
        //             this.showNotification(true, 'Test deleted.', event.text);
        //         } else {
        //             this.showNotification(false, 'Request failed.', 'Something went wrong.');
        //         }
        //     }
        // )
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
        this.filteredTests.splice(this.filteredTests.indexOf(event),1);
        this.showNotification(true, 'Test deleted.', event.text);
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
            this.showNotification(false, 'Title is missing!', 'Type the title of the new test.');
        } else if (this.selectedQuestions == null || this.selectedQuestions.length == 0) {
            this.showNotification(false, 'Non question was selected!', 'Select questions.');
        } else { 
            if (this.selectedTest != null && this.selectedTest.id != null) {
                // //TO DO update existing test
                // this.testService.update(this.selectedTest).subscribe(
                //     (data) => {
                //         if (data != null || data != '') {
                //             for (let i = 0; i < this.filteredTests.length; i++) {
                //                 if (this.filteredTests[i].id == this.selectedTest.id) {
                //                     this.filteredTests[i] = Object.assign({}, this.selectedTest);
                //                     break;
                //                 }
                //             }
                //             this.selectedTest = Object.assign({}, data);
                //             this.showNotification(true, 'Test updated.', this.selectedTest.text);
                //         } else {
                //             this.showNotification(false, 'Request failed.', 'Something went wrong.');
                //         }
                //     }
                // );
                this.selectedTest.questions = this.selectedQuestions;
                for (let i = 0; i < this.filteredTests.length; i++) {
                    if (this.filteredTests[i].id == this.selectedTest.id) {
                        this.filteredTests[i] = Object.assign({}, this.selectedTest);
                        break;
                    }
                }
            } else {
                // //TO DO save new test
                // let own = this.selectedTest == null || this.selectedTest.owner == null ? this.user : this.selectedTest.owner;
                // let cat = this.selectedCategory == null || this.selectedCategory.id == 0 ? null : this.selectedCategory;
                // let test = { id: 20, text: this.selectedTest.text, questions: this.selectedQuestions, owner: own, category: cat };
                // this.testService.save(test).subscribe(
                //     (data) => {
                //         if (data != null || data != '') {
                //             this.filteredTests.push(data);
                //             this.showNotification(true, 'Test stored.', this.selectedTest.text);
                //             this.selectedTest = Object.assign({}, data);
                //         } else {
                //             this.showNotification(false, 'Request failed.', 'Something went wrong.');
                //         }
                //     }
                // );
                let own = this.selectedTest == null || this.selectedTest.owner == null ? this.user : this.selectedTest.owner;
                let cat = this.selectedCategory == null || this.selectedCategory.id == 0 ? null : this.selectedCategory;
                this.filteredTests.push({id: 20, text: this.selectedTest.text, 
                        questions: this.selectedQuestions, owner: own,
                        category: cat
                });
            }
            this.showNotification(true, 'Test stored.', this.selectedTest.text);
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
        this.selectedQuestions = [];
        this.selectedTest = { id: null, text: "", questions: null, owner: null };
    }

    openQuestion(event) {
        this.question = event;
        this.displayDialog = true;
    }

    showNotification(success: boolean = true, msg: string = '', detail: string = '') {
        this.msgs = [];
        this.msgs.push({severity: success?'success':'error', summary: msg, detail: detail});
    }
}