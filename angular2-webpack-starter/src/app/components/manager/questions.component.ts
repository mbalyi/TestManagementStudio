import { Component } from '@angular/core';
import { DropdownModule, SelectItem } from 'primeng/primeng';

import { NotificationActions } from './../../actions/notification.actions';
import { QuestionService } from './../../services/question.service';
import { CategoryService } from './../../services/category.service';

import { FakeAdminServer } from './../admin/fake.admin.server';

import { Category, Question, Answer } from './../../api/index';

@Component({
    selector: 'tms-questions',
    template: require('./questions.component.html')
})
export class QuestionsComponent {
    private questions: Question[] = [];
    private question: Question = null;
    private filteredQuestions: Question[] = [];
    private selectedCategory: Category = null;
    private categories: Category[] = [];
    private categoryItems: SelectItem[] = [];
    private search: string = '';
    private displayDialog: boolean = false;
    private isNew: boolean = true;

    private selectedCategoryItem: any;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    constructor(private questionService: QuestionService, private categoryService: CategoryService,
        private notificationAction: NotificationActions) {}
    
    ngOnInit() {
        //TO DO: get categories from server
        // this.categoryService.getAll().subscribe(
        //     (data) => this.categories = data,
        //     err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        // );

        this.categories = this.fakeBackend.getCategories();
        this.categoryItems.push({label: 'All Categories', value: { id: 0, name: 'All Categories' } });
        for(let i = 0; i < this.categories.length; i++) {
            this.categoryItems.push({label: this.categories[i].name, value: { id: this.categories[i].id, name: this.categories[i].name } });
        }
        this.changeCategory();
        this.selectedCategory = null;
    }

    changeCategory() {
        //TO DO: get questions from server
        /*if ( this.selectedCategoryItem.id == 0) {
            this.questionService.getAll().subscribe(
                (data) => this.questions = data
            );
        } else {
            this.categoryService.getQuestionsByCategory(this.selectedCategoryItem.id).subscribe(
                (data) => this.questions = data
            );
        }*/
        
        this.questions = this.fakeBackend.getQuestions();
        this.selectedCategory = null;

        if (this.selectedCategoryItem != null && this.selectedCategoryItem.id != 0) {
            this.questions = this.fakeBackend.getQuestionsByCatId(this.selectedCategoryItem.id);
            this.selectedCategory = this.fakeBackend.getCategoryById(this.selectedCategoryItem.id);
        }
        
        this.search = '';
        this.showQuestionPuller();
    }

    showQuestionPuller() {
        this.filteredQuestions = this.questions;
    }

    find() {
        this.filteredQuestions= [];
        for (let i = 0; i < this.questions.length; i++) {
            if( this.questions[i].text.indexOf(this.search) > -1 ) {
                this.filteredQuestions.push(this.questions[i]);
            }
        }
    }

    addQuestion() {
        this.displayDialog = true;
        this.isNew = true;
        this.question = { id: null, text: "", answersAll: null, categories: null };
    }

    editQuestion(question: Question) {
        this.displayDialog = true;
        this.isNew = false;
        this.question = Object.assign({}, question);
    }

    getIndexOfQuestion(question: Question) {
        for (let i = 0; i < this.questions.length; i++) {
            if (this.questions[i].id == question.id) {
                return i;
            }
        }
        return null;
    }

    addNewQuestion(question: Question) {
        // //TO DO: save/update questions
        // if (this.isNew) {
        //     this.questionService.update(question).subscribe(
        //         q => {
        //             let id = this.getIndexOfQuestion(q);
        //             if (id) {
        //                 this.notificationAction.setNotification(true, 'Question updated.', 'Question successfully updated.');
        //                 this.displayDialog = false;
        //             } else {
        //                 this.notificationAction.setNotification(false, 'Request failed.', 'Can not update the Question.')
        //             }
        //         },
        //         err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        //     );
        // } else {
        //     this.questionService.save(question).subscribe(
        //         q => {
        //             this.questions.push(q);
        //             this.notificationAction.setNotification(true, 'Question stored.', 'Question successfully saved.');
        //             this.displayDialog = false;
        //         },
        //         err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        //     )
        // }
        if (this.isNew)
            this.questions.push(question);
        else
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].id == question.id) {
                    this.questions[i] = question;
                    break;
                }
            }
    }

    deleteQuestion(question: Question) {
        // // TO DO: delete question
        // this.questionService.delete(question).subscribe(
        //     (data) => {
        //         this.questions.splice(this.questions.indexOf(question),1);
        //         this.notificationAction.setNotification(true, 'Question deleted.', 'Question successfully deleted.');
        //         this.displayDialog = false;
        //     },
        //     err => this.notificationAction.setNotification(false, 'Request failed.', err.toString())
        // );
        this.questions.splice(this.questions.indexOf(question),1);
    }
}
