export class NavHeaderContext {
    public name: String;
    public url: String;
    public icon: String;

    constructor(name: string, url: string, icon: string) {
        this.name = name;
        this.url = url;
        this.icon = icon;
    }
}

export class NavHeaders {
    private home: NavHeaderContext = new NavHeaderContext('home', '/home','glyphicon glyphicon-home');
    private users: NavHeaderContext = new NavHeaderContext('users', '/users-data', 'glyphicon glyphicon-th-list');
    private admin: NavHeaderContext = new NavHeaderContext('admin', '/admin', 'glyphicon glyphicon-briefcase');
    private subjects: NavHeaderContext = new NavHeaderContext('subjects', '/subjects', 'glyphicon glyphicon-book');

    public headers: NavHeaderContext[] = [this.home, this.users, this.admin, this.subjects];
}