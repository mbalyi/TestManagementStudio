import { Component, ElementRef, ViewChild } from '@angular/core';
import { TestExecution, Category } from './../../api/index';

import { FakeAdminServer } from './../admin/fake.admin.server';

import { CategoryService } from './../../services/category.service';
import { TestService } from './../../services/test.service';
import { ResultService } from './../../services/result.service';
import { NotificationActions } from './../../actions/notification.actions';

@Component({
    selector: 'tms-my-categories',
    template: require('./my.categories.component.html')
})
export class MyCategoriesComponent {
    @ViewChild('chartcontainer') elementView: ElementRef;

    private fakeAdmin: FakeAdminServer = new FakeAdminServer();
    private myCategories: Category[] = [];
    private myTests: TestExecution[] = [];
    private selectedCategory: Category = null;
    private selectedTest: TestExecution = null;
    private options: any;
    private results: Object[];

    constructor(private categoryService: CategoryService, private notificationAction: NotificationActions,
        private testService: TestService, private resultService: ResultService) {}

    ngOnInit() {
        //TO DO: get my categories, get test results by category id, get test result by id
        this.getCategory();
        this.renderChart();
    }

    getCategory() {
        // //TO DO: get categories
        // this.categoryService.getMyCategories().subscribe(
        //     data => {
        //         this.myCategories = data;
        //         this.selectedCategory = this.myCategories[0];
        //         this.getTestsByCategoryId(this.myCategories[0].id);
        //     },
        //     err => this.notificationAction.setNotification(false, 'Request failed.', err.json().toString())
        // );
        this.myCategories = this.fakeAdmin.getCategories();
        this.selectedCategory = this.myCategories[0];
        this.getTestsByCategoryId(this.selectedCategory.id);
    }

    getTestsByCategoryId(id: number) {
        // //TO DO: get test executions by category id
        // this.testService.getByCategoryId(id).subscribe(
        //     data => {
        //         this.myTests = data;
        //         this.selectedTest = this.myTests[0];
        //     },
        //     err => this.notificationAction.setNotification(false, 'Request failed.', err.json().toString())
        // );
        this.myTests = this.fakeAdmin.getExecutions();
        this.selectedTest = this.myTests[0];
    }

    selectCategory(event) {
        this.selectedCategory = event;
        this.getTestsByCategoryId(this.selectedCategory.id);
    }

    selectTest(event) {
        this.selectedTest = event;
        //this.renderChart();
    }

    renderChart() {
        let r = this.resultService.getResults(this.selectedTest);

        this.results = [
            {name: 'Number of Questions', pont: r[0]},
            {name: 'Correct answers', pont: r[1]},
            {name: 'Wrong answers', pont: r[2]},
            {name: 'Skipped answers', pont: r[3]}
        ];
        this.options = {
           chart: {
                type: 'pie',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                width: this.elementView.nativeElement.offsetWidth,
                height: this.elementView.nativeElement.offsetWidth/2
           },
           title: {
                text: this.selectedTest.test.text
            },
           series: [{
                name: this.selectedTest.test.text,
                colorByPoint: true,
                data: []
            }]
       };

       if (r[0] == r[1]) {
           this.options.series[0].data = [{ name: 'Correct', y: 100 }];
       } else if (r[0] == r[2]) {
           this.options.series[0].data = [{ name: 'Wrong', y: 100 }];
       } else if (r[0] == r[3]) {
           this.options.series[0].data = [{ name: 'Skipped', y: 100 }];
       } else {
           this.options.series[0].data = [
                {
                    name: 'Correct',
                    y: r[1] / r[0] * 100,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Wrong',
                    y: r[2] / r[1] * 100
                }, {
                    name: 'Missing',
                    y: r[3] / r[1] * 100
                }];
       }
    }
}
