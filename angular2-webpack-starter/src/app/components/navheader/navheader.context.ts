export class NavHeaderContext {
    public name: String;
    public url: String;
    public icon: String;
    public role: Number;

    constructor(name: string, url: string, icon: string, role: number) {
        this.name = name;
        this.url = url;
        this.icon = icon;
        this.role = role;
    }
}

export class NavHeaders {
    private home: NavHeaderContext = new NavHeaderContext('home', '/home','glyphicon glyphicon-home', 4);
    private users: NavHeaderContext = new NavHeaderContext('users', '/users-data', 'glyphicon glyphicon-th-list', 1);
    private admin: NavHeaderContext = new NavHeaderContext('admin', '/admin', 'glyphicon glyphicon-briefcase', 1);
    private subjects: NavHeaderContext = new NavHeaderContext('subjects', '/subjects', 'glyphicon glyphicon-book', 4);

    private adminUser: NavHeaderContext = new NavHeaderContext('users', '/admin', 'fa fa-user', 1);
    private adminGroup: NavHeaderContext = new NavHeaderContext('groups', '/groups', 'fa fa-group', 1);
    private adminRole: NavHeaderContext = new NavHeaderContext('roles', '/roles', 'fa fa-server', 1);

    public headers: NavHeaderContext[] = [this.home, this.users, this.admin, this.subjects];
    public adminMenu: NavHeaderContext[] = [this.adminUser, this.adminGroup, this.adminRole];
}

export type NavPage = 'home' | 'login' | 'users' | 'admin' | 'subjects';

export class NavPages {
  static home: NavPage = 'home';
  static login: NavPage = 'login';
  static users: NavPage = 'users';
  static admin: NavPage = 'admin';
  static subjects: NavPage = 'subjects';
}

export interface NavContext {
    page: NavPage;
}