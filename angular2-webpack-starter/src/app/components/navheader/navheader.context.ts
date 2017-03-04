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

    public headers: NavHeaderContext[] = [this.home, this.users, this.admin, this.subjects];
}