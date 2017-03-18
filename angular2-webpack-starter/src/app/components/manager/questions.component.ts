import { Component } from '@angular/core';
import { DropdownModule, SelectItem } from 'primeng/primeng';

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

    constructor(private questionService: QuestionService, private categoryService: CategoryService) {
        //TO DO: get categories from server
        //categoryService.getAll().subscribe((data) => this.categories = data);
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
            this.questionService.getByCategoryId(this.selectedCategoryItem.id).subscribe(
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
        this.question = question;
    }

    addNewQuestion(question: Question) {
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
        this.questions.splice(this.questions.indexOf(question),1);
    }
}
