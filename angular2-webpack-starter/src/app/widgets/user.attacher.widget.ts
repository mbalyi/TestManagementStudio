import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { User } from './../api/index';

@Component({
    selector: 'tms-user-attacher',
    template: `
        <div class="inputField1-2">
            <p-dataTable [value]="users" scrollable="true" [rows]="10" [globalFilter]="gb" #dt>
                <p-headerColumnGroup>
                    <p-row>
                        <p-column header="Name" colspan="2"></p-column>
                        <p-column header="" [style]="{'width':'15%'}"></p-column>
                    </p-row>
                </p-headerColumnGroup>
                <p-column field="firstName" [sortable]="true"></p-column>
                <p-column field="lastName" [sortable]="true"></p-column>
                <p-column [style]="{'width':'15%'}" styleClass="col-button">
                    <template pTemplate="header">
                    </template>
                    <template let-user="rowData" pTemplate="body">
                        <button class="btn btn-primary" type="button" (click)="move('right',user)"><i class="fa fa-arrow-right"></i> </button>
                    </template>
                </p-column>
            </p-dataTable>
        </div>
        <div class="inputField1-2">
            <p-dataTable [value]="selectedUsers" scrollable="true" [rows]="10" [globalFilter]="gb" #dt>
                <p-headerColumnGroup>
                    <p-row>
                        <p-column header="" [style]="{'width':'15%'}"></p-column>
                        <p-column header="Name" colspan="2"></p-column>
                    </p-row>
                </p-headerColumnGroup>
                <p-column [style]="{'width':'15%'}" styleClass="col-button">
                    <template pTemplate="header">
                    </template>
                    <template let-user="rowData" pTemplate="body">
                        <button class="btn btn-primary" type="button" (click)="move('left',user)"><i class="fa fa-arrow-left"></i> </button>
                    </template>
                </p-column>
                <p-column field="firstName" [sortable]="true"></p-column>
                <p-column field="lastName" [sortable]="true"></p-column>
            </p-dataTable>
        </div> 
    `
})
export class UserAttacherWidget {
    @Output() result: EventEmitter<any> = new EventEmitter<any>();

    @Input() users: User[] = [];
    @Input() selectedUsers: User[] = [];

    constructor(element: ElementRef, changeDetectorRef: ChangeDetectorRef) {
    }

    move(direction: string, user: User) {
        if (direction == 'left') {
            this.users.push(user);
            this.selectedUsers.splice(this.selectedUsers.indexOf(user),1);
        } else if (direction == 'right') {
            this.selectedUsers.push(user);
            this.users.splice(this.users.indexOf(user),1);
        }
        this.result.emit({users: this.users, selectedUsers: this.selectedUsers});
    }
}
