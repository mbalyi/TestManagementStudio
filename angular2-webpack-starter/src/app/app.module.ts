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

import { DataTableModule, DialogModule, SharedModule, ButtonModule, TabViewModule, TabMenuModule, CheckboxModule, StepsModule, MenuItem, DropdownModule } from 'primeng/primeng';

import {ApiModule} from "./api/api.module";

// Components
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
import { GroupComponent } from './components/admin/group.component';
import { RoleComponent } from './components/admin/role.component';
import { ManagerComponent } from './components/manager/manager.component';
import { QuestionsComponent } from './components/manager/questions.component';

// Widgets
import { QuestionWidget } from './widgets/question.widget';
import { QuestionFormWidget } from './widgets/question.form.widget';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AuthGuard } from './guards/authentication.guard';

// Services
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';
import { CurrentPageService } from './services/current.page.service';
import {Ng2BootstrapModule} from "ng2-bootstrap";

import { provideAuth } from 'angular2-jwt';

// Actions
import { AppActions } from './app.actions';
import { LoginActions } from './actions/login.actions';
import { NavPageActions } from './actions/navheader.actions';
import { CurrentUserActions } from './actions/current.user.actions';

// Redux
import { IAppState } from './reducers/store/app.state';
import { loginReducer } from './reducers/login.reducer';
import { currentUserReducer } from './reducers/current.user.reducer';
import { navHeaderReducer } from './reducers/navheader.reducer';

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
        GroupComponent,
        RoleComponent,
        ManagerComponent,
        QuestionsComponent,
        // Widgets
        QuestionWidget,
        QuestionFormWidget,

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
    TabMenuModule,
    CheckboxModule,
    StepsModule,
    DropdownModule,
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
    CurrentPageService,
    // Actions
    AppActions,
    LoginActions,
    NavPageActions,
    CurrentUserActions
  ]

})

export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: AppActions,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter
  ) {
    // Define the global store shape by combining our application's
    // reducers together into a given structure.
    const rootReducer = composeReducers(
      defaultFormReducer(),
      combineReducers<IAppState>({
        islogin: loginReducer,
        currentuser: currentUserReducer,
        navpage: navHeaderReducer,
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
