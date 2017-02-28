import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }   from '@angular/http';
import { AuthApi } from "./v1/AuthApi";
import { UsersApi } from "./v1/UsersApi";



@NgModule({
    imports:      [ CommonModule, HttpModule ],
    declarations: [ ],
    exports:      [ ],
    providers:    [
        AuthApi,
        UsersApi
    ]
})
export class ApiModule {}