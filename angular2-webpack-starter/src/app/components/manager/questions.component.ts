import { Component } from '@angular/core';
import { DropdownModule, SelectItem } from 'primeng/primeng';

import { FakeAdminServer } from './../admin/fake.admin.server';

import { Category, Question, Answer } from './../../api/index';

@Component({
    selector: 'tms-questions',
    template: require('./questions.component.html')
})
export class QuestionsComponent {
    private questions: Question[] = [];
    private filteredQuestions: Question[] = []
    private categories: Category[] = [];
    private categoryItems: SelectItem[] = [];
    private search: string = '';

    private selectedCategoryItem: any;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    constructor() {
        this.categories = this.fakeBackend.getCategories();
        this.categoryItems.push({label: 'All Categories', value: { id: 0, name: 'All Categories' } });
        for(let i = 0; i < this.categories.length; i++) {
            this.categoryItems.push({label: this.categories[i].name, value: { id: this.categories[i].id, name: this.categories[i].name } });
        }
        this.changeCategory();
    }

    changeCategory() {
        if (this.selectedCategoryItem != null && this.selectedCategoryItem.id != 0)
            this.questions = this.fakeBackend.getQuestionsByCatId(this.selectedCategoryItem.id);
        else
            this.questions = this.fakeBackend.getQuestions();
        
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
}
