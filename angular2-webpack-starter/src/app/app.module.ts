import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgModule,ApplicationRef, OnInit} from '@angular/core';
import {removeNgStyles,createNewHosts,createInputTransfer} from '@angularclass/hmr';
import {RouterModule,PreloadAllModules} from '@angular/router';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router';
import { provideReduxForms, composeReducers, defaultFormReducer } from '@angular-redux/form';

// Redux ecosystem stuff.
import { combineReducers } from 'redux';
import * as createLogger from 'redux-logger';
import { combineEpics, createEpicMiddleware } from 'redux-observable';


/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { DataTableModule, DialogModule, SharedModule, ButtonModule, TabViewModule } from 'primeng/primeng';

import {ApiModule} from "./api/api.module";

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { HomeComponent } from './components/home/home.component';
import { NavHeaderComponent } from './components/navheader/navheader.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { AdminComponent } from './components/admin/admin.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthGuard } from './guards/authentication.guard';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';
import {Ng2BootstrapModule} from "ng2-bootstrap";

import { provideAuth } from 'angular2-jwt';

import { AppActions } from './app.actions';

import '../styles/styles.scss';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,

        // Pages
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        NavHeaderComponent,
        UsersComponent,
        LoginComponent,
        SubjectsComponent,
        AdminComponent,
        // Widgets

        // Pipes
        CapitalizePipe
    ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    //APIServices
    ApiModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
    DataTableModule,
    DialogModule,
    SharedModule,
    ButtonModule,
    TabViewModule,
    Ng2BootstrapModule,
    // Redux
    NgReduxModule,
    NgReduxRouterModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS,
    provideAuth({
        headerName: 'Authorization'
    }),
    // Guards
    AuthGuard,
    // Services
    AuthenticationService,
    UserService,
    // Actions
    AppActions
  ]

})

export class AppModule {
  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AppActions,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter
  ) {
    // Define the global store shape by combining our application's
    // reducers together into a given structure.
    const rootReducer = composeReducers(
      defaultFormReducer(),
      combineReducers({
        router: routerReducer
    }));

    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    ngRedux.configureStore(
      rootReducer,
      {},
      [
        createLogger()
      ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    // Enable syncing of Angular router state with our Redux store.
    ngReduxRouter.initialize();

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(ngRedux);
  }
}
