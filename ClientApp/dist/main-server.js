(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(2);
	var core_1 = __webpack_require__(3);
	var angular2_universal_1 = __webpack_require__(4);
	var app_module_1 = __webpack_require__(5);
	core_1.enableProdMode();
	var platform = angular2_universal_1.platformNodeDynamic();
	function default_1(params) {
	    return new Promise(function (resolve, reject) {
	        var requestZone = Zone.current.fork({
	            name: 'angular-universal request',
	            properties: {
	                baseUrl: '/',
	                requestUrl: params.url,
	                originUrl: params.origin,
	                preboot: false,
	                // TODO: Render just the <app> component instead of wrapping it inside an extra HTML document
	                // Waiting on https://github.com/angular/universal/issues/347
	                document: '<!DOCTYPE html><html><head></head><body><app></app></body></html>'
	            },
	            onHandleError: function (parentZone, currentZone, targetZone, error) {
	                // If any error occurs while rendering the module, reject the whole operation
	                reject(error);
	                return true;
	            }
	        });
	        return requestZone.run(function () { return platform.serializeModule(app_module_1.AppModule); }).then(function (html) {
	            resolve({ html: html });
	        }, reject);
	    });
	}
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = default_1;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal-polyfills");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("zone.js");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("angular2-universal");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var forms_1 = __webpack_require__(6);
	var router_1 = __webpack_require__(7);
	var angular2_universal_1 = __webpack_require__(4);
	var app_component_1 = __webpack_require__(8);
	var navmenu_component_1 = __webpack_require__(13);
	var home_component_1 = __webpack_require__(17);
	var fetchdata_component_1 = __webpack_require__(19);
	var counter_component_1 = __webpack_require__(22);
	var navheader_component_1 = __webpack_require__(24);
	var users_component_1 = __webpack_require__(26);
	var login_component_1 = __webpack_require__(28);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    return AppModule;
	}());
	AppModule = __decorate([
	    core_1.NgModule({
	        bootstrap: [app_component_1.AppComponent],
	        declarations: [
	            app_component_1.AppComponent,
	            navmenu_component_1.NavMenuComponent,
	            counter_component_1.CounterComponent,
	            fetchdata_component_1.FetchDataComponent,
	            home_component_1.HomeComponent,
	            navheader_component_1.NavHeaderComponent,
	            users_component_1.UsersComponent,
	            login_component_1.LoginComponent
	        ],
	        imports: [
	            angular2_universal_1.UniversalModule,
	            forms_1.FormsModule,
	            router_1.RouterModule.forRoot([
	                { path: '', redirectTo: 'home', pathMatch: 'full' },
	                { path: 'home', component: home_component_1.HomeComponent },
	                { path: 'login', component: login_component_1.LoginComponent },
	                { path: 'counter', component: counter_component_1.CounterComponent },
	                { path: 'fetch-data', component: fetchdata_component_1.FetchDataComponent },
	                { path: 'users-data', component: users_component_1.UsersComponent },
	                { path: '**', redirectTo: 'home' }
	            ])
	        ]
	    })
	], AppModule);
	exports.AppModule = AppModule;


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("@angular/forms");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("@angular/router");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    return AppComponent;
	}());
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app',
	        template: __webpack_require__(9),
	        styles: [__webpack_require__(10)]
	    })
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div class='container-fluid'>\r\n    <div class='row'>\r\n        <navheader></navheader>\r\n        <nav-menu></nav-menu>\r\n        <div class='col-lg-8 body-content'>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n</div>"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(11);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "html {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\napp {\r\n        width: 100%;\r\n        height: 100%;\r\n        }\r\n\r\nnav-menu {\r\n    height:100%;\r\n}\r\n\r\ndiv.row {\r\n    height:100%;\r\n}\r\n\r\ndiv.container-fluid {\r\n    height: 100%;\r\n}", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var NavMenuComponent = (function () {
	    function NavMenuComponent() {
	    }
	    return NavMenuComponent;
	}());
	NavMenuComponent = __decorate([
	    core_1.Component({
	        selector: 'nav-menu',
	        template: __webpack_require__(14),
	        styles: [__webpack_require__(15)]
	    })
	], NavMenuComponent);
	exports.NavMenuComponent = NavMenuComponent;


/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-lg-2 navbar-inverse\">\r\n    <div><a href=\"#\">Side menus</a></div>\r\n    <div><a href=\"#\">Link</a></div>\r\n    <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">Another options</div>\r\n        <div class=\"panel-body\">\r\n            Panel content\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(16);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "div.col-lg-2 {\r\n    height:100%;\r\n}\r\n\r\n.sidenav {\r\n      padding-top: 20px;\r\n      background-color: #f1f1f1;\r\n      height: 100%;\r\n    }", ""]);
	
	// exports


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    return HomeComponent;
	}());
	HomeComponent = __decorate([
	    core_1.Component({
	        selector: 'home',
	        template: __webpack_require__(18)
	    })
	], HomeComponent);
	exports.HomeComponent = HomeComponent;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<div class=\"col-md-12\">\r\n    <h1>Welcome</h1>\r\n\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n            Place for Angular2 carousal\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            Place for slides.\r\n            .\r\n            .\r\n            .\r\n            .\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">Panel heading without title</div>\r\n            <div class=\"panel-body\">\r\n                Panel content\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">Panel heading without title</div>\r\n            <div class=\"panel-body\">\r\n                Panel content\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n        <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading\">Panel heading without title</div>\r\n            <div class=\"panel-body\">\r\n                Panel content\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(20);
	var FetchDataComponent = (function () {
	    function FetchDataComponent(http) {
	        var _this = this;
	        http.get('/api/SampleData/WeatherForecasts').subscribe(function (result) {
	            _this.forecasts = result.json();
	        });
	    }
	    return FetchDataComponent;
	}());
	FetchDataComponent = __decorate([
	    core_1.Component({
	        selector: 'fetchdata',
	        template: __webpack_require__(21)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], FetchDataComponent);
	exports.FetchDataComponent = FetchDataComponent;


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("@angular/http");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<h1>Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table' *ngIf=\"forecasts\">\r\n    <thead>\r\n        <tr>\r\n            <th>Date</th>\r\n            <th>Temp. (C)</th>\r\n            <th>Temp. (F)</th>\r\n            <th>Summary</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let forecast of forecasts\">\r\n            <td>{{ forecast.dateFormatted }}</td>\r\n            <td>{{ forecast.temperatureC }}</td>\r\n            <td>{{ forecast.temperatureF }}</td>\r\n            <td>{{ forecast.summary }}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var CounterComponent = (function () {
	    function CounterComponent() {
	        this.currentCount = 0;
	    }
	    CounterComponent.prototype.incrementCounter = function () {
	        this.currentCount++;
	    };
	    return CounterComponent;
	}());
	CounterComponent = __decorate([
	    core_1.Component({
	        selector: 'counter',
	        template: __webpack_require__(23)
	    })
	], CounterComponent);
	exports.CounterComponent = CounterComponent;


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "<h2>Counter</h2>\r\n\r\n<p>This is a simple example of an Angular 2 component.</p>\r\n\r\n<p>Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var core_1 = __webpack_require__(3);
	var navheader_context_1 = __webpack_require__(32);
	var NavHeaderComponent = (function () {
	    function NavHeaderComponent() {
	    }
	    NavHeaderComponent.prototype.ngOnInit = function () {
	        this.headers = new navheader_context_1.NavHeaders();
	    };
	    return NavHeaderComponent;
	}());
	NavHeaderComponent = __decorate([
	    core_1.Component({
	        selector: 'navheader',
	        template: __webpack_require__(25),
	        styles: [__webpack_require__(33)]
	    })
	], NavHeaderComponent);
	exports.NavHeaderComponent = NavHeaderComponent;


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "<div class=\"main-nav-header\">\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                    <span class='sr-only'>Toggle navigation</span>\r\n                    <span class='icon-bar'></span>\r\n                    <span class='icon-bar'></span>\r\n                    <span class='icon-bar'></span>\r\n                </button>\r\n                <a class='navbar-brand' [routerLink]=\"['/home']\">TestManagementStudio</a>\r\n            </div>\r\n            <ul class='nav navbar-nav'>\r\n                <li *ngFor=\"let link of headers.headers\" [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"[link.url]\">\r\n                        <span [class]=\"link.icon\"></span> {{link.name}}\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Login\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(20);
	var UsersComponent = (function () {
	    function UsersComponent(http) {
	        var _this = this;
	        this.users = [];
	        this.name = null;
	        http.get('/api/userscontroller/users').subscribe(function (result) {
	            _this.users = result.json();
	        });
	    }
	    return UsersComponent;
	}());
	UsersComponent = __decorate([
	    core_1.Component({
	        selector: 'users',
	        template: __webpack_require__(27)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], UsersComponent);
	exports.UsersComponent = UsersComponent;


/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<h1>User Details :</h1>\r\n\r\n<p *ngIf=\"!users\"><em>Loading User Details please Wait ! ...</em></p>\r\n\r\n<table class='table' style=\"background-color:#FFFFFF; border:2px #6D7B8D; padding:5px;width:90%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"users\">\r\n\r\n    <tr style=\"height: 30px; background-color:#336699 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n        <td width=\"100\" align=\"center\">User Id</td>\r\n        <td width=\"240\" align=\"center\">Nickname</td>\r\n        <td width=\"240\" align=\"center\">Lastname</td>\r\n        <td width=\"120\" align=\"center\">Firstname</td>\r\n        <td width=\"60\" align=\"center\">Role Id</td>\r\n\r\n    </tr>\r\n    <tbody *ngFor=\"let user of users\">\r\n        <tr>\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.userId}}</span>\r\n            </td>\r\n\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.nickname}}</span>\r\n            </td>\r\n\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.lastname}}</span>\r\n            </td>\r\n\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.firstname}}</span>\r\n            </td>\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.roleId}}</span>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table> "

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var http_1 = __webpack_require__(20);
	__webpack_require__(29);
	var LoginComponent = (function () {
	    function LoginComponent(http) {
	        this.user = { UserId: null, Nickname: "", Password: "", Lastname: "", Firstname: "", Email: "", Address: "", Phone: "", RoleId: null };
	        this.errorMsg = '';
	        this.confirmPassword = null;
	        this.loginEnable = true;
	        this.rememberme = false;
	        this.http = http;
	    }
	    LoginComponent.prototype.showLoginForm = function () {
	        this.loginEnable = true;
	    };
	    LoginComponent.prototype.showRegisterForm = function () {
	        this.loginEnable = false;
	    };
	    LoginComponent.prototype.login = function () {
	        var _this = this;
	        var body = JSON.stringify(this.user);
	        var headers = new http_1.Headers();
	        headers.append('Content-Type', 'application/json');
	        this.http.post('api/accountcontroller/login', body, { headers: headers })
	            .map(function (res) { return res.json(); })
	            .subscribe(function (err) { return _this.errorMsg; }, function () { return console.log('Authentication Complete'); });
	    };
	    LoginComponent.prototype.register = function () {
	        console.log(this.user);
	    };
	    return LoginComponent;
	}());
	LoginComponent = __decorate([
	    core_1.Component({
	        selector: 'login',
	        animations: [
	            core_1.trigger('visibilityChanged', [
	                core_1.state('true', core_1.style({ opacity: 1, transform: 'scale(1.0)' })),
	                core_1.state('false', core_1.style({ opacity: 0, transform: 'scale(0.0)' })),
	                core_1.transition('1 => 0', core_1.animate('300ms')),
	                core_1.transition('0 => 1', core_1.animate('900ms'))
	            ])
	        ],
	        template: __webpack_require__(30)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-md-offset-3\">\r\n            <div class=\"panel panel-login\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <a (click)=\"showLoginForm()\" class=\"active\" id=\"login-form-link\">Login</a>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <a (click)=\"showRegisterForm()\" id=\"register-form-link\">Register</a>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div id=\"login-form\" *ngIf=\"loginEnable\" [@visibilityChanged]=\"loginEnable\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"user.Nickname\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"user.Password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n                                <div class=\"form-group text-center\">\r\n                                    <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\" [(ngModel)]=\"rememberme\">\r\n                                    <label for=\"remember\"> Remember Me</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\r\n                                            <button type=\"submit\" (click)=\"login()\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\">Log In</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <div class=\"text-center\">\r\n                                                <a tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div id=\"register-form\" *ngIf=\"!loginEnable\" [@visibilityChanged]=\"!loginEnable\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"username\" [(ngModel)]=\"user.Nickname\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"firstname\" [(ngModel)]=\"user.Firstname\" id=\"firstname\" tabindex=\"1\" class=\"form-control\" placeholder=\"Firstname\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"lastname\" [(ngModel)]=\"user.Lastname\" id=\"lastname\" tabindex=\"1\" class=\"form-control\" placeholder=\"Lastname\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"user.Email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"user.Password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" [(ngModel)]=\"confirmPassword\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"phone\" [(ngModel)]=\"user.Phone\" id=\"phone\" tabindex=\"1\" class=\"form-control\" placeholder=\"Phone\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"address\" [(ngModel)]=\"user.Address\" id=\"address\" tabindex=\"1\" class=\"form-control\" placeholder=\"Address\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\r\n                                            <button type=\"submit\" (click)=\"register()\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\">Register Now</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	"use strict";
	var NavHeaderContext = (function () {
	    function NavHeaderContext(name, url, icon) {
	        this.name = name;
	        this.url = url;
	        this.icon = icon;
	    }
	    return NavHeaderContext;
	}());
	exports.NavHeaderContext = NavHeaderContext;
	var NavHeaders = (function () {
	    function NavHeaders() {
	        this.home = new NavHeaderContext('home', '/home', 'glyphicon glyphicon-home');
	        this.users = new NavHeaderContext('users', '/users-data', 'glyphicon glyphicon-th-list');
	        this.subjects = new NavHeaderContext('subjects', '/subjects', 'glyphicon glyphicon-book');
	        this.headers = [this.home, this.users, this.subjects];
	    }
	    return NavHeaders;
	}());
	exports.NavHeaders = NavHeaders;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(34);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "nav.navbar.navbar-inverse  {\r\n      margin-bottom: 0px;\r\n      border-radius: 0px !important;\r\n    }", ""]);
	
	// exports


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MzM2RkZjRjYTNmM2IyZGZiMGIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJ4anMvUnhcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQuY3NzPzA4YWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0Esd0JBQXNDO0FBQ3RDLHdCQUFpQjtBQUNqQixxQ0FBK0M7QUFDL0MsbURBQXlEO0FBQ3pELDJDQUE2QztBQUU3QyxzQkFBYyxFQUFFLENBQUM7QUFDakIsS0FBTSxRQUFRLEdBQUcsd0NBQW1CLEVBQUUsQ0FBQztBQUV2QyxvQkFBeUIsTUFBVztLQUNoQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtTQUMvQixJQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzthQUNsQyxJQUFJLEVBQUUsMkJBQTJCO2FBQ2pDLFVBQVUsRUFBRTtpQkFDUixPQUFPLEVBQUUsR0FBRztpQkFDWixVQUFVLEVBQUUsTUFBTSxDQUFDLEdBQUc7aUJBQ3RCLFNBQVMsRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsT0FBTyxFQUFFLEtB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M0IscUM7Ozs7OztBQ0FBLHl2TTs7Ozs7Ozs7QUNBQTtLQUtJLDBCQUFZLElBQVksRUFBRSxHQUFXLEVBQUUsSUFBWTtTQUMvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3JCLENBQUM7S0FDTCx1QkFBQztBQUFELEVBQUM7QUFWWSw2Q0FBZ0I7QUFZN0I7S0FBQTtTQUNZLFNBQUksR0FBcUIsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLDBCQUEwQixDQUFDLENBQUM7U0FDMUYsVUFBSyxHQUFxQixJQUFJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztTQUN0RyxhQUFRLEdBQXFCLElBQUksZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1NBRXhHLFlBQU8sR0FBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hGLENBQUM7S0FBRCxpQkFBQztBQUFELEVBQUM7QUFOWSxpQ0FBVTs7Ozs7Ozs7QUNYdkI7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOzs7Ozs7O0FDUEE7QUFDQTs7O0FBR0E7QUFDQSx1REFBc0QsNkJBQTZCLHdDQUF3QyxTQUFTOztBQUVwSSIsImZpbGUiOiJtYWluLXNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNjMzNkZGY0Y2EzZjNiMmRmYjBiIiwiaW1wb3J0ICdhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzJztcclxuaW1wb3J0ICd6b25lLmpzJztcclxuaW1wb3J0IHsgZW5hYmxlUHJvZE1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgcGxhdGZvcm1Ob2RlRHluYW1pYyB9IGZyb20gJ2FuZ3VsYXIyLXVuaXZlcnNhbCc7XHJcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJy4vYXBwL2FwcC5tb2R1bGUnO1xyXG5cclxuZW5hYmxlUHJvZE1vZGUoKTtcclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybU5vZGVEeW5hbWljKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zOiBhbnkpIDogUHJvbWlzZTx7IGh0bWw6IHN0cmluZywgZ2xvYmFscz86IGFueSB9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Rab25lID0gWm9uZS5jdXJyZW50LmZvcmsoe1xyXG4gICAgICAgICAgICBuYW1lOiAnYW5ndWxhci11bml2ZXJzYWwgcmVxdWVzdCcsXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgICAgIGJhc2VVcmw6ICcvJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmw6IHBhcmFtcy51cmwsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW5Vcmw6IHBhcmFtcy5vcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBwcmVib290OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlbmRlciBqdXN0IHRoZSA8YXBwPiBjb21wb25lbnQgaW5zdGVhZCBvZiB3cmFwcGluZyBpdCBpbnNpZGUgYW4gZXh0cmEgSFRNTCBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgLy8gV2FpdGluZyBvbiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci91bml2ZXJzYWwvaXNzdWVzLzM0N1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQ6ICc8IURPQ1RZUEUgaHRtbD48aHRtbD48aGVhZD48L2hlYWQ+PGJvZHk+PGFwcD48L2FwcD48L2JvZHk+PC9odG1sPidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25IYW5kbGVFcnJvcjogKHBhcmVudFpvbmUsIGN1cnJlbnRab25lLCB0YXJnZXRab25lLCBlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IGVycm9yIG9jY3VycyB3aGlsZSByZW5kZXJpbmcgdGhlIG1vZHVsZSwgcmVqZWN0IHRoZSB3aG9sZSBvcGVyYXRpb25cclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVxdWVzdFpvbmUucnVuPFByb21pc2U8c3RyaW5nPj4oKCkgPT4gcGxhdGZvcm0uc2VyaWFsaXplTW9kdWxlKEFwcE1vZHVsZSkpLnRoZW4oaHRtbCA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoeyBodG1sOiBodG1sIH0pO1xyXG4gICAgICAgIH0sIHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYm9vdC1zZXJ2ZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYW5ndWxhcjItdW5pdmVyc2FsLXBvbHlmaWxsc1wiXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInpvbmUuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ6b25lLmpzXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2NvcmVcIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbmd1bGFyMi11bml2ZXJzYWxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWxcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVW5pdmVyc2FsTW9kdWxlIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgTmF2TWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmV0Y2hEYXRhQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ291bnRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2SGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVXNlcnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlcnMvdXNlcnMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnQgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBOYXZNZW51Q29tcG9uZW50LFxyXG4gICAgICAgIENvdW50ZXJDb21wb25lbnQsXHJcbiAgICAgICAgRmV0Y2hEYXRhQ29tcG9uZW50LFxyXG4gICAgICAgIEhvbWVDb21wb25lbnQsXHJcbiAgICAgICAgTmF2SGVhZGVyQ29tcG9uZW50LFxyXG4gICAgICAgIFVzZXJzQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFVuaXZlcnNhbE1vZHVsZSwgLy8gTXVzdCBiZSBmaXJzdCBpbXBvcnQuIFRoaXMgYXV0b21hdGljYWxseSBpbXBvcnRzIEJyb3dzZXJNb2R1bGUsIEh0dHBNb2R1bGUsIGFuZCBKc29ucE1vZHVsZSB0b28uXHJcbiAgICAgICAgRm9ybXNNb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvclJvb3QoW1xyXG4gICAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnaG9tZScsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2hvbWUnLCBjb21wb25lbnQ6IEhvbWVDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnbG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2NvdW50ZXInLCBjb21wb25lbnQ6IENvdW50ZXJDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnZmV0Y2gtZGF0YScsIGNvbXBvbmVudDogRmV0Y2hEYXRhQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ3VzZXJzLWRhdGEnLCBjb21wb25lbnQ6IFVzZXJzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxuYXZoZWFkZXI+PC9uYXZoZWFkZXI+XFxyXFxuICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1sZy04IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5hcHAge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxubmF2LW1lbnUge1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnJvdyB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udGFpbmVyLWZsdWlkIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMiBuYXZiYXItaW52ZXJzZVxcXCI+XFxyXFxuICAgIDxkaXY+PGEgaHJlZj1cXFwiI1xcXCI+U2lkZSBtZW51czwvYT48L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBocmVmPVxcXCIjXFxcIj5MaW5rPC9hPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkFub3RoZXIgb3B0aW9uczwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgUGFuZWwgY29udGVudFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jb2wtbGctMiB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZW5hdiB7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxoMT5XZWxjb21lPC9oMT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBQbGFjZSBmb3IgQW5ndWxhcjIgY2Fyb3VzYWxcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgUGxhY2UgZm9yIHNsaWRlcy5cXHJcXG4gICAgICAgICAgICAuXFxyXFxuICAgICAgICAgICAgLlxcclxcbiAgICAgICAgICAgIC5cXHJcXG4gICAgICAgICAgICAuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYW5lbCBjb250ZW50XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYW5lbCBjb250ZW50XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYW5lbCBjb250ZW50XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xyXG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZIZWFkZXJzIH0gZnJvbSAnLi9uYXZoZWFkZXIuY29udGV4dCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2aGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdmhlYWRlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZoZWFkZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgaGVhZGVyczogTmF2SGVhZGVycztcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgTmF2SGVhZGVycygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcIm1haW4tbmF2LWhlYWRlclxcXCI+XFxyXFxuICAgIDxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItaW52ZXJzZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWRcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdmJhci1oZWFkZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J25hdmJhci10b2dnbGUnIGRhdGEtdG9nZ2xlPSdjb2xsYXBzZScgZGF0YS10YXJnZXQ9Jy5uYXZiYXItY29sbGFwc2UnPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9J25hdmJhci1icmFuZCcgW3JvdXRlckxpbmtdPVxcXCJbJy9ob21lJ11cXFwiPlRlc3RNYW5hZ2VtZW50U3R1ZGlvPC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz0nbmF2IG5hdmJhci1uYXYnPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVxcXCJsZXQgbGluayBvZiBoZWFkZXJzLmhlYWRlcnNcXFwiIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiW2xpbmsudXJsXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2NsYXNzXT1cXFwibGluay5pY29uXFxcIj48L3NwYW4+IHt7bGluay5uYW1lfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwibmF2IG5hdmJhci1uYXYgbmF2YmFyLXJpZ2h0XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGxpIFtyb3V0ZXJMaW5rQWN0aXZlXT1cXFwiWydsaW5rLWFjdGl2ZSddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cXFwiWycvbG9naW4nXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tbG9nLWluXFxcIj48L3NwYW4+IExvZ2luXFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxyXFxuICAgICAgICAgICAgICAgIDwvbGk+XFxyXFxuICAgICAgICAgICAgPC91bD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L25hdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd1c2VycycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi91c2Vycy5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXNlcnNDb21wb25lbnQgeyAgIFxyXG4gICAgcHVibGljIHVzZXJzOiBVc2Vyc1tdID0gW107XHJcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwKSB7XHJcbiAgICAgICAgaHR0cC5nZXQoJy9hcGkvdXNlcnNjb250cm9sbGVyL3VzZXJzJykuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcnMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlcnMgeyAgIFxyXG4gICAgdXNlcklkOiBudW1iZXI7XHJcbiAgICBuaWNrbmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdG5hbWU6IHN0cmluZztcclxuICAgIGZpcnN0bmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBob25lOiBzdHJpbmc7XHJcbiAgICBhZGRyZXNzOiBzdHJpbmc7XHJcbn0gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPlVzZXIgRGV0YWlscyA6PC9oMT5cXHJcXG5cXHJcXG48cCAqbmdJZj1cXFwiIXVzZXJzXFxcIj48ZW0+TG9hZGluZyBVc2VyIERldGFpbHMgcGxlYXNlIFdhaXQgISAuLi48L2VtPjwvcD5cXHJcXG5cXHJcXG48dGFibGUgY2xhc3M9J3RhYmxlJyBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBib3JkZXI6MnB4ICM2RDdCOEQ7IHBhZGRpbmc6NXB4O3dpZHRoOjkwJTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIiBjZWxscGFkZGluZz1cXFwiMlxcXCIgY2VsbHNwYWNpbmc9XFxcIjJcXFwiICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+XFxyXFxuXFxyXFxuICAgIDx0ciBzdHlsZT1cXFwiaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY2OTkgOyBjb2xvcjojRkZGRkZGIDtib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3O1xcXCI+XFxyXFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjEwMFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+VXNlciBJZDwvdGQ+XFxyXFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjI0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+Tmlja25hbWU8L3RkPlxcclxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIyNDBcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPkxhc3RuYW1lPC90ZD5cXHJcXG4gICAgICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5GaXJzdG5hbWU8L3RkPlxcclxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCI2MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+Um9sZSBJZDwvdGQ+XFxyXFxuXFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCB1c2VyIG9mIHVzZXJzXFxcIj5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiM5RjAwMEZcXFwiPnt7dXNlci51c2VySWR9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcblxcclxcbiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwiYm9yZGVyOiBzb2xpZCAxcHggIzY1OUVDNzsgcGFkZGluZzogNXB4O3RhYmxlLWxheW91dDpmaXhlZDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzlGMDAwRlxcXCI+e3t1c2VyLm5pY2tuYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiM5RjAwMEZcXFwiPnt7dXNlci5sYXN0bmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJjZW50ZXJcXFwiIHN0eWxlPVxcXCJib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3OyBwYWRkaW5nOiA1cHg7dGFibGUtbGF5b3V0OmZpeGVkO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojOUYwMDBGXFxcIj57e3VzZXIuZmlyc3RuYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiM5RjAwMEZcXFwiPnt7dXNlci5yb2xlSWR9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPiBcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzLm1vZGVsJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZWQnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCd0cnVlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxLjApJyB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdmYWxzZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC4wKScgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBhbmltYXRlKCczMDBtcycpKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignMCA9PiAxJywgYW5pbWF0ZSgnOTAwbXMnKSlcclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cDtcclxuXHJcbiAgICBwcml2YXRlIHVzZXI6IFVzZXJzID0geyBVc2VySWQ6IG51bGwsIE5pY2tuYW1lOiBcIlwiLCBQYXNzd29yZDogXCJcIiwgTGFzdG5hbWU6IFwiXCIsIEZpcnN0bmFtZTogXCJcIiwgRW1haWw6IFwiXCIsIEFkZHJlc3M6IFwiXCIsIFBob25lOiBcIlwiLCBSb2xlSWQ6IG51bGwgfTtcclxuICAgIHByaXZhdGUgZXJyb3JNc2c6IFN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBjb25maXJtUGFzc3dvcmQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxvZ2luRW5hYmxlOiBCb29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgcmVtZW1iZXJtZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2dpbkZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkVuYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JlZ2lzdGVyRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRW5hYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXIpO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwLnBvc3QoJ2FwaS9hY2NvdW50Y29udHJvbGxlci9sb2dpbicsIGJvZHksIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZXJyID0+IHRoaXMuZXJyb3JNc2csXHJcbiAgICAgICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnQXV0aGVudGljYXRpb24gQ29tcGxldGUnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC8qLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICB9KSovO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcik7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJ4anMvUnhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyeGpzL1J4XCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLW1kLTYgY29sLW1kLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1sb2dpblxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wteHMtNlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XFxcInNob3dMb2dpbkZvcm0oKVxcXCIgY2xhc3M9XFxcImFjdGl2ZVxcXCIgaWQ9XFxcImxvZ2luLWZvcm0tbGlua1xcXCI+TG9naW48L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93UmVnaXN0ZXJGb3JtKClcXFwiIGlkPVxcXCJyZWdpc3Rlci1mb3JtLWxpbmtcXFwiPlJlZ2lzdGVyPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aHI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwibG9naW4tZm9ybVxcXCIgKm5nSWY9XFxcImxvZ2luRW5hYmxlXFxcIiBbQHZpc2liaWxpdHlDaGFuZ2VkXT1cXFwibG9naW5FbmFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLk5pY2tuYW1lXFxcIiB0YWJpbmRleD1cXFwiMVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVzZXJuYW1lXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5QYXNzd29yZFxcXCIgdGFiaW5kZXg9XFxcIjJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXAgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgdGFiaW5kZXg9XFxcIjNcXFwiIGNsYXNzPVxcXCJcXFwiIG5hbWU9XFxcInJlbWVtYmVyXFxcIiBpZD1cXFwicmVtZW1iZXJcXFwiIFsobmdNb2RlbCldPVxcXCJyZW1lbWJlcm1lXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVxcXCJyZW1lbWJlclxcXCI+IFJlbWVtYmVyIE1lPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLXNtLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJsb2dpbigpXFxcIiBuYW1lPVxcXCJsb2dpbi1zdWJtaXRcXFwiIGlkPVxcXCJsb2dpbi1zdWJtaXRcXFwiIHRhYmluZGV4PVxcXCI0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJ0biBidG4tbG9naW5cXFwiPkxvZyBJbjwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YWJpbmRleD1cXFwiNVxcXCIgY2xhc3M9XFxcImZvcmdvdC1wYXNzd29yZFxcXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwicmVnaXN0ZXItZm9ybVxcXCIgKm5nSWY9XFxcIiFsb2dpbkVuYWJsZVxcXCIgW0B2aXNpYmlsaXR5Q2hhbmdlZF09XFxcIiFsb2dpbkVuYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwidXNlcm5hbWVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLk5pY2tuYW1lXFxcIiBpZD1cXFwidXNlcm5hbWVcXFwiIHRhYmluZGV4PVxcXCIxXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiVXNlcm5hbWVcXFwiIHZhbHVlPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiZmlyc3RuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5GaXJzdG5hbWVcXFwiIGlkPVxcXCJmaXJzdG5hbWVcXFwiIHRhYmluZGV4PVxcXCIxXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRmlyc3RuYW1lXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImxhc3RuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5MYXN0bmFtZVxcXCIgaWQ9XFxcImxhc3RuYW1lXFxcIiB0YWJpbmRleD1cXFwiMVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkxhc3RuYW1lXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImVtYWlsXFxcIiBuYW1lPVxcXCJlbWFpbFxcXCIgaWQ9XFxcImVtYWlsXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5FbWFpbFxcXCIgdGFiaW5kZXg9XFxcIjFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbWFpbCBBZGRyZXNzXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInBhc3N3b3JkXFxcIiBuYW1lPVxcXCJwYXNzd29yZFxcXCIgaWQ9XFxcInBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5QYXNzd29yZFxcXCIgdGFiaW5kZXg9XFxcIjJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYXNzd29yZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwiY29uZmlybS1wYXNzd29yZFxcXCIgaWQ9XFxcImNvbmZpcm0tcGFzc3dvcmRcXFwiIFsobmdNb2RlbCldPVxcXCJjb25maXJtUGFzc3dvcmRcXFwiIHRhYmluZGV4PVxcXCIyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQ29uZmlybSBQYXNzd29yZFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJwaG9uZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuUGhvbmVcXFwiIGlkPVxcXCJwaG9uZVxcXCIgdGFiaW5kZXg9XFxcIjFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJQaG9uZVxcXCIgdmFsdWU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJhZGRyZXNzXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5BZGRyZXNzXFxcIiBpZD1cXFwiYWRkcmVzc1xcXCIgdGFiaW5kZXg9XFxcIjFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJBZGRyZXNzXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXNtLTYgY29sLXNtLW9mZnNldC0zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIiAoY2xpY2spPVxcXCJyZWdpc3RlcigpXFxcIiBuYW1lPVxcXCJyZWdpc3Rlci1zdWJtaXRcXFwiIGlkPVxcXCJyZWdpc3Rlci1zdWJtaXRcXFwiIHRhYmluZGV4PVxcXCI0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sIGJ0biBidG4tcmVnaXN0ZXJcXFwiPlJlZ2lzdGVyIE5vdzwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgY2xhc3MgTmF2SGVhZGVyQ29udGV4dCB7XHJcbiAgICBwdWJsaWMgbmFtZTogU3RyaW5nO1xyXG4gICAgcHVibGljIHVybDogU3RyaW5nO1xyXG4gICAgcHVibGljIGljb246IFN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBpY29uOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xyXG4gICAgICAgIHRoaXMuaWNvbiA9IGljb247XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZIZWFkZXJzIHtcclxuICAgIHByaXZhdGUgaG9tZTogTmF2SGVhZGVyQ29udGV4dCA9IG5ldyBOYXZIZWFkZXJDb250ZXh0KCdob21lJywgJy9ob21lJywnZ2x5cGhpY29uIGdseXBoaWNvbi1ob21lJyk7XHJcbiAgICBwcml2YXRlIHVzZXJzOiBOYXZIZWFkZXJDb250ZXh0ID0gbmV3IE5hdkhlYWRlckNvbnRleHQoJ3VzZXJzJywgJy91c2Vycy1kYXRhJywgJ2dseXBoaWNvbiBnbHlwaGljb24tdGgtbGlzdCcpO1xyXG4gICAgcHJpdmF0ZSBzdWJqZWN0czogTmF2SGVhZGVyQ29udGV4dCA9IG5ldyBOYXZIZWFkZXJDb250ZXh0KCdzdWJqZWN0cycsICcvc3ViamVjdHMnLCAnZ2x5cGhpY29uIGdseXBoaWNvbi1ib29rJyk7XHJcblxyXG4gICAgcHVibGljIGhlYWRlcnM6IE5hdkhlYWRlckNvbnRleHRbXSA9IFt0aGlzLmhvbWUsIHRoaXMudXNlcnMsIHRoaXMuc3ViamVjdHNdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29udGV4dC50cyIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25hdmhlYWRlci5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwibmF2Lm5hdmJhci5uYXZiYXItaW52ZXJzZSAge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcXHJcXG4gICAgfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==