import { Users } from "./../../models/users.model";
import { Roles } from "./../../models/roles.model";
import { User, Group, Role, 
    Category, Question, Answer, 
    Test, TestSet, TestExecution } from './../../api/index';

export class FakeAdminServer {

    private users: User[] = [
        {"id": 1, "email": "admin@tms2.com", "password": null, "firstName": "admin", "lastName": "admin", "roles": null, "permissions": null},
        {"id": 2, "email": "admin@tms2.com", "password": null, "firstName": "kacsa", "lastName": "admin", "roles": null, "permissions": null},
        {"id": 3, "email": "admin@tms2.com", "password": null, "firstName": "manag", "lastName": "admin", "roles": null, "permissions": null},
        {"id": 4, "email": "admin@tms2.com", "password": null, "firstName": "cicac", "lastName": "admin", "roles": null, "permissions": null},
        {"id": 5, "email": "markb", "password": null, "lastName": "Ma", "firstName": "min", "roles": null, "permissions": null},
        {"id": 6, "email": "userx", "password": null, "lastName": "XX", "firstName": "min", "roles": null, "permissions": null},
        {"id": 7, "email": "usery", "password": null, "lastName": "YY", "firstName": "min", "roles": null, "permissions": null},
        {"id": 8, "email": "userz", "password": null, "lastName": "ZZ", "firstName": "min", "roles": null, "permissions": null}
    ];

    private roles: Roles[] = [
        {"roleid": 1, name: "administrator", "isadmin": true, "ismanager": false, "isreporter": false, "isuser": false },
        {'roleid': 2, name: "manager", isadmin: false, ismanager: true, isreporter: false, isuser: false },
        {'roleid': 3, name: "reporter", isadmin: false, ismanager: false, isreporter: true, isuser: false },
        {'roleid': 4, name: "user", isadmin: false, ismanager: false, isreporter: false, isuser: true }
    ];

    private groups: Group[] = [
        { id: 1, 'name': "admin", "isPrivate": true, "creator": null, "members": null},
        { id: 2, 'name': "manager", "isPrivate": true, "creator": null, "members": null},
        { id: 3, 'name': "developer", "isPrivate": true, "creator": null, "members": null}
    ];

    private categories: Category[] = [
        { id: 1, name: "Basics of Programing", parent: null, childrens: null, questions: null, tests: null },
        { id: 2, name: "Analitich", parent: null, childrens: null, questions: null, tests: null },
        { id: 3, name: "Automatic Systems", parent: null, childrens: null, questions: null, tests: null },
        { id: 4, name: "Gazdhuman ize", parent: null, childrens: null, questions: null, tests: null }
    ];

    private questions: Question[] = [
        { id: 1, text: "What do you eat for breakfast?", answersAll: null, categories: null },
        { id: 2, text: "What do you eat for lunch?", answersAll: null, categories: null },
        { id: 3, text: "Are you a good programmer?", answersAll: null, categories: null },
        { id: 4, text: "What can I do for you?", answersAll: null, categories: null }
    ];

    private answers: Answer[] = [
        { id: 1, text: "Nothing.", correct: true },
        { id: 2, text: "Everything.", correct: false },
        { id: 3, text: "Ravens", correct: true },
        { id: 4, text: "No.", correct: false },
        { id: 5, text: "I don't think so.", correct: false },
        { id: 6, text: "You have to tell me.", correct: true },
        { id: 7, text: "Nothing.", correct: false },
        { id: 8, text: "Give me your money!", correct: true }
    ];

    private tests: Test[] = [
        { id: 1, text: "First programer test", questions: null, owner: null, category: null },
        { id: 2, text: "Second programer test", questions: null, owner: null, category: null },
        { id: 3, text: "Exam", questions: null, owner: null, category: null },
        { id: 4, text: "Test", questions: null, owner: null, category: null }
    ];

    private testSets: TestSet[] = [
        {id: 1, dueDate: new Date()},
        {id: 2, dueDate: new Date()},
        {id: 3, dueDate: new Date()},
        {id: 4, dueDate: new Date()},
    ];

    private testSet: TestSet = null;

    private execution: TestExecution = {id: 1, test: null, answersGiven: [], dateOfStart: new Date(), dateOfFill: null};

    constructor() {
        this.groups[0].members = [this.users[0],this.users[1]];
        this.groups[1].members = [this.users[3],this.users[4]];
        this.groups[2].members = [this.users[5],this.users[6]];

        this.questions[0].answersAll = [this.answers[0],this.answers[1]];
        this.questions[1].answersAll = [this.answers[1],this.answers[2]];
        this.questions[2].answersAll = [this.answers[3],this.answers[4],this.answers[5]];
        this.questions[3].answersAll = [this.answers[6],this.answers[7]];

        this.tests[0].questions = [this.questions[1],this.questions[3]];
        this.tests[0].category = this.categories[0];
        this.tests[0].testSets = [this.testSets[0]];
        this.tests[1].questions = [this.questions[1],this.questions[3],this.questions[0]];
        this.tests[1].category = this.categories[0];
        this.tests[1].testSets = [this.testSets[1]];
        this.tests[2].questions = [this.questions[0],this.questions[2]];
        this.tests[2].category = this.categories[0];
        this.tests[2].testSets = [this.testSets[2]];
        this.tests[3].questions = [this.questions[2],this.questions[3]];
        this.tests[3].category = this.categories[0];
        this.tests[3].testSets = [this.testSets[3]];

        this.categories[0].questions = [this.questions[1],this.questions[3],this.questions[0]];
        this.categories[0].tests = [this.tests[0],this.tests[2]];

        this.execution.test = this.tests[1];
        this.execution.dateOfStart = new Date();
    }

    getUsers(): Users[] {
        return this.users;
    }

    getUsersByRole(id: number = 0): Users[] {
        let roleUser: Users[] = [];

        

        return roleUser;
    }

    getGroups(): Group[] {
        return this.groups;
    }

    getRoles(): Roles[] {
        return this.roles;
    }

    getCategories(): Category[] {
        return this.categories;
    }

    getCategoryById(id: number): Category {
        for(let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id == id)
                return this.categories[i];
        }
        return null;
    }

    getQuestions(): Question[] {
        return this.questions;
    }

    getQuestionsByCatId(id: number): Question[] {
        for(let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id == id)
                return this.categories[i].questions;
        }
        return this.questions;
    }

    getTest(): Test[] {
        return this.tests;
    }

    getTestByCatId(id: number): Test[] {
        let selectedTest: Test[] = [];
        for(let i = 0; i < this.tests.length; i++) {
            if (this.tests[i].category.id == id)
                selectedTest.push(this.tests[i]);
        }
        return selectedTest;
    }

    getTestSetsToday(): Test[] {
        let test = [];
        for (let i = 0; i < this.tests.length; i++) {
            if ( this.tests[i].testSets.length > 0) {
                for(let j = 0; j < this.tests[i].testSets.length; j++) {
                    if (this.tests[i].testSets[j].dueDate <= new Date()) {
                        this.testSet = this.tests[i].testSets[j];
                        let t = this.tests[i];
                        t.testSets = [this.testSet];
                        test.push(t);
                    }
                }
            }
        }
        return test;
    }

    getTestSetsOther(): Test[] {
        let test = [];
        for (let i = 0; i < this.tests.length; i++) {
            if ( this.tests[i].testSets.length > 0) {
                for(let j = 0; j < this.tests[i].testSets.length; j++) {
                    if (this.tests[i].testSets[j].dueDate > new Date())
                        this.testSet = this.tests[i].testSets[j];
                        let t = this.tests[i];
                        t.testSets = [this.testSet];
                        test.push(t);
                }
            }
        }
        return test;
    }

    getTestByTestSetId(id: number): TestExecution {
        return null;
    }

    getExecution(): TestExecution {
        return this.execution;
    }

    getExecutions(): TestExecution[] {
        return [this.execution];
    }
}