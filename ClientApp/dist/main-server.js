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
	var users_component_1 = __webpack_require__(29);
	var login_component_1 = __webpack_require__(31);
	var subjects_component_1 = __webpack_require__(34);
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
	            login_component_1.LoginComponent,
	            subjects_component_1.SubjectsComponent
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
	                { path: 'subjects', component: subjects_component_1.SubjectsComponent },
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
	var navheader_context_1 = __webpack_require__(25);
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
	        template: __webpack_require__(26),
	        styles: [__webpack_require__(27)]
	    })
	], NavHeaderComponent);
	exports.NavHeaderComponent = NavHeaderComponent;


/***/ },
/* 25 */
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
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"main-nav-header\">\r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\r\n                    <span class='sr-only'>Toggle navigation</span>\r\n                    <span class='icon-bar'></span>\r\n                    <span class='icon-bar'></span>\r\n                    <span class='icon-bar'></span>\r\n                </button>\r\n                <a class='navbar-brand' [routerLink]=\"['/home']\">TestManagementStudio</a>\r\n            </div>\r\n            <ul class='nav navbar-nav'>\r\n                <li *ngFor=\"let link of headers.headers\" [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"[link.url]\">\r\n                        <span [class]=\"link.icon\"></span> {{link.name}}\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li [routerLinkActive]=\"['link-active']\">\r\n                    <a [routerLink]=\"['/login']\">\r\n                        <span class=\"glyphicon glyphicon-log-in\"></span> Login\r\n                    </a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</div>\r\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(28);
	
	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, "nav.navbar.navbar-inverse  {\r\n      margin-bottom: 0px;\r\n      border-radius: 0px !important;\r\n    }", ""]);
	
	// exports


/***/ },
/* 29 */
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
	        template: __webpack_require__(30)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], UsersComponent);
	exports.UsersComponent = UsersComponent;


/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<h1>User Details :</h1>\r\n\r\n<p *ngIf=\"!users\"><em>Loading User Details please Wait ! ...</em></p>\r\n\r\n<table class='table' style=\"background-color:#FFFFFF; border:2px #6D7B8D; padding:5px;width:90%;table-layout:fixed;\" cellpadding=\"2\" cellspacing=\"2\" *ngIf=\"users\">\r\n\r\n    <tr style=\"height: 30px; background-color:#336699 ; color:#FFFFFF ;border: solid 1px #659EC7;\">\r\n        <td width=\"100\" align=\"center\">User Id</td>\r\n        <td width=\"240\" align=\"center\">Nickname</td>\r\n        <td width=\"240\" align=\"center\">Lastname</td>\r\n        <td width=\"120\" align=\"center\">Firstname</td>\r\n        <td width=\"60\" align=\"center\">Role Id</td>\r\n\r\n    </tr>\r\n    <tbody *ngFor=\"let user of users\">\r\n        <tr>\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.userId}}</span>\r\n            </td>\r\n\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.nickname}}</span>\r\n            </td>\r\n\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.lastname}}</span>\r\n            </td>\r\n\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.firstname}}</span>\r\n            </td>\r\n            <td align=\"center\" style=\"border: solid 1px #659EC7; padding: 5px;table-layout:fixed;\">\r\n                <span style=\"color:#9F000F\">{{user.roleId}}</span>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table> "

/***/ },
/* 31 */
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
	__webpack_require__(32);
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
	        var body = JSON.stringify({ "nickName": this.user.Nickname, "password": this.user.Password });
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
	        template: __webpack_require__(33)
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], LoginComponent);
	exports.LoginComponent = LoginComponent;


/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = require("rxjs/Rx");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 col-md-offset-3\">\r\n            <div class=\"panel panel-login\">\r\n                <div class=\"panel-heading\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xs-6\">\r\n                            <a (click)=\"showLoginForm()\" class=\"active\" id=\"login-form-link\">Login</a>\r\n                        </div>\r\n                        <div class=\"col-xs-6\">\r\n                            <a (click)=\"showRegisterForm()\" id=\"register-form-link\">Register</a>\r\n                        </div>\r\n                    </div>\r\n                    <hr>\r\n                </div>\r\n                <div class=\"panel-body\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div id=\"login-form\" *ngIf=\"loginEnable\" [@visibilityChanged]=\"loginEnable\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"user.Nickname\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"user.Password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n                                <div class=\"form-group text-center\">\r\n                                    <input type=\"checkbox\" tabindex=\"3\" class=\"\" name=\"remember\" id=\"remember\" [(ngModel)]=\"rememberme\">\r\n                                    <label for=\"remember\"> Remember Me</label>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\r\n                                            <button type=\"submit\" (click)=\"login()\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\">Log In</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-lg-12\">\r\n                                            <div class=\"text-center\">\r\n                                                <a tabindex=\"5\" class=\"forgot-password\">Forgot Password?</a>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div id=\"register-form\" *ngIf=\"!loginEnable\" [@visibilityChanged]=\"!loginEnable\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"username\" [(ngModel)]=\"user.Nickname\" id=\"username\" tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"firstname\" [(ngModel)]=\"user.Firstname\" id=\"firstname\" tabindex=\"1\" class=\"form-control\" placeholder=\"Firstname\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"lastname\" [(ngModel)]=\"user.Lastname\" id=\"lastname\" tabindex=\"1\" class=\"form-control\" placeholder=\"Lastname\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" name=\"email\" id=\"email\" [(ngModel)]=\"user.Email\" tabindex=\"1\" class=\"form-control\" placeholder=\"Email Address\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"user.Password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" name=\"confirm-password\" id=\"confirm-password\" [(ngModel)]=\"confirmPassword\" tabindex=\"2\" class=\"form-control\" placeholder=\"Confirm Password\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"phone\" [(ngModel)]=\"user.Phone\" id=\"phone\" tabindex=\"1\" class=\"form-control\" placeholder=\"Phone\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" name=\"address\" [(ngModel)]=\"user.Address\" id=\"address\" tabindex=\"1\" class=\"form-control\" placeholder=\"Address\" value=\"\">\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6 col-sm-offset-3\">\r\n                                            <button type=\"submit\" (click)=\"register()\" name=\"register-submit\" id=\"register-submit\" tabindex=\"4\" class=\"form-control btn btn-register\">Register Now</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },
/* 34 */
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
	var SubjectsComponent = (function () {
	    function SubjectsComponent(http) {
	        this.subjects = [];
	        this.testcases = [];
	        this.name = null;
	        this.http = http;
	    }
	    SubjectsComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.http.get('/api/subjects/subjects').subscribe(function (result) {
	            _this.subjects = result.json();
	        });
	    };
	    SubjectsComponent.prototype.show = function (subjectId) {
	        var _this = this;
	        this.http.get('/api/testcases/bysubjectid/' + subjectId.toString()).subscribe(function (result) {
	            _this.testcases = result.json();
	        });
	    };
	    return SubjectsComponent;
	}());
	SubjectsComponent = __decorate([
	    core_1.Component({
	        selector: 'tms-subjects',
	        template: "\n    <div>\n        <div *ngFor=\"let subject of subjects\">\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"show(subject.subjectId)\">{{subject.title}}</button>\n        </div>\n    </div>\n    <div>\n        <table class=\"table table-hover\">\n            <thead>\n                <tr>\n                    <th>Question</th>\n                    <th>Created Date</th>\n                    <th>Interval</th>\n                    <th>Level</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let case of testcases\">\n                    <td>{{case.question}}</td>\n                    <td>{{case.createdDate}}</td>\n                    <td>{{case.interval}}</td>\n                    <td>{{case.levelId}}</td>\n                </tr>\n            </tbody>\n            </table>\n    </div>\n    "
	    }),
	    __metadata("design:paramtypes", [http_1.Http])
	], SubjectsComponent);
	exports.SubjectsComponent = SubjectsComponent;


/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDBhNzMzODA0MmQxNTg5OGI5MTgiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Jvb3Qtc2VydmVyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ6b25lLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW5ndWxhci9mb3Jtc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL3JvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQuY3NzP2RkYzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8vLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzPzlmNjQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbmd1bGFyL2h0dHBcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb250ZXh0LnRzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbXBvbmVudC5jc3M/MDhhZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicnhqcy9SeFwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvc3ViamVjdHMvc3ViamVjdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQ3RDQSx3QkFBc0M7QUFDdEMsd0JBQWlCO0FBQ2pCLHFDQUErQztBQUMvQyxtREFBeUQ7QUFDekQsMkNBQTZDO0FBRTdDLHNCQUFjLEVBQUUsQ0FBQztBQUNqQixLQUFNLFFBQVEsR0FBRyx3Q0FBbUIsRUFBRSxDQUFDO0FBRXZDLG9CQUF5QixNQUFXO0tBQ2hDLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1NBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO2FBQ2xDLElBQUksRUFBRSwyQkFBMkI7YUFDakMsVUFBVSxFQUFFO2lCQUNSLE9BQU8sRUFBRSxHQUFHO2lCQUNaLFVBQVUs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Ozs7Ozs7Ozs7Ozs7QUNBQSxxQ0FBMEM7QUFDMUMsc0NBQXFDO0FBbUNyQyxLQUFhLGlCQUFpQjtLQU0xQiwyQkFBWSxJQUFVO1NBTGYsYUFBUSxHQUFlLEVBQUUsQ0FBQztTQUMxQixjQUFTLEdBQWdCLEVBQUUsQ0FBQztTQUM1QixTQUFJLEdBQVcsSUFBSSxDQUFDO1NBSXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ3JCLENBQUM7S0FFRCxvQ0FBUSxHQUFSO1NBQUEsaUJBSUM7U0FIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBTTthQUNwRCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQyxDQUFDLENBQUMsQ0FBQztLQUNQLENBQUM7S0FFRCxnQ0FBSSxHQUFKLFVBQUssU0FBaUI7U0FBdEIsaUJBSUM7U0FIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQU07YUFDaEYsS0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkMsQ0FBQyxDQUFDLENBQUM7S0FDUCxDQUFDO0tBQ0wsd0JBQUM7QUFBRCxFQUFDO0FBckJZLGtCQUFpQjtLQS9CN0IsZ0JBQVMsQ0FBQztTQUNQLFFBQVEsRUFBRSxjQUFjO1NBQ3hCLFFBQVEsRUFBRSx5MkJBMEJUO01BQ0osQ0FBQztzQ0FRb0IsV0FBSTtJQU5iLGlCQUFpQixDQXFCN0I7QUFyQlksK0NBQWlCIiwiZmlsZSI6Im1haW4tc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDBhNzMzODA0MmQxNTg5OGI5MTgiLCJpbXBvcnQgJ2FuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHMnO1xyXG5pbXBvcnQgJ3pvbmUuanMnO1xyXG5pbXBvcnQgeyBlbmFibGVQcm9kTW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBwbGF0Zm9ybU5vZGVEeW5hbWljIH0gZnJvbSAnYW5ndWxhcjItdW5pdmVyc2FsJztcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAvYXBwLm1vZHVsZSc7XHJcblxyXG5lbmFibGVQcm9kTW9kZSgpO1xyXG5jb25zdCBwbGF0Zm9ybSA9IHBsYXRmb3JtTm9kZUR5bmFtaWMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXM6IGFueSkgOiBQcm9taXNlPHsgaHRtbDogc3RyaW5nLCBnbG9iYWxzPzogYW55IH0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFpvbmUgPSBab25lLmN1cnJlbnQuZm9yayh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhbmd1bGFyLXVuaXZlcnNhbCByZXF1ZXN0JyxcclxuICAgICAgICAgICAgcHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAgICAgYmFzZVVybDogJy8nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdFVybDogcGFyYW1zLnVybCxcclxuICAgICAgICAgICAgICAgIG9yaWdpblVybDogcGFyYW1zLm9yaWdpbixcclxuICAgICAgICAgICAgICAgIHByZWJvb3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogUmVuZGVyIGp1c3QgdGhlIDxhcHA+IGNvbXBvbmVudCBpbnN0ZWFkIG9mIHdyYXBwaW5nIGl0IGluc2lkZSBhbiBleHRyYSBIVE1MIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBXYWl0aW5nIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL3VuaXZlcnNhbC9pc3N1ZXMvMzQ3XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudDogJzwhRE9DVFlQRSBodG1sPjxodG1sPjxoZWFkPjwvaGVhZD48Ym9keT48YXBwPjwvYXBwPjwvYm9keT48L2h0bWw+J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkhhbmRsZUVycm9yOiAocGFyZW50Wm9uZSwgY3VycmVudFpvbmUsIHRhcmdldFpvbmUsIGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgZXJyb3Igb2NjdXJzIHdoaWxlIHJlbmRlcmluZyB0aGUgbW9kdWxlLCByZWplY3QgdGhlIHdob2xlIG9wZXJhdGlvblxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXF1ZXN0Wm9uZS5ydW48UHJvbWlzZTxzdHJpbmc+PigoKSA9PiBwbGF0Zm9ybS5zZXJpYWxpemVNb2R1bGUoQXBwTW9kdWxlKSkudGhlbihodG1sID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh7IGh0bWw6IGh0bWwgfSk7XHJcbiAgICAgICAgfSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9ib290LXNlcnZlci50cyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbC1wb2x5ZmlsbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJhbmd1bGFyMi11bml2ZXJzYWwtcG9seWZpbGxzXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiem9uZS5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInpvbmUuanNcIlxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvY29yZVwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFuZ3VsYXIyLXVuaXZlcnNhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFuZ3VsYXIyLXVuaXZlcnNhbFwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBVbml2ZXJzYWxNb2R1bGUgfSBmcm9tICdhbmd1bGFyMi11bml2ZXJzYWwnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2NhdGlvblN0cmF0ZWd5LCBIYXNoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBOYXZNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZXRjaERhdGFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb3VudGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0c0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdWJqZWN0cy9zdWJqZWN0cy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudCBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdk1lbnVDb21wb25lbnQsXHJcbiAgICAgICAgQ291bnRlckNvbXBvbmVudCxcclxuICAgICAgICBGZXRjaERhdGFDb21wb25lbnQsXHJcbiAgICAgICAgSG9tZUNvbXBvbmVudCxcclxuICAgICAgICBOYXZIZWFkZXJDb21wb25lbnQsXHJcbiAgICAgICAgVXNlcnNDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgU3ViamVjdHNDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgVW5pdmVyc2FsTW9kdWxlLCAvLyBNdXN0IGJlIGZpcnN0IGltcG9ydC4gVGhpcyBhdXRvbWF0aWNhbGx5IGltcG9ydHMgQnJvd3Nlck1vZHVsZSwgSHR0cE1vZHVsZSwgYW5kIEpzb25wTW9kdWxlIHRvby5cclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnY291bnRlcicsIGNvbXBvbmVudDogQ291bnRlckNvbXBvbmVudCB9LFxyXG4gICAgICAgICAgICB7IHBhdGg6ICdmZXRjaC1kYXRhJywgY29tcG9uZW50OiBGZXRjaERhdGFDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAndXNlcnMtZGF0YScsIGNvbXBvbmVudDogVXNlcnNDb21wb25lbnQgfSxcclxuICAgICAgICAgICAgeyBwYXRoOiAnc3ViamVjdHMnLCBjb21wb25lbnQ6IFN1YmplY3RzQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJ2hvbWUnIH1cclxuICAgICAgICBdKVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2FwcC5tb2R1bGUudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9mb3Jtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkBhbmd1bGFyL2Zvcm1zXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFuZ3VsYXIvcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2FwcC5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvYXBwL2FwcC5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz0nY29udGFpbmVyLWZsdWlkJz5cXHJcXG4gICAgPGRpdiBjbGFzcz0ncm93Jz5cXHJcXG4gICAgICAgIDxuYXZoZWFkZXI+PC9uYXZoZWFkZXI+XFxyXFxuICAgICAgICA8bmF2LW1lbnU+PC9uYXYtbWVudT5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9J2NvbC1sZy04IGJvZHktY29udGVudCc+XFxyXFxuICAgICAgICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuICAgICAgICB2YXIgcmVzdWx0ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2FwcC5jb21wb25lbnQuY3NzXCIpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0LnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICBcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5hcHAge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxubmF2LW1lbnUge1xcclxcbiAgICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnJvdyB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5kaXYuY29udGFpbmVyLWZsdWlkIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9hcHAvYXBwLmNvbXBvbmVudC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXHJcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcclxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXHJcbiovXHJcbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIGxpc3QgPSBbXTtcclxuXHJcblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xyXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gdGhpc1tpXTtcclxuXHRcdFx0aWYoaXRlbVsyXSkge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgaXRlbVsxXSArIFwifVwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChpdGVtWzFdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHJlc3VsdC5qb2luKFwiXCIpO1xyXG5cdH07XHJcblxyXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XHJcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xyXG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXHJcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcclxuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xyXG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXHJcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XHJcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcclxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcclxuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cclxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcclxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcclxuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcclxuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cdHJldHVybiBsaXN0O1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ25hdi1tZW51JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdm1lbnUuY29tcG9uZW50Lmh0bWwnKSxcclxuICAgIHN0eWxlczogW3JlcXVpcmUoJy4vbmF2bWVudS5jb21wb25lbnQuY3NzJyldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZNZW51Q29tcG9uZW50IHtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC50cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMiBuYXZiYXItaW52ZXJzZVxcXCI+XFxyXFxuICAgIDxkaXY+PGEgaHJlZj1cXFwiI1xcXCI+U2lkZSBtZW51czwvYT48L2Rpdj5cXHJcXG4gICAgPGRpdj48YSBocmVmPVxcXCIjXFxcIj5MaW5rPC9hPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1wcmltYXJ5XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPkFub3RoZXIgb3B0aW9uczwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgUGFuZWwgY29udGVudFxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2bWVudS9uYXZtZW51LmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9uYXZtZW51LmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdm1lbnUvbmF2bWVudS5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImRpdi5jb2wtbGctMiB7XFxyXFxuICAgIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZW5hdiB7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXHJcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZtZW51L25hdm1lbnUuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnaG9tZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9ob21lLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0xMlxcXCI+XFxyXFxuICAgIDxoMT5XZWxjb21lPC9oMT5cXHJcXG5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtZGVmYXVsdFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICBQbGFjZSBmb3IgQW5ndWxhcjIgY2Fyb3VzYWxcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgUGxhY2UgZm9yIHNsaWRlcy5cXHJcXG4gICAgICAgICAgICAuXFxyXFxuICAgICAgICAgICAgLlxcclxcbiAgICAgICAgICAgIC5cXHJcXG4gICAgICAgICAgICAuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYW5lbCBjb250ZW50XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYW5lbCBjb250ZW50XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC00XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsIHBhbmVsLXByaW1hcnlcXFwiPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiPlBhbmVsIGhlYWRpbmcgd2l0aG91dCB0aXRsZTwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWJvZHlcXFwiPlxcclxcbiAgICAgICAgICAgICAgICBQYW5lbCBjb250ZW50XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmV0Y2hkYXRhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZldGNoZGF0YS5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZXRjaERhdGFDb21wb25lbnQge1xyXG4gICAgcHVibGljIGZvcmVjYXN0czogV2VhdGhlckZvcmVjYXN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL1NhbXBsZURhdGEvV2VhdGhlckZvcmVjYXN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZvcmVjYXN0cyA9IHJlc3VsdC5qc29uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBXZWF0aGVyRm9yZWNhc3Qge1xyXG4gICAgZGF0ZUZvcm1hdHRlZDogc3RyaW5nO1xyXG4gICAgdGVtcGVyYXR1cmVDOiBudW1iZXI7XHJcbiAgICB0ZW1wZXJhdHVyZUY6IG51bWJlcjtcclxuICAgIHN1bW1hcnk6IHN0cmluZztcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvZmV0Y2hkYXRhL2ZldGNoZGF0YS5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQGFuZ3VsYXIvaHR0cFwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPldlYXRoZXIgZm9yZWNhc3Q8L2gxPlxcclxcblxcclxcbjxwPlRoaXMgY29tcG9uZW50IGRlbW9uc3RyYXRlcyBmZXRjaGluZyBkYXRhIGZyb20gdGhlIHNlcnZlci48L3A+XFxyXFxuXFxyXFxuPHAgKm5nSWY9XFxcIiFmb3JlY2FzdHNcXFwiPjxlbT5Mb2FkaW5nLi4uPC9lbT48L3A+XFxyXFxuXFxyXFxuPHRhYmxlIGNsYXNzPSd0YWJsZScgKm5nSWY9XFxcImZvcmVjYXN0c1xcXCI+XFxyXFxuICAgIDx0aGVhZD5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChDKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlRlbXAuIChGKTwvdGg+XFxyXFxuICAgICAgICAgICAgPHRoPlN1bW1hcnk8L3RoPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90aGVhZD5cXHJcXG4gICAgPHRib2R5PlxcclxcbiAgICAgICAgPHRyICpuZ0Zvcj1cXFwibGV0IGZvcmVjYXN0IG9mIGZvcmVjYXN0c1xcXCI+XFxyXFxuICAgICAgICAgICAgPHRkPnt7IGZvcmVjYXN0LmRhdGVGb3JtYXR0ZWQgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUMgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC50ZW1wZXJhdHVyZUYgfX08L3RkPlxcclxcbiAgICAgICAgICAgIDx0ZD57eyBmb3JlY2FzdC5zdW1tYXJ5IH19PC90ZD5cXHJcXG4gICAgICAgIDwvdHI+XFxyXFxuICAgIDwvdGJvZHk+XFxyXFxuPC90YWJsZT5cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2ZldGNoZGF0YS9mZXRjaGRhdGEuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2NvdW50ZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vY291bnRlci5jb21wb25lbnQuaHRtbCcpXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb3VudGVyQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBjdXJyZW50Q291bnQgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBpbmNyZW1lbnRDb3VudGVyKCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvdW50Kys7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL2NvdW50ZXIvY291bnRlci5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyPkNvdW50ZXI8L2gyPlxcclxcblxcclxcbjxwPlRoaXMgaXMgYSBzaW1wbGUgZXhhbXBsZSBvZiBhbiBBbmd1bGFyIDIgY29tcG9uZW50LjwvcD5cXHJcXG5cXHJcXG48cD5DdXJyZW50IGNvdW50OiA8c3Ryb25nPnt7IGN1cnJlbnRDb3VudCB9fTwvc3Ryb25nPjwvcD5cXHJcXG5cXHJcXG48YnV0dG9uIChjbGljayk9XFxcImluY3JlbWVudENvdW50ZXIoKVxcXCI+SW5jcmVtZW50PC9idXR0b24+XFxyXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9jb3VudGVyL2NvdW50ZXIuY29tcG9uZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZIZWFkZXJzIH0gZnJvbSAnLi9uYXZoZWFkZXIuY29udGV4dCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2aGVhZGVyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL25hdmhlYWRlci5jb21wb25lbnQuaHRtbCcpLFxyXG4gICAgc3R5bGVzOiBbcmVxdWlyZSgnLi9uYXZoZWFkZXIuY29tcG9uZW50LmNzcycpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2SGVhZGVyQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgaGVhZGVyczogTmF2SGVhZGVycztcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgTmF2SGVhZGVycygpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50LnRzIiwiZXhwb3J0IGNsYXNzIE5hdkhlYWRlckNvbnRleHQge1xyXG4gICAgcHVibGljIG5hbWU6IFN0cmluZztcclxuICAgIHB1YmxpYyB1cmw6IFN0cmluZztcclxuICAgIHB1YmxpYyBpY29uOiBTdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCB1cmw6IHN0cmluZywgaWNvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnVybCA9IHVybDtcclxuICAgICAgICB0aGlzLmljb24gPSBpY29uO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2SGVhZGVycyB7XHJcbiAgICBwcml2YXRlIGhvbWU6IE5hdkhlYWRlckNvbnRleHQgPSBuZXcgTmF2SGVhZGVyQ29udGV4dCgnaG9tZScsICcvaG9tZScsJ2dseXBoaWNvbiBnbHlwaGljb24taG9tZScpO1xyXG4gICAgcHJpdmF0ZSB1c2VyczogTmF2SGVhZGVyQ29udGV4dCA9IG5ldyBOYXZIZWFkZXJDb250ZXh0KCd1c2VycycsICcvdXNlcnMtZGF0YScsICdnbHlwaGljb24gZ2x5cGhpY29uLXRoLWxpc3QnKTtcclxuICAgIHByaXZhdGUgc3ViamVjdHM6IE5hdkhlYWRlckNvbnRleHQgPSBuZXcgTmF2SGVhZGVyQ29udGV4dCgnc3ViamVjdHMnLCAnL3N1YmplY3RzJywgJ2dseXBoaWNvbiBnbHlwaGljb24tYm9vaycpO1xyXG5cclxuICAgIHB1YmxpYyBoZWFkZXJzOiBOYXZIZWFkZXJDb250ZXh0W10gPSBbdGhpcy5ob21lLCB0aGlzLnVzZXJzLCB0aGlzLnN1YmplY3RzXTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9uYXZoZWFkZXIvbmF2aGVhZGVyLmNvbnRleHQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwibWFpbi1uYXYtaGVhZGVyXFxcIj5cXHJcXG4gICAgPG5hdiBjbGFzcz1cXFwibmF2YmFyIG5hdmJhci1pbnZlcnNlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lci1mbHVpZFxcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibmF2YmFyLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nbmF2YmFyLXRvZ2dsZScgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nLm5hdmJhci1jb2xsYXBzZSc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naWNvbi1iYXInPjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdpY29uLWJhcic+PC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2ljb24tYmFyJz48L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz0nbmF2YmFyLWJyYW5kJyBbcm91dGVyTGlua109XFxcIlsnL2hvbWUnXVxcXCI+VGVzdE1hbmFnZW1lbnRTdHVkaW88L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPSduYXYgbmF2YmFyLW5hdic+XFxyXFxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XFxcImxldCBsaW5rIG9mIGhlYWRlcnMuaGVhZGVyc1xcXCIgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbbGluay51cmxdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbY2xhc3NdPVxcXCJsaW5rLmljb25cXFwiPjwvc3Bhbj4ge3tsaW5rLm5hbWV9fVxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxcclxcbiAgICAgICAgICAgICAgICA8L2xpPlxcclxcbiAgICAgICAgICAgIDwvdWw+XFxyXFxuICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2YmFyLW5hdiBuYXZiYXItcmlnaHRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8bGkgW3JvdXRlckxpbmtBY3RpdmVdPVxcXCJbJ2xpbmstYWN0aXZlJ11cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVxcXCJbJy9sb2dpbiddXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1sb2ctaW5cXFwiPjwvc3Bhbj4gTG9naW5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPC9saT5cXHJcXG4gICAgICAgICAgICA8L3VsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvbmF2PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4gICAgICAgIHZhciByZXN1bHQgPSByZXF1aXJlKFwiISEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbmF2aGVhZGVyLmNvbXBvbmVudC5jc3NcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgIFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL25hdmhlYWRlci9uYXZoZWFkZXIuY29tcG9uZW50LmNzc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJuYXYubmF2YmFyLm5hdmJhci1pbnZlcnNlICB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICB9XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXBwL2NvbXBvbmVudHMvbmF2aGVhZGVyL25hdmhlYWRlci5jb21wb25lbnQuY3NzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4vLi4vLi4vbW9kZWxzL3VzZXJzLm1vZGVsXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndXNlcnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vdXNlcnMuY29tcG9uZW50Lmh0bWwnKVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IHsgICBcclxuICAgIHB1YmxpYyB1c2VyczogVXNlcnNbXSA9IFtdO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIGh0dHAuZ2V0KCcvYXBpL3VzZXJzY29udHJvbGxlci91c2VycycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJzID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgxPlVzZXIgRGV0YWlscyA6PC9oMT5cXHJcXG5cXHJcXG48cCAqbmdJZj1cXFwiIXVzZXJzXFxcIj48ZW0+TG9hZGluZyBVc2VyIERldGFpbHMgcGxlYXNlIFdhaXQgISAuLi48L2VtPjwvcD5cXHJcXG5cXHJcXG48dGFibGUgY2xhc3M9J3RhYmxlJyBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjojRkZGRkZGOyBib3JkZXI6MnB4ICM2RDdCOEQ7IHBhZGRpbmc6NXB4O3dpZHRoOjkwJTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIiBjZWxscGFkZGluZz1cXFwiMlxcXCIgY2VsbHNwYWNpbmc9XFxcIjJcXFwiICpuZ0lmPVxcXCJ1c2Vyc1xcXCI+XFxyXFxuXFxyXFxuICAgIDx0ciBzdHlsZT1cXFwiaGVpZ2h0OiAzMHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiMzMzY2OTkgOyBjb2xvcjojRkZGRkZGIDtib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3O1xcXCI+XFxyXFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjEwMFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+VXNlciBJZDwvdGQ+XFxyXFxuICAgICAgICA8dGQgd2lkdGg9XFxcIjI0MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+Tmlja25hbWU8L3RkPlxcclxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCIyNDBcXFwiIGFsaWduPVxcXCJjZW50ZXJcXFwiPkxhc3RuYW1lPC90ZD5cXHJcXG4gICAgICAgIDx0ZCB3aWR0aD1cXFwiMTIwXFxcIiBhbGlnbj1cXFwiY2VudGVyXFxcIj5GaXJzdG5hbWU8L3RkPlxcclxcbiAgICAgICAgPHRkIHdpZHRoPVxcXCI2MFxcXCIgYWxpZ249XFxcImNlbnRlclxcXCI+Um9sZSBJZDwvdGQ+XFxyXFxuXFxyXFxuICAgIDwvdHI+XFxyXFxuICAgIDx0Ym9keSAqbmdGb3I9XFxcImxldCB1c2VyIG9mIHVzZXJzXFxcIj5cXHJcXG4gICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiM5RjAwMEZcXFwiPnt7dXNlci51c2VySWR9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcblxcclxcbiAgICAgICAgICAgIDx0ZCBhbGlnbj1cXFwiY2VudGVyXFxcIiBzdHlsZT1cXFwiYm9yZGVyOiBzb2xpZCAxcHggIzY1OUVDNzsgcGFkZGluZzogNXB4O3RhYmxlLWxheW91dDpmaXhlZDtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cXFwiY29sb3I6IzlGMDAwRlxcXCI+e3t1c2VyLm5pY2tuYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiM5RjAwMEZcXFwiPnt7dXNlci5sYXN0bmFtZX19PC9zcGFuPlxcclxcbiAgICAgICAgICAgIDwvdGQ+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPHRkIGFsaWduPVxcXCJjZW50ZXJcXFwiIHN0eWxlPVxcXCJib3JkZXI6IHNvbGlkIDFweCAjNjU5RUM3OyBwYWRkaW5nOiA1cHg7dGFibGUtbGF5b3V0OmZpeGVkO1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVxcXCJjb2xvcjojOUYwMDBGXFxcIj57e3VzZXIuZmlyc3RuYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICA8dGQgYWxpZ249XFxcImNlbnRlclxcXCIgc3R5bGU9XFxcImJvcmRlcjogc29saWQgMXB4ICM2NTlFQzc7IHBhZGRpbmc6IDVweDt0YWJsZS1sYXlvdXQ6Zml4ZWQ7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XFxcImNvbG9yOiM5RjAwMEZcXFwiPnt7dXNlci5yb2xlSWR9fTwvc3Bhbj5cXHJcXG4gICAgICAgICAgICA8L3RkPlxcclxcbiAgICAgICAgPC90cj5cXHJcXG4gICAgPC90Ym9keT5cXHJcXG48L3RhYmxlPiBcIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5odG1sXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQsIHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlLCBzdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3VzZXJzLm1vZGVsJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcigndmlzaWJpbGl0eUNoYW5nZWQnLCBbXHJcbiAgICAgICAgICAgIHN0YXRlKCd0cnVlJywgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxLjApJyB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdmYWxzZScsIHN0eWxlKHsgb3BhY2l0eTogMCwgdHJhbnNmb3JtOiAnc2NhbGUoMC4wKScgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCcxID0+IDAnLCBhbmltYXRlKCczMDBtcycpKSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignMCA9PiAxJywgYW5pbWF0ZSgnOTAwbXMnKSlcclxuICAgICAgICBdKVxyXG4gICAgXSxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2xvZ2luLmNvbXBvbmVudC5odG1sJylcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcclxuICAgIHByaXZhdGUgaHR0cDogSHR0cDtcclxuXHJcbiAgICBwcml2YXRlIHVzZXI6IFVzZXJzID0geyBVc2VySWQ6IG51bGwsIE5pY2tuYW1lOiBcIlwiLCBQYXNzd29yZDogXCJcIiwgTGFzdG5hbWU6IFwiXCIsIEZpcnN0bmFtZTogXCJcIiwgRW1haWw6IFwiXCIsIEFkZHJlc3M6IFwiXCIsIFBob25lOiBcIlwiLCBSb2xlSWQ6IG51bGwgfTtcclxuICAgIHByaXZhdGUgZXJyb3JNc2c6IFN0cmluZyA9ICcnO1xyXG4gICAgcHJpdmF0ZSBjb25maXJtUGFzc3dvcmQ6IG51bWJlciA9IG51bGw7XHJcbiAgICBwcml2YXRlIGxvZ2luRW5hYmxlOiBCb29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgcmVtZW1iZXJtZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dMb2dpbkZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpbkVuYWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1JlZ2lzdGVyRm9ybSgpIHtcclxuICAgICAgICB0aGlzLmxvZ2luRW5hYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBKU09OLnN0cmluZ2lmeSh7IFwibmlja05hbWVcIjogdGhpcy51c2VyLk5pY2tuYW1lLCBcInBhc3N3b3JkXCI6IHRoaXMudXNlci5QYXNzd29yZCB9KTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cC5wb3N0KCdhcGkvYWNjb3VudGNvbnRyb2xsZXIvbG9naW4nLCBib2R5LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGVyciA9PiB0aGlzLmVycm9yTXNnLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0F1dGhlbnRpY2F0aW9uIENvbXBsZXRlJylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAvKi5tYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgfSkqLztcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXIpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL1J4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicnhqcy9SeFwiXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGNvbC1tZC1vZmZzZXQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgcGFuZWwtbG9naW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbC1oZWFkaW5nXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLXhzLTZcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVxcXCJzaG93TG9naW5Gb3JtKClcXFwiIGNsYXNzPVxcXCJhY3RpdmVcXFwiIGlkPVxcXCJsb2dpbi1mb3JtLWxpbmtcXFwiPkxvZ2luPC9hPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC14cy02XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cXFwic2hvd1JlZ2lzdGVyRm9ybSgpXFxcIiBpZD1cXFwicmVnaXN0ZXItZm9ybS1saW5rXFxcIj5SZWdpc3RlcjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImxvZ2luLWZvcm1cXFwiICpuZ0lmPVxcXCJsb2dpbkVuYWJsZVxcXCIgW0B2aXNpYmlsaXR5Q2hhbmdlZF09XFxcImxvZ2luRW5hYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJ1c2VybmFtZVxcXCIgaWQ9XFxcInVzZXJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5OaWNrbmFtZVxcXCIgdGFiaW5kZXg9XFxcIjFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJVc2VybmFtZVxcXCIgdmFsdWU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuUGFzc3dvcmRcXFwiIHRhYmluZGV4PVxcXCIyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwIHRleHQtY2VudGVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIHRhYmluZGV4PVxcXCIzXFxcIiBjbGFzcz1cXFwiXFxcIiBuYW1lPVxcXCJyZW1lbWJlclxcXCIgaWQ9XFxcInJlbWVtYmVyXFxcIiBbKG5nTW9kZWwpXT1cXFwicmVtZW1iZXJtZVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicmVtZW1iZXJcXFwiPiBSZW1lbWJlciBNZTwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1zbS1vZmZzZXQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwibG9naW4oKVxcXCIgbmFtZT1cXFwibG9naW4tc3VibWl0XFxcIiBpZD1cXFwibG9naW4tc3VibWl0XFxcIiB0YWJpbmRleD1cXFwiNFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBidG4gYnRuLWxvZ2luXFxcIj5Mb2cgSW48L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0xMlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFiaW5kZXg9XFxcIjVcXFwiIGNsYXNzPVxcXCJmb3Jnb3QtcGFzc3dvcmRcXFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInJlZ2lzdGVyLWZvcm1cXFwiICpuZ0lmPVxcXCIhbG9naW5FbmFibGVcXFwiIFtAdmlzaWJpbGl0eUNoYW5nZWRdPVxcXCIhbG9naW5FbmFibGVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInVzZXJuYW1lXFxcIiBbKG5nTW9kZWwpXT1cXFwidXNlci5OaWNrbmFtZVxcXCIgaWQ9XFxcInVzZXJuYW1lXFxcIiB0YWJpbmRleD1cXFwiMVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIlVzZXJuYW1lXFxcIiB2YWx1ZT1cXFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcImZpcnN0bmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuRmlyc3RuYW1lXFxcIiBpZD1cXFwiZmlyc3RuYW1lXFxcIiB0YWJpbmRleD1cXFwiMVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkZpcnN0bmFtZVxcXCIgdmFsdWU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJsYXN0bmFtZVxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuTGFzdG5hbWVcXFwiIGlkPVxcXCJsYXN0bmFtZVxcXCIgdGFiaW5kZXg9XFxcIjFcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHBsYWNlaG9sZGVyPVxcXCJMYXN0bmFtZVxcXCIgdmFsdWU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJlbWFpbFxcXCIgbmFtZT1cXFwiZW1haWxcXFwiIGlkPVxcXCJlbWFpbFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuRW1haWxcXFwiIHRhYmluZGV4PVxcXCIxXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW1haWwgQWRkcmVzc1xcXCIgdmFsdWU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgbmFtZT1cXFwicGFzc3dvcmRcXFwiIGlkPVxcXCJwYXNzd29yZFxcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuUGFzc3dvcmRcXFwiIHRhYmluZGV4PVxcXCIyXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwicGFzc3dvcmRcXFwiIG5hbWU9XFxcImNvbmZpcm0tcGFzc3dvcmRcXFwiIGlkPVxcXCJjb25maXJtLXBhc3N3b3JkXFxcIiBbKG5nTW9kZWwpXT1cXFwiY29uZmlybVBhc3N3b3JkXFxcIiB0YWJpbmRleD1cXFwiMlxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvbmZpcm0gUGFzc3dvcmRcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwicGhvbmVcXFwiIFsobmdNb2RlbCldPVxcXCJ1c2VyLlBob25lXFxcIiBpZD1cXFwicGhvbmVcXFwiIHRhYmluZGV4PVxcXCIxXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGhvbmVcXFwiIHZhbHVlPVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgbmFtZT1cXFwiYWRkcmVzc1xcXCIgWyhuZ01vZGVsKV09XFxcInVzZXIuQWRkcmVzc1xcXCIgaWQ9XFxcImFkZHJlc3NcXFwiIHRhYmluZGV4PVxcXCIxXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBwbGFjZWhvbGRlcj1cXFwiQWRkcmVzc1xcXCIgdmFsdWU9XFxcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zbS02IGNvbC1zbS1vZmZzZXQtM1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCIgKGNsaWNrKT1cXFwicmVnaXN0ZXIoKVxcXCIgbmFtZT1cXFwicmVnaXN0ZXItc3VibWl0XFxcIiBpZD1cXFwicmVnaXN0ZXItc3VibWl0XFxcIiB0YWJpbmRleD1cXFwiNFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBidG4gYnRuLXJlZ2lzdGVyXFxcIj5SZWdpc3RlciBOb3c8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHAgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBTdWJqZWN0cyB9IGZyb20gXCIuLy4uLy4uL21vZGVscy9zdWJqZWN0cy5tb2RlbFwiO1xyXG5pbXBvcnQgeyBUZXN0Q2FzZXMgfSBmcm9tIFwiLi8uLi8uLi9tb2RlbHMvdGVzdC5jYXNlcy5tb2RlbFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Rtcy1zdWJqZWN0cycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdWJqZWN0IG9mIHN1YmplY3RzXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cInNob3coc3ViamVjdC5zdWJqZWN0SWQpXCI+e3tzdWJqZWN0LnRpdGxlfX08L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlclwiPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoPlF1ZXN0aW9uPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+Q3JlYXRlZCBEYXRlPC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGg+SW50ZXJ2YWw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aD5MZXZlbDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGNhc2Ugb2YgdGVzdGNhc2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7Y2FzZS5xdWVzdGlvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tjYXNlLmNyZWF0ZWREYXRlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57e2Nhc2UuaW50ZXJ2YWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7Y2FzZS5sZXZlbElkfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN1YmplY3RzQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzdWJqZWN0czogU3ViamVjdHNbXSA9IFtdO1xyXG4gICAgcHVibGljIHRlc3RjYXNlczogVGVzdENhc2VzW10gPSBbXTtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgcHVibGljIGh0dHA6IEh0dHA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHA7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL2FwaS9zdWJqZWN0cy9zdWJqZWN0cycpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3RzID0gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93KHN1YmplY3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnL2FwaS90ZXN0Y2FzZXMvYnlzdWJqZWN0aWQvJyArIHN1YmplY3RJZC50b1N0cmluZygpKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy50ZXN0Y2FzZXMgPSByZXN1bHQuanNvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vQ2xpZW50QXBwL2FwcC9jb21wb25lbnRzL3N1YmplY3RzL3N1YmplY3RzLmNvbXBvbmVudC50cyJdLCJzb3VyY2VSb290IjoiIn0=