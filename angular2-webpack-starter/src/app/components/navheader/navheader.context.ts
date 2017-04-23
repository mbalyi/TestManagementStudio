import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { User } from './../../api/index';

export class NavHeaderContext {
    public name: String;
    public url: String;
    public icon: String;
    public role: Number;
    public page: NavPage;

    constructor(name: string, url: string, icon: string, role: number, page: NavPage) {
        this.name = name;
        this.url = url;
        this.icon = icon;
        this.role = role;
        this.page = page;
    }
}

export class NavHeaders {
    @select(['currentuser']) readonly user$: Observable<User>;
    private user: User;

    private home: NavHeaderContext = new NavHeaderContext('home', '/home','glyphicon glyphicon-home', 4, NavPages.home);
    private users: NavHeaderContext = new NavHeaderContext('users', '/users-data', 'glyphicon glyphicon-th-list', 1, NavPages.users);
    private manager: NavHeaderContext = new NavHeaderContext('manager', '/manager', 'glyphicon glyphicon-folder-open', 1, NavPages.manager);
    private admin: NavHeaderContext = new NavHeaderContext('admin', '/admin', 'glyphicon glyphicon-briefcase', 1, NavPages.admin);
    private subjects: NavHeaderContext = new NavHeaderContext('subjects', '/subjects', 'glyphicon glyphicon-book', 4, NavPages.subjects);
    private results: NavHeaderContext = new NavHeaderContext('my results', '/my-results', 'glyphicon glyphicon-user', 4, NavPages.myResults);
    private test: NavHeaderContext = new NavHeaderContext('tests', '/test-menu', 'glyphicon glyphicon-pencil', 4, NavPages.testMenu);

    private adminUser: NavHeaderContext = new NavHeaderContext('users', '/admin', 'fa fa-user', 1, NavPages.admin);
    private adminGroup: NavHeaderContext = new NavHeaderContext('groups', '/groups', 'fa fa-group', 1, NavPages.admin);
    private adminRole: NavHeaderContext = new NavHeaderContext('roles', '/roles', 'fa fa-server', 1, NavPages.admin);

    private managerCategory: NavHeaderContext = new NavHeaderContext('category', '/manager', 'fa fa-folder-open-o', 1, NavPages.manager);
    private managerTest: NavHeaderContext = new NavHeaderContext('test', '/test-manager', 'fa fa-pencil', 1, NavPages.manager);
    private managerQuestion: NavHeaderContext = new NavHeaderContext('question', '/questions', 'fa fa-question', 1, NavPages.manager);

    private myResults: NavHeaderContext = new NavHeaderContext('my results', '/my-results', 'fa fa-user', 4, NavPages.myResults);
    private myCategories: NavHeaderContext = new NavHeaderContext('my categories', '/my-categories', 'fa fa-folder-open-o', 4, NavPages.myResults);

    public headers: NavHeaderContext[] = [this.home, this.results, this.test, this.manager, this.admin];
    public adminMenu: NavHeaderContext[] = [this.adminUser, this.adminGroup];
    public managerMenu: NavHeaderContext[] = [this.managerCategory, this.managerTest, this.managerQuestion];
    public myResultsMenu: NavHeaderContext[] = [this.myResults, this.myCategories];

    constructor() {
        this.user$.subscribe( u => this.user = u);
        
        if (this.user.roles[0].id == 1) {
            this.headers = [this.home,this.manager, this.admin];
        } else if (this.user.roles[0].id == 2) {
            this.headers = [this.home, this.manager];
        } else if (this.user.roles[0].id == 3) {
            this.headers = [this.home, this.manager];
        } else if (this.user.roles[0].id == 4) {
            this.headers = [this.home, this.results, this.test];
        } else if (this.user.roles[0].id == 5) {
            this.headers = [this.home, this.results, this.test, this.manager, this.admin];
        }
    }
}

export type NavPage = 'home' | 'login' | 'users' | 'admin' | 'subjects' | 'manager' | 'test-menu' | 'test-execution' | 'my-results' | 'test-result';

export class NavPages {
  static home: NavPage = 'home';
  static login: NavPage = 'login';
  static users: NavPage = 'users';
  static admin: NavPage = 'admin';
  static subjects: NavPage = 'subjects';
  static manager: NavPage = 'manager';
  static testMenu: NavPage = 'test-menu';
  static testExecution: NavPage = 'test-execution';
  static myResults: NavPage = 'my-results';
  static testResult: NavPage = 'test-result';
}

export interface NavContext {
    page: NavPage;
    menuItems: NavHeaderContext[];
}