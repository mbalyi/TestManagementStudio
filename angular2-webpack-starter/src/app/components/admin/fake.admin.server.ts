import { Users } from "./../../models/users.model";
import { Roles } from "./../../models/roles.model";
import { Group } from './../../models/Group';

export class FakeAdminServer {
    private users: Users[] = [
        {"userid": 1, "nickname": "admin", "password": null, lastname: "Ad", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 1},
        {"userid": 2, "nickname": "kacsa", "password": null, lastname: "Ka", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 2},
        {"userid": 3, "nickname": "manag", "password": null, lastname: "Ma", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 2},
        {"userid": 4, "nickname": "cicac", "password": null, lastname: "Ci", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 3},
        {"userid": 5, "nickname": "markb", "password": null, lastname: "Ma", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 3},
        {"userid": 6, "nickname": "userx", "password": null, lastname: "XX", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 4},
        {"userid": 7, "nickname": "usery", "password": null, lastname: "YY", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 4},
        {"userid": 8, "nickname": "userz", "password": null, lastname: "ZZ", firstname: "min", email: "admin@tms2.com", "phone": "00000", address: "bud", "roleid": 1},
    ];

    private roles: Roles[] = [
        {"roleid": 1, name: "administrator", "isadmin": true, "ismanager": false, "isreporter": false, "isuser": false },
        {'roleid': 2, name: "manager", isadmin: false, ismanager: true, isreporter: false, isuser: false },
        {'roleid': 3, name: "reporter", isadmin: false, ismanager: false, isreporter: true, isuser: false },
        {'roleid': 4, name: "user", isadmin: false, ismanager: false, isreporter: false, isuser: true }
    ];

    private groups: Group[] = [
        { 'name': "admin", "isPrivate": true, "creator": null, "members": null},
        { 'name': "reporter", "isPrivate": true, "creator": null, "members": null},
        { 'name': "developer", "isPrivate": true, "creator": null, "members": null}
    ];

    constructor() {}

    getUsers(): Users[] {
        return this.users;
    }

    getUsersByRole(id: number = 0): Users[] {
        let roleUser: Users[] = [];

        for(let i=0; i< this.users.length; i++) {
            if (this.users[i].roleid == id)
                roleUser.push(this.users[i]);
        }

        return roleUser;
    }

    getGroups(): Group[] {
        return this.groups;
    }

    getRoles(): Roles[] {
        return this.roles;
    }
}