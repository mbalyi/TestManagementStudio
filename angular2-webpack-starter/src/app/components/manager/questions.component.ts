import { Component } from '@angular/core';

import { DropdownModule, SelectItem } from 'primeng/primeng';

@Component({
    selector: 'tms-questions',
    template: require('./questions.component.html')
})
export class QuestionsComponent {
    categories: SelectItem[] = [];

    selectedCategory: string;

    constructor() {
        this.categories.push({label:'One', value:{id:1, name: 'One'}});
        this.categories.push({label:'Two', value:{id:2, name: 'Two'}});
    }
}
