import { Component, Input, ElementRef, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { Test } from './../api/index';
import { ShareService } from './../services/share.service';
import { NotificationActions } from './../actions/notification.actions';

@Component({
    selector: 'tms-test-draggable',
    template: `
        <div [class]="class" (click)="openTest()">
            <span>{{test.text}}</span> 
            <span>
                <button type="button" class="btn btn-link" (click)="deleteTest()">
                    <span class="glyphicon glyphicon-trash"></span>
                </button>
            </span>
            <span>
                <button type="button" class="btn btn-link" pTooltip="Create Share Link" tooltipPosition="bottom" (click)="createShareLink($event)">
                    <span class="glyphicon glyphicon-link"></span>
                </button>
            </span>
        </div>
    `
})
export class TestDraggableWidget {
    private isOpened: boolean = false;
    private class: string = 'row';
    private shareUrl: string = null;

    @Input() test: Test = { id: null, text: ''};

    @Output() open = new EventEmitter<Test>();
    @Output() delete = new EventEmitter<Test>();

    @Input()  set selected(selected: boolean) {
        this.class = selected ? 'row selected-test' : 'row';
    }

    constructor(element: ElementRef, private share: ShareService,
        private msg: NotificationActions ) {
    }

    openTest() {
        this.open.emit(this.test);
        this.isOpened = !this.isOpened;
    }

    deleteTest() {
        this.delete.emit(this.test);
    }

    createShareLink(event) {
        this.shareUrl = this.share.createLink(this.test);
        this.msg.setNotification(null, 'Share Link Generated.', this.shareUrl);
    }
}
