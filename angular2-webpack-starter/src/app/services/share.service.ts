import { Injectable, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Test } from './../api/index';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ShareService {
    public baseUrl = 'localhost:3000/';

    constructor( private router: Router, @Inject(DOCUMENT) private document: any ) {
        this.baseUrl = document.location.href.toString().split("#")[0];
    }

    createLink(test: Test): string {
        return this.baseUrl+'execute?p=test&id='+test.id.toString();
    }
}