import { Component } from '@angular/core';
import { DropdownModule, SelectItem } from 'primeng/primeng';

import { QuestionService } from './../../services/question.service';
import { CategoryService } from './../../services/category.service';

import { FakeAdminServer } from './../admin/fake.admin.server';

import { Category, Question, Test } from './../../api/index';

@Component({
    selector: 'tms-test-manager',
    template: require('./test.manager.component.html')
})

export class TestManagerComponent {
    private addBtnActive: boolean = true;
    private questions: Question[] = [];
    private question: Question = null;
    private filteredQuestions: Question[] = [];
    private selectedCategory: Category = null;
    private categories: Category[] = [];
    private categoryItems: SelectItem[] = [];
    private isNew: boolean = true;

    private selectedCategoryItem: any;
    
    private selectedQuestions: Question[] = [];
    private draggedQuestion: Question;

    private fakeBackend: FakeAdminServer = new FakeAdminServer();

    private moveFrom: string = '';

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
        this.selectedQuestions = [];
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
        this.showQuestionPuller();
    }

    showQuestionPuller() {
        this.filteredQuestions = this.questions;
    }

    addTest() {
        this.addBtnActive = !this.addBtnActive;
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
        if(this.draggedQuestion) {
            if (this.selectedQuestions.indexOf(this.draggedQuestion) > -1)
                this.selectedQuestions.splice(this.selectedQuestions.indexOf(this.draggedQuestion), 1);
            this.filteredQuestions.push(this.draggedQuestion);
        }
    }
    
    dragEnd(event) {
        this.draggedQuestion = null;
    }
}