(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, rountingcomponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rountingcomponent", function() { return rountingcomponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-schedule/edit-schedule.component */ "./src/app/edit-schedule/edit-schedule.component.ts");
/* harmony import */ var _go_running_go_running_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./go-running/go-running.component */ "./src/app/go-running/go-running.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _root_component_root_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./root-component/root-component.component */ "./src/app/root-component/root-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _root_component_root_component_component__WEBPACK_IMPORTED_MODULE_10__["RootComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'home/:id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]], children: [
            { path: 'edit/:id', component: _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"] },
            { path: 'editschedule/:id', component: _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_7__["EditScheduleComponent"] },
            { path: 'gorunning/:id', component: _go_running_go_running_component__WEBPACK_IMPORTED_MODULE_8__["GoRunningComponent"] }
        ] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var rountingcomponent = [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], _edit_schedule_edit_schedule_component__WEBPACK_IMPORTED_MODULE_7__["EditScheduleComponent"], _go_running_go_running_component__WEBPACK_IMPORTED_MODULE_8__["GoRunningComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import '../assets/login-animation.js';
var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.getThings = function () {
        var temp = this._httpService.getStuff();
        temp.subscribe(function (data) { return console.log(data); });
        this.postThings();
    };
    AppComponent.prototype.postThings = function () {
        this.values = {
            author: 'Tom Clancy',
            books_name: 'SomeBook',
        };
        console.log(this.values);
        var temp = this._httpService.postStuff(this.values);
        temp.subscribe(function (data) { return console.log('data'); });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _root_component_root_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./root-component/root-component.component */ "./src/app/root-component/root-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["rountingcomponent"],
                _root_component_root_component_component__WEBPACK_IMPORTED_MODULE_8__["RootComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"], _auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_httpservice, _router) {
        this._httpservice = _httpservice;
        this._router = _router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._httpservice.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  form .inputGroup {\r\n    margin: 0 0 2em;\r\n    padding: 0;\r\n    position: relative;\r\n  }\r\n  form .inputGroup:last-of-type {\r\n    margin-bottom: 0;\r\n  }\r\n  h2{\r\n    margin: 0 0 12px;\r\n    display: block;\r\n    font-size: 2.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n  }\r\n  form label {\r\n    margin: 0 0 ;\r\n    display: inline-block;\r\n    font-size: 1.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n  }\r\n  form input[type='email'], form input[type=\"text\"], form input[type='password'] {\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 0 1em 0;\r\n    background-color: #f3fafd;\r\n    border: solid 2px #217093;\r\n    border-radius: 4px;\r\n    -webkit-appearance: none;\r\n    box-sizing: border-box;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 1.25em;\r\n    color: #353538;\r\n    font-weight: 300;\r\n    font-family: inherit;\r\n    transition: box-shadow .2s linear, border-color .25s ease-out;\r\n  }\r\n  form input[type='email']:focus, form input[type=\"text\"]:focus, form input[type='password']:focus {\r\n    outline: none;\r\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\r\n    border: solid 2px #4eb8dd;\r\n  }\r\n  form input[type='email'], form input[type=\"text\"] {\r\n    padding: 14px 1em 0px;\r\n  }\r\n  form button {\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: .65em 1em 1em;\r\n    background-color: #4eb8dd;\r\n    border: none;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n    width: 50%;\r\n    height: 45px;\r\n    font-size: 1.55em;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-family: inherit;\r\n    transition: background-color .2s ease-out;\r\n  }\r\n  form button:hover, form button:active {\r\n    background-color: #217093;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <br/>\r\n    <h2>Edit Profile </h2>\r\n    <form (submit)='OnSubmit($event)'>\r\n        <div class=\"inputGroup inputGroup1\">\r\n            <label for=\"user.Name\">Name    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n            <input type=\"text\"  name=\"user.Name\"[(ngModel)]=\"user.Name\"/><br/>\r\n            <label for=\"user.Age\">Age    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n            <input type=\"text\"  name=\"user.Age\"[(ngModel)]=\"user.Age\"/><br/>\r\n            <label for=\"user.Average_Speed\">Average Speed(mins/mile)&nbsp;</label>\r\n            <input type=\"text\" name=\"user.Average_Speed\"[(ngModel)]=\"user.Average_Speed\"/> <br/>\r\n            <label for=\"user.Average_distance\">Average Distance(miles)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>\r\n            <input type=\"text\" name=\"user.Average_distance\"[(ngModel)]=\"user.Average_distance\"/><br/>\r\n            \r\n        </div>\r\n        <div class=\"inputGroup inputGroup3\">\r\n        <button type=\"submit\">Edit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_httpService, route, _router) {
        this._httpService = _httpService;
        this.route = route;
        this._router = _router;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        this.user = { Name: '', Age: '', Average_Speed: '', Average_distance: '' };
        this.logged_in = this._router.snapshot.paramMap.get('id');
        this.getUserData();
    };
    EditProfileComponent.prototype.getUserData = function () {
        var _this = this;
        var temp = this._httpService.getUser(this.logged_in);
        temp.subscribe(function (data) {
            _this.user = data[0];
            console.log(_this.user);
        });
    };
    EditProfileComponent.prototype.OnSubmit = function (event) {
        event.preventDefault();
        var temp = this._httpService.updateUser(this.logged_in, this.user);
        temp.subscribe(function (data) { return console.log(data); });
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/edit-schedule/edit-schedule.component.css":
/*!***********************************************************!*\
  !*** ./src/app/edit-schedule/edit-schedule.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  form .inputGroup {\r\n    margin: 0 0 2em;\r\n    padding: 0;\r\n    position: relative;\r\n  }\r\n  form .inputGroup:last-of-type {\r\n    margin-bottom: 0;\r\n  }\r\n  h2{\r\n    margin: 0 0 12px;\r\n    display: block;\r\n    font-size: 2.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n  }\r\n  form label {\r\n    margin: 0 0 ;\r\n    display: inline-block;\r\n    font-size: 1.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n  }\r\n  form input[type='email'], form input[type=\"text\"], form input[type='password'] {\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: 0 1em 0;\r\n    background-color: #f3fafd;\r\n    border: solid 2px #217093;\r\n    border-radius: 4px;\r\n    -webkit-appearance: none;\r\n    box-sizing: border-box;\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 1.25em;\r\n    color: #353538;\r\n    font-weight: 300;\r\n    font-family: inherit;\r\n    transition: box-shadow .2s linear, border-color .25s ease-out;\r\n  }\r\n  form input[type='email']:focus, form input[type=\"text\"]:focus, form input[type='password']:focus {\r\n    outline: none;\r\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\r\n    border: solid 2px #4eb8dd;\r\n  }\r\n  form input[type='email'], form input[type=\"text\"] {\r\n    padding: 14px 1em 0px;\r\n  }\r\n  form button {\r\n    display: inline-block;\r\n    margin: 0;\r\n    padding: .65em 1em 1em;\r\n    background-color: #4eb8dd;\r\n    border: none;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n    width: 50%;\r\n    height: 45px;\r\n    font-size: 1.55em;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-family: inherit;\r\n    transition: background-color .2s ease-out;\r\n  }\r\n  form button:hover, form button:active {\r\n    background-color: #217093;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/edit-schedule/edit-schedule.component.html":
/*!************************************************************!*\
  !*** ./src/app/edit-schedule/edit-schedule.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/edit-schedule/edit-schedule.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-schedule/edit-schedule.component.ts ***!
  \**********************************************************/
/*! exports provided: EditScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditScheduleComponent", function() { return EditScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditScheduleComponent = /** @class */ (function () {
    function EditScheduleComponent() {
    }
    EditScheduleComponent.prototype.ngOnInit = function () {
    };
    EditScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-schedule',
            template: __webpack_require__(/*! ./edit-schedule.component.html */ "./src/app/edit-schedule/edit-schedule.component.html"),
            styles: [__webpack_require__(/*! ./edit-schedule.component.css */ "./src/app/edit-schedule/edit-schedule.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditScheduleComponent);
    return EditScheduleComponent;
}());



/***/ }),

/***/ "./src/app/go-running/go-running.component.css":
/*!*****************************************************!*\
  !*** ./src/app/go-running/go-running.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/go-running/go-running.component.html":
/*!******************************************************!*\
  !*** ./src/app/go-running/go-running.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  go-running works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/go-running/go-running.component.ts":
/*!****************************************************!*\
  !*** ./src/app/go-running/go-running.component.ts ***!
  \****************************************************/
/*! exports provided: GoRunningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoRunningComponent", function() { return GoRunningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoRunningComponent = /** @class */ (function () {
    function GoRunningComponent() {
    }
    GoRunningComponent.prototype.ngOnInit = function () {
    };
    GoRunningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-go-running',
            template: __webpack_require__(/*! ./go-running.component.html */ "./src/app/go-running/go-running.component.html"),
            styles: [__webpack_require__(/*! ./go-running.component.css */ "./src/app/go-running/go-running.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoRunningComponent);
    return GoRunningComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content{\r\n    padding:10px;\r\n    background-color:#BEDCFE;\r\n    display:inline-block;\r\n    vertical-align:top;\r\n    width:35%;\r\n    color:black;\r\n}\r\n\r\n.btn{\r\n    margin:15px;\r\n\r\n    padding:5px;\r\n    text-align:center;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    /* background-color:#85BDA6; */\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a, .dropbtn {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\nli a:hover, .dropdown:hover .dropbtn {\r\n    background-color:#85BDA6;\r\n}\r\n\r\nli.dropdown {\r\n    display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f9f9f9;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1}\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id='gmap' style='width:60%;height:450px;display:inline-block;border:5px solid cadetblue;'></div>\r\n<div id=\"content\">\r\n        \r\n        <ul>\r\n            <li><button (click)='findMe()' class='btn'>Where Am I</button></li>\r\n            <li><button *ngIf='isTracking' (click)='trackMe()' class='btn'>Allow Tracking</button></li>\r\n            \r\n            <li class=\"dropdown\">\r\n                <button href=\"javascript:void(0)\" class=\"btn\">Change Map Types</button>\r\n                <div class=\"dropdown-content\">\r\n                <a href='#' (click)='$event.preventDefault();initialiseMap(\"terrain\")' class=\"btn\">Terrain</a>\r\n                <a href='#' (click)='$event.preventDefault();initialiseMap(\"satellite\")' class=\"btn\">Sattelite</a>\r\n                <a href='#' (click)='$event.preventDefault();initialiseMap(\"roadmap\")' class=\"btn\">RoadMap</a>\r\n                </div>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                  <button href=\"javascript:void(0)\" class=\"btn\">More</button>\r\n                  <div class=\"dropdown-content\">\r\n                    <a href=\"#\" [routerLink]=\"['edit',currentUser.id]\" class=\"btn\">Edit Profile</a>\r\n                    <a href=\"#\" [routerLink]=\"['editschedule',currentUser.id]\" class=\"btn\">Edit Schedule</a>\r\n                    <a href=\"#\" (click)='$event.preventDefault();findMe()' class=\"btn\">Add Locations</a>\r\n                  </div>\r\n                </li>\r\n                <li><button class='btn' (click)='logoutUser()' *ngIf=\"currentUser\">LogOut</button></li>\r\n        </ul>\r\n    \r\n              <!-- <div id=\"map\" height=\"460px\" width=\"100%\"></div> -->\r\n         \r\n    \r\n\r\n    \r\n\r\n    <br/><br/>\r\n    <p>Name: {{currentUser.name}}</p>\r\n    <p>Email: {{currentUser.email}}</p>\r\n    <router-outlet  style=\"margin:0 auto;\"></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_httpService, route, _router) {
        this._httpService = _httpService;
        this.route = route;
        this._router = _router;
        this.title = 'Test Google Maps';
        this.isTracking = false;
        this.iconBase = "https://maps.google.com/mapfiles/kml/shapes/";
        this.markerTypes = [
            {
                text: "Parking", value: "parking_lot_maps.png"
            }
        ];
        this.selectedMarkerType = "info-i_maps.png";
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.currentUser = '';
        this.logged_in = this._router.snapshot.paramMap.get('id');
        this.logged();
        this.getUsers();
    };
    HomeComponent.prototype.logged = function () {
        var _this = this;
        var temp = this._httpService.getUser(this.logged_in);
        temp.subscribe(function (data) {
            console.log("Logged in User is", data);
            _this.currentUser = data[0];
        });
    };
    HomeComponent.prototype.getUsers = function () {
        var _this = this;
        var temp = this._httpService.getusers();
        temp.subscribe(function (data) {
            // console.log(data)
            _this.locations = _this.convertToMapPoints(data);
            console.log('hello', _this.locations);
            var value = google.maps.MapTypeId.ROADMAP;
            _this.initialiseMap(value);
        });
    };
    HomeComponent.prototype.convertToMapPoints = function (data) {
        this.locations = [];
        for (var i = 0; i < data.length; i++) {
            var user = data[i];
            var contentString = '<p><b>User Name :' + user.name +
                '<br/><b> Email :' + user.email +
                '</p>';
            if (this.currentUser.id != user.id) {
                this.locations.push({
                    latlon: new google.maps.LatLng(user.latitude, user.longitude),
                    message: new google.maps.InfoWindow({
                        content: contentString,
                        maxWidth: 300
                    }),
                    username: user.name,
                    email: user.email
                });
            }
        }
        return this.locations;
    };
    HomeComponent.prototype.initialiseMap = function (type) {
        console.log("values ", type);
        var map = new google.maps.Map(document.getElementById('gmap'), {
            zoom: 12,
            center: new google.maps.LatLng(this.currentUser.latitude, this.currentUser.longitude),
            mapTypeId: type,
        });
        this.locations.forEach(function (item) {
            var marker = new google.maps.Marker({
                position: item.latlon,
                map: map,
                title: 'User Map',
                icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
            });
            google.maps.event.addListener(marker, 'click', function (e) {
                var currentSelectedMarker = item;
                item.message.open(map, marker);
            });
        });
        var initialLocation = new google.maps.LatLng(this.currentUser.latitude, this.currentUser.longitude);
        var marker = new google.maps.Marker({
            position: initialLocation,
            animation: google.maps.Animation.BOUNCE,
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        new google.maps.Circle({
            center: new google.maps.LatLng(this.currentUser.latitude, this.currentUser.longitude),
            radius: 1 * 1000,
            fillColor: '#FF0000',
            fillOpacity: 0.2,
            map: map
        });
        var pointA = new google.maps.LatLng(this.currentUser.latitude, this.currentUser.longitude);
        new google.maps.Marker({
            position: this.destinationPoint(pointA, 90, 1),
            map: map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
        });
    };
    HomeComponent.prototype.toRad = function (num) {
        return num * (Math.PI / 180);
    };
    HomeComponent.prototype.toDeg = function (num) {
        return num * 180 / Math.PI;
    };
    HomeComponent.prototype.destinationPoint = function (pointA, brng, dist) {
        dist = dist / 6371;
        brng = this.toRad(brng);
        var lat1 = this.toRad(pointA.lat()), lon1 = this.toRad(pointA.lng());
        var lat2 = Math.asin(Math.sin(lat1) * Math.cos(dist) +
            Math.cos(lat1) * Math.sin(dist) * Math.cos(brng));
        var lon2 = lon1 + Math.atan2(Math.sin(brng) * Math.sin(dist) *
            Math.cos(lat1), Math.cos(dist) - Math.sin(lat1) *
            Math.sin(lat2));
        if (isNaN(lat2) || isNaN(lon2))
            return null;
        return new google.maps.LatLng(this.toDeg(lat2), this.toDeg(lon2));
    };
    HomeComponent.prototype.drawCircle = function () {
    };
    HomeComponent.prototype.editProfile = function (id) {
        console.log("Editing shit");
        //  this.route.navigate(['/edit/',id]);
    };
    HomeComponent.prototype.editSchedule = function (id) {
        // this.route.navigate(['/editschedule',id]);
    };
    HomeComponent.prototype.addLocations = function (id) {
        // this.route.navigate(['/gorunning',id]);
    };
    HomeComponent.prototype.logoutUser = function () {
        this.currentUser = '';
        this.logged_in = '';
        this._httpService.logout();
    };
    HomeComponent.prototype.findMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.showPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    HomeComponent.prototype.showPosition = function (position) {
        this.currentUser.latitude = position.coords.latitude;
        this.currentUser.longitude = position.coords.longitude;
        if (confirm("Would you like to store this location for Future Use?")) {
            console.log("Saving it");
            var values = { latitude: position.coords.latitude, longitude: position.coords.longitude, user_id: this.logged_in };
            var temp = this._httpService.addAdress(values);
            temp.subscribe(function (data) { return console.log(data); });
        }
        else {
            console.log("Not saving it");
        }
        this.initialiseMap('roadmap');
    };
    HomeComponent.prototype.trackMe = function () {
        var _this = this;
        if (navigator.geolocation) {
            this.isTracking = true;
            navigator.geolocation.watchPosition(function (position) {
                _this.showTrackingPosition(position);
            });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    };
    HomeComponent.prototype.showTrackingPosition = function (position) {
        console.log("tracking postion:  " + position.coords.latitude + " - " + position.coords.longitude);
        this.currentUser.latitude = position.coords.latitude;
        this.currentUser.longitude = position.coords.longitude;
        // this.initialiseMap('roadmap');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = /** @class */ (function () {
    function HttpService(_http, route) {
        this._http = _http;
        this.route = route;
    }
    HttpService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    HttpService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.route.navigate(['/login']);
    };
    HttpService.prototype.addAdress = function (values) {
        console.log("Saving an adress");
        return this._http.post('/addadress', values);
    };
    HttpService.prototype.getUser = function (id) {
        return this._http.get('/user/' + id);
    };
    HttpService.prototype.postStuff = function (values) {
        console.log("Here I am", values);
        return this._http.post('/test/book', values);
    };
    HttpService.prototype.getStuff = function () {
        return this._http.get('/books');
    };
    HttpService.prototype.register_user = function (user) {
        return this._http.post('/registration/user', user);
    };
    HttpService.prototype.login_user = function (user) {
        return this._http.post('/login/user', user);
    };
    HttpService.prototype.getusers = function () {
        return this._http.get('/users');
    };
    HttpService.prototype.updateUser = function (id, values) {
        console.log("Here");
        return this._http.post('/update/' + id, values);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  body {\r\n    background-color: #eff3f4;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 16px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: 400;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  form {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    background-color: #FFF;\r\n    margin: 0;\r\n    padding: 2.25em;\r\n    box-sizing: border-box;\r\n    border: solid 1px #DDD;\r\n    border-radius: .5em;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n  }\r\n  \r\n  form .inputGroup {\r\n    margin: 0 0 2em;\r\n    padding: 0;\r\n    position: relative;\r\n  }\r\n  \r\n  form .inputGroup:last-of-type {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  form label {\r\n    margin: 0 0 12px;\r\n    display: block;\r\n    font-size: 1.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  form input[type='email'], form input[type=\"text\"], form input[type='password'] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0 1em 0;\r\n    background-color: #f3fafd;\r\n    border: solid 2px #217093;\r\n    border-radius: 4px;\r\n    -webkit-appearance: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 65px;\r\n    font-size: 1.55em;\r\n    color: #353538;\r\n    font-weight: 600;\r\n    font-family: inherit;\r\n    transition: box-shadow .2s linear, border-color .25s ease-out;\r\n  }\r\n  \r\n  form input[type='email']:focus, form input[type=\"text\"]:focus, form input[type='password']:focus {\r\n    outline: none;\r\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\r\n    border: solid 2px #4eb8dd;\r\n  }\r\n  \r\n  form input[type='email'], form input[type=\"text\"] {\r\n    padding: 14px 1em 0px;\r\n  }\r\n  \r\n  form button {\r\n    display: block;\r\n    margin: 0;\r\n    padding: .65em 1em 1em;\r\n    background-color: #4eb8dd;\r\n    border: none;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n    width: 100%;\r\n    height: 65px;\r\n    font-size: 1.55em;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-family: inherit;\r\n    transition: background-color .2s ease-out;\r\n  }\r\n  \r\n  form button:hover, form button:active {\r\n    background-color: #217093;\r\n  }\r\n  \r\n  form .inputGroup1 .helper {\r\n    position: absolute;\r\n    z-index: 1;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  form .inputGroup1 .helper1 {\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transform: translate(1.4em, 2.6em) scale(1);\r\n            transform: translate(1.4em, 2.6em) scale(1);\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n    color: #217093;\r\n    font-size: 1.25em;\r\n    font-weight: 400;\r\n    opacity: .65;\r\n    pointer-events: none;\r\n    transition: opacity .2s linear, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .2s linear;\r\n    transition: transform .2s ease-out, opacity .2s linear, -webkit-transform .2s ease-out;\r\n  }\r\n  \r\n  form .inputGroup1.focusWithText .helper {\r\n    /*input[type='email']:focus + .helper {*/\r\n    -webkit-transform: translate(1.4em, 2em) scale(0.65);\r\n            transform: translate(1.4em, 2em) scale(0.65);\r\n    opacity: 1;\r\n  }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #loginForm=\"ngForm\" (ngSubmit)=\"login($event)\">\r\n  <div class=\"svgContainer\">\r\n    <div>\r\n      <svg class=\"mySVG\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 200 200\">\r\n        <defs>\r\n          <circle id=\"armMaskPath\" cx=\"100\" cy=\"100\" r=\"100\" />\r\n        </defs>\r\n        <clipPath id=\"armMask\">\r\n          <use xlink:href=\"#armMaskPath\" overflow=\"visible\" />\r\n        </clipPath>\r\n        <circle cx=\"100\" cy=\"100\" r=\"100\" fill=\"#a9ddf3\" />\r\n        <g class=\"body\">\r\n          <path fill=\"#FFFFFF\" d=\"M193.3,135.9c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1 c-10.6,0-20,5.1-25.8,13l0,78h187L193.3,135.9z\"\r\n          />\r\n          <path fill=\"none\" stroke=\"#3A5E77\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoinn=\"round\" d=\"M193.3,135.9 c-5.8-8.4-15.5-13.9-26.5-13.9H151V72c0-27.6-22.4-50-50-50S51,44.4,51,72v50H32.1c-10.6,0-20,5.1-25.8,13\"\r\n          />\r\n          <path fill=\"#DDF1FA\" d=\"M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z\"\r\n          />\r\n        </g>\r\n        <g class=\"earL\">\r\n          <g class=\"outerEar\" fill=\"#ddf1fa\" stroke=\"#3a5e77\" stroke-width=\"2.5\">\r\n            <circle cx=\"47\" cy=\"83\" r=\"11.5\" />\r\n            <path d=\"M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n          </g>\r\n          <g class=\"earHair\">\r\n            <rect x=\"51\" y=\"64\" fill=\"#FFFFFF\" width=\"15\" height=\"35\" />\r\n            <path d=\"M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9\"\r\n              fill=\"#fff\" stroke=\"#3a5e77\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n          </g>\r\n        </g>\r\n        <g class=\"earR\">\r\n          <g class=\"outerEar\" fill=\"#ddf1fa\" stroke=\"#3a5e77\" stroke-width=\"2.5\">\r\n            <circle cx=\"155\" cy=\"83\" r=\"11.5\" />\r\n            <path d=\"M155.7 78.9c2.3 0 4.1 1.9 4.1 4.1 0 2.3-1.9 4.1-4.1 4.1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n          </g>\r\n          <g class=\"earHair\">\r\n            <rect x=\"131\" y=\"64\" fill=\"#FFFFFF\" width=\"20\" height=\"35\" />\r\n            <path d=\"M148.6 62.8c4.9 4.6 8.4 9.4 10.6 14.2-3.4-.1-6.8-.1-10.1.1 4 3.7 6.8 7.6 8.2 11.6-2.1 0-4.2 0-6.3.2 2.6 4.1 3.8 8.3 3.7 12.5-1.2-.7-3.4-1.4-5.2-1.9\"\r\n              fill=\"#fff\" stroke=\"#3a5e77\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n          </g>\r\n        </g>\r\n        <path class=\"chin\" d=\"M84.1 121.6c2.7 2.9 6.1 5.4 9.8 7.5l.9-4.5c2.9 2.5 6.3 4.8 10.2 6.5 0-1.9-.1-3.9-.2-5.8 3 1.2 6.2 2 9.7 2.5-.3-2.1-.7-4.1-1.2-6.1\"\r\n          fill=\"none\" stroke=\"#3a5e77\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n        <path class=\"face\" fill=\"#DDF1FA\" d=\"M134.5,46v35.5c0,21.815-15.446,39.5-34.5,39.5s-34.5-17.685-34.5-39.5V46\" />\r\n        <path class=\"hair\" fill=\"#FFFFFF\" stroke=\"#3A5E77\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M81.457,27.929 c1.755-4.084,5.51-8.262,11.253-11.77c0.979,2.565,1.883,5.14,2.712,7.723c3.162-4.265,8.626-8.27,16.272-11.235 c-0.737,3.293-1.588,6.573-2.554,9.837c4.857-2.116,11.049-3.64,18.428-4.156c-2.403,3.23-5.021,6.391-7.852,9.474\"\r\n        />\r\n        <g class=\"eyebrow\">\r\n          <path fill=\"#FFFFFF\" d=\"M138.142,55.064c-4.93,1.259-9.874,2.118-14.787,2.599c-0.336,3.341-0.776,6.689-1.322,10.037 c-4.569-1.465-8.909-3.222-12.996-5.226c-0.98,3.075-2.07,6.137-3.267,9.179c-5.514-3.067-10.559-6.545-15.097-10.329 c-1.806,2.889-3.745,5.73-5.816,8.515c-7.916-4.124-15.053-9.114-21.296-14.738l1.107-11.768h73.475V55.064z\"\r\n          />\r\n          <path fill=\"#FFFFFF\" stroke=\"#3A5E77\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M63.56,55.102 c6.243,5.624,13.38,10.614,21.296,14.738c2.071-2.785,4.01-5.626,5.816-8.515c4.537,3.785,9.583,7.263,15.097,10.329 c1.197-3.043,2.287-6.104,3.267-9.179c4.087,2.004,8.427,3.761,12.996,5.226c0.545-3.348,0.986-6.696,1.322-10.037 c4.913-0.481,9.857-1.34,14.787-2.599\"\r\n          />\r\n        </g>\r\n        <g class=\"eyeL\">\r\n          <circle cx=\"85.5\" cy=\"78.5\" r=\"3.5\" fill=\"#3a5e77\" />\r\n          <circle cx=\"84\" cy=\"76\" r=\"1\" fill=\"#fff\" />\r\n        </g>\r\n        <g class=\"eyeR\">\r\n          <circle cx=\"114.5\" cy=\"78.5\" r=\"3.5\" fill=\"#3a5e77\" />\r\n          <circle cx=\"113\" cy=\"76\" r=\"1\" fill=\"#fff\" />\r\n        </g>\r\n        <g class=\"mouth\">\r\n          <path class=\"mouthBG\" fill=\"#617E92\" d=\"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z\"\r\n          />\r\n          <path style=\"display: none;\" class=\"mouthSmallBG\" fill=\"#617E92\" d=\"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z\"\r\n          />\r\n          <path style=\"display: none;\" class=\"mouthMediumBG\" d=\"M95,104.2c-4.5,0-8.2-3.7-8.2-8.2v-2c0-1.2,1-2.2,2.2-2.2h22c1.2,0,2.2,1,2.2,2.2v2 c0,4.5-3.7,8.2-8.2,8.2H95z\"\r\n          />\r\n          <path style=\"display: none;\" class=\"mouthLargeBG\" d=\"M100 110.2c-9 0-16.2-7.3-16.2-16.2 0-2.3 1.9-4.2 4.2-4.2h24c2.3 0 4.2 1.9 4.2 4.2 0 9-7.2 16.2-16.2 16.2z\"\r\n            fill=\"#617e92\" stroke=\"#3a5e77\" stroke-linejoin=\"round\" stroke-width=\"2.5\" />\r\n          <defs>\r\n            <path id=\"mouthMaskPath\" d=\"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z\"\r\n            />\r\n          </defs>\r\n          <clipPath id=\"mouthMask\">\r\n            <use xlink:href=\"#mouthMaskPath\" overflow=\"visible\" />\r\n          </clipPath>\r\n          <g clip-path=\"url(#mouthMask)\">\r\n            <g class=\"tongue\">\r\n              <circle cx=\"100\" cy=\"107\" r=\"8\" fill=\"#cc4a6c\" />\r\n              <ellipse class=\"tongueHighlight\" cx=\"100\" cy=\"100.5\" rx=\"3\" ry=\"1.5\" opacity=\".1\" fill=\"#fff\" />\r\n            </g>\r\n          </g>\r\n          <path clip-path=\"url(#mouthMask)\" class=\"tooth\" style=\"fill:#FFFFFF;\" d=\"M106,97h-4c-1.1,0-2-0.9-2-2v-2h8v2C108,96.1,107.1,97,106,97z\"\r\n          />\r\n          <path class=\"mouthOutline\" fill=\"none\" stroke=\"#3A5E77\" stroke-width=\"2.5\" stroke-linejoin=\"round\" d=\"M100.2,101c-0.4,0-1.4,0-1.8,0c-2.7-0.3-5.3-1.1-8-2.5c-0.7-0.3-0.9-1.2-0.6-1.8 c0.2-0.5,0.7-0.7,1.2-0.7c0.2,0,0.5,0.1,0.6,0.2c3,1.5,5.8,2.3,8.6,2.3s5.7-0.7,8.6-2.3c0.2-0.1,0.4-0.2,0.6-0.2 c0.5,0,1,0.3,1.2,0.7c0.4,0.7,0.1,1.5-0.6,1.9c-2.6,1.4-5.3,2.2-7.9,2.5C101.7,101,100.5,101,100.2,101z\"\r\n          />\r\n        </g>\r\n        <path class=\"nose\" d=\"M97.7 79.9h4.7c1.9 0 3 2.2 1.9 3.7l-2.3 3.3c-.9 1.3-2.9 1.3-3.8 0l-2.3-3.3c-1.3-1.6-.2-3.7 1.8-3.7z\"\r\n          fill=\"#3a5e77\" />\r\n        <g class=\"arms\" clip-path=\"url(#armMask)\">\r\n          <g class=\"armL\">\r\n            <path fill=\"#ddf1fa\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2.5\"\r\n              d=\"M121.3 97.4L111 58.7l38.8-10.4 20 36.1z\" />\r\n            <path fill=\"#ddf1fa\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2.5\"\r\n              d=\"M134.4 52.5l19.3-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1L146 59.7M160.8 76.5l19.4-5.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-18.3 4.9M158.3 66.8l23.1-6.2c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-23.1 6.2M150.9 58.4l26-7c2.7-.7 5.4.9 6.1 3.5.7 2.7-.9 5.4-3.5 6.1l-21.3 5.7\"\r\n            />\r\n            <path fill=\"#a9ddf3\" d=\"M178.8 74.7l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM180.1 64l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM175.5 54.9l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8zM152.1 49.4l2.2-.6c1.1-.3 2.2.3 2.4 1.4.3 1.1-.3 2.2-1.4 2.4l-2.2.6-1-3.8z\"\r\n            />\r\n            <path fill=\"#fff\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"M123.5 96.8c-41.4 14.9-84.1 30.7-108.2 35.5L1.2 80c33.5-9.9 71.9-16.5 111.9-21.8\"\r\n            />\r\n            <path fill=\"#fff\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"M108.5 59.4c7.7-5.3 14.3-8.4 22.8-13.2-2.4 5.3-4.7 10.3-6.7 15.1 4.3.3 8.4.7 12.3 1.3-4.2 5-8.1 9.6-11.5 13.9 3.1 1.1 6 2.4 8.7 3.8-1.4 2.9-2.7 5.8-3.9 8.5 2.5 3.5 4.6 7.2 6.3 11-4.9-.8-9-.7-16.2-2.7M94.5 102.8c-.6 4-3.8 8.9-9.4 14.7-2.6-1.8-5-3.7-7.2-5.7-2.5 4.1-6.6 8.8-12.2 14-1.9-2.2-3.4-4.5-4.5-6.9-4.4 3.3-9.5 6.9-15.4 10.8-.2-3.4.1-7.1 1.1-10.9M97.5 62.9c-1.7-2.4-5.9-4.1-12.4-5.2-.9 2.2-1.8 4.3-2.5 6.5-3.8-1.8-9.4-3.1-17-3.8.5 2.3 1.2 4.5 1.9 6.8-5-.6-11.2-.9-18.4-1 2 2.9.9 3.5 3.9 6.2\"\r\n            />\r\n          </g>\r\n          <g class=\"armR\">\r\n            <path fill=\"#ddf1fa\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2.5\"\r\n              d=\"M265.4 97.3l10.4-38.6-38.9-10.5-20 36.1z\" />\r\n            <path fill=\"#ddf1fa\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"2.5\"\r\n              d=\"M252.4 52.4L233 47.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l10.3 2.8M226 76.4l-19.4-5.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l18.3 4.9M228.4 66.7l-23.1-6.2c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l23.1 6.2M235.8 58.3l-26-7c-2.7-.7-5.4.9-6.1 3.5-.7 2.7.9 5.4 3.5 6.1l21.3 5.7\"\r\n            />\r\n            <path fill=\"#a9ddf3\" d=\"M207.9 74.7l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM206.7 64l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM211.2 54.8l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8zM234.6 49.4l-2.2-.6c-1.1-.3-2.2.3-2.4 1.4-.3 1.1.3 2.2 1.4 2.4l2.2.6 1-3.8z\"\r\n            />\r\n            <path fill=\"#fff\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"M263.3 96.7c41.4 14.9 84.1 30.7 108.2 35.5l14-52.3C352 70 313.6 63.5 273.6 58.1\"\r\n            />\r\n            <path fill=\"#fff\" stroke=\"#3a5e77\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2.5\" d=\"M278.2 59.3l-18.6-10 2.5 11.9-10.7 6.5 9.9 8.7-13.9 6.4 9.1 5.9-13.2 9.2 23.1-.9M284.5 100.1c-.4 4 1.8 8.9 6.7 14.8 3.5-1.8 6.7-3.6 9.7-5.5 1.8 4.2 5.1 8.9 10.1 14.1 2.7-2.1 5.1-4.4 7.1-6.8 4.1 3.4 9 7 14.7 11 1.2-3.4 1.8-7 1.7-10.9M314 66.7s5.4-5.7 12.6-7.4c1.7 2.9 3.3 5.7 4.9 8.6 3.8-2.5 9.8-4.4 18.2-5.7.1 3.1.1 6.1 0 9.2 5.5-1 12.5-1.6 20.8-1.9-1.4 3.9-2.5 8.4-2.5 8.4\"\r\n            />\r\n          </g>\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"inputGroup inputGroup1\">\r\n    <label for=\"email1\">Email</label>\r\n    <input type=\"text\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"email\" maxlength=\"256\" required/>\r\n    <p class=\"helper helper1\">email@domain.com</p>\r\n    <span class=\"indicator\"></span>\r\n  </div>\r\n  <div class=\"inputGroup inputGroup2\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"password\" required/>\r\n  </div>\r\n  <div class=\"inputGroup inputGroup3\">\r\n    <button id=\"login\" type=\"submit\" [disabled]=\"loginForm.invalid\">Log in</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assets_login_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/login-animation.js */ "./src/assets/login-animation.js");
/* harmony import */ var _assets_login_animation_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_login_animation_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_httpservice, _route) {
        this._httpservice = _httpservice;
        this._route = _route;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        window.initialize();
        this.email = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.email, this.password);
        this.user = {
            lemail: this.email,
            lpassword: this.password,
        };
        var temp = this._httpservice.login_user(this.user);
        temp.subscribe(function (data) {
            console.log("Logged in user", data);
            localStorage.setItem('token', data['token']);
            _this._route.navigate(['/home', data['user'][0].id]);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n  \r\n  body {\r\n    background-color: #eff3f4;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    font-size: 16px;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    font-weight: 400;\r\n    -webkit-font-smoothing: antialiased;\r\n  }\r\n  \r\n  form {\r\n    position: absolute;\r\n    top: 75%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 400px;\r\n    background-color: #FFF;\r\n    margin: 0;\r\n    padding: 2.25em;\r\n    box-sizing: border-box;\r\n    border: solid 1px #DDD;\r\n    border-radius: .5em;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n  }\r\n  \r\n  form .svgContainer {\r\n    position: relative;\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 0 auto 1em;\r\n    border-radius: 50%;\r\n    background: none;\r\n    border: solid 2.5px #3A5E77;\r\n    overflow: hidden;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  form .svgContainer div {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding-bottom: 100%;\r\n  }\r\n  \r\n  form .svgContainer .mySVG {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    pointer-events: none;\r\n  }\r\n  \r\n  form .inputGroup {\r\n    margin: 0 0 2em;\r\n    padding: 0;\r\n    position: relative;\r\n  }\r\n  \r\n  form .inputGroup:last-of-type {\r\n    margin-bottom: 0;\r\n  }\r\n  \r\n  h2{\r\n    margin: 0 0 12px;\r\n    display: block;\r\n    font-size: 3.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 42%;\r\n  }\r\n  \r\n  form label {\r\n    margin: 0 0 12px;\r\n    display: block;\r\n    font-size: 1.25em;\r\n    color: #217093;\r\n    font-weight: 700;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  form input[type='email'], form input[type=\"text\"], form input[type='password'] {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0 1em 0;\r\n    background-color: #f3fafd;\r\n    border: solid 2px #217093;\r\n    border-radius: 4px;\r\n    -webkit-appearance: none;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n    height: 65px;\r\n    font-size: 1.55em;\r\n    color: #353538;\r\n    font-weight: 600;\r\n    font-family: inherit;\r\n    transition: box-shadow .2s linear, border-color .25s ease-out;\r\n  }\r\n  \r\n  form input[type='email']:focus, form input[type=\"text\"]:focus, form input[type='password']:focus {\r\n    outline: none;\r\n    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\r\n    border: solid 2px #4eb8dd;\r\n  }\r\n  \r\n  form input[type='email'], form input[type=\"text\"] {\r\n    padding: 14px 1em 0px;\r\n  }\r\n  \r\n  form button {\r\n    display: block;\r\n    margin: 0;\r\n    padding: .65em 1em 1em;\r\n    background-color: #4eb8dd;\r\n    border: none;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    box-shadow: none;\r\n    width: 100%;\r\n    height: 65px;\r\n    font-size: 1.55em;\r\n    color: #FFF;\r\n    font-weight: 600;\r\n    font-family: inherit;\r\n    transition: background-color .2s ease-out;\r\n  }\r\n  \r\n  form button:hover, form button:active {\r\n    background-color: #217093;\r\n  }\r\n  \r\n  form .inputGroup1 .helper {\r\n    position: absolute;\r\n    z-index: 1;\r\n    font-family: inherit;\r\n  }\r\n  \r\n  form .inputGroup1 .helper1 {\r\n    top: 0;\r\n    left: 0;\r\n    -webkit-transform: translate(1.4em, 2.6em) scale(1);\r\n            transform: translate(1.4em, 2.6em) scale(1);\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n    color: #217093;\r\n    font-size: 1.25em;\r\n    font-weight: 400;\r\n    opacity: .65;\r\n    pointer-events: none;\r\n    transition: opacity .2s linear, -webkit-transform .2s ease-out;\r\n    transition: transform .2s ease-out, opacity .2s linear;\r\n    transition: transform .2s ease-out, opacity .2s linear, -webkit-transform .2s ease-out;\r\n  }\r\n  \r\n  form .inputGroup1.focusWithText .helper {\r\n    /*input[type='email']:focus + .helper {*/\r\n    -webkit-transform: translate(1.4em, 2em) scale(0.65);\r\n            transform: translate(1.4em, 2em) scale(0.65);\r\n    opacity: 1;\r\n  }"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='wrapper' style=\"text-align:center\">\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <h2>Sign Up </h2>\r\n  <form (submit)='OnSubmit($event)'>\r\n      <div class=\"inputGroup inputGroup1\">\r\n          <label for=\"user.name\">Name</label>\r\n          <input type=\"text\"  name=\"user.name\"[(ngModel)]=\"user.name\"/><br/>\r\n          <label for=\"user.email\">Email</label>\r\n          <input type=\"email\"  name=\"user.email\"[(ngModel)]=\"user.email\"/><br/>\r\n          <label for=\"user.password\">Password</label>\r\n          <input type=\"password\"  name=\"user.password\"[(ngModel)]=\"user.password\"/><br/>\r\n          <label for=\"user.cpassword\">Confirm Password</label>\r\n          <input type=\"password\"  name=\"user.cpassword\"[(ngModel)]=\"user.cpassword\"/><br/>\r\n          <label for=\"user.lat\">Latitude</label>\r\n          <input type=\"text\"  name=\"user.lat\"[(ngModel)]=\"user.lat\"/><br/>\r\n          <label for=\"user.long\">Longitude</label>\r\n          <input type=\"text\"  name=\"user.long\"[(ngModel)]=\"user.long\"/><br/><br/>\r\n      </div>\r\n      <div class=\"inputGroup inputGroup3\">\r\n      <button type=\"submit\">Register</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_httpservice, _route) {
        this._httpservice = _httpservice;
        this._route = _route;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = { name: '', email: '', password: '', cpassword: '', lat: '', long: '' };
    };
    RegisterComponent.prototype.OnSubmit = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.user);
        var temp = this._httpservice.register_user(this.user);
        temp.subscribe(function (data) {
            console.log("returned this", data);
            localStorage.setItem('token', data['token']);
            _this._route.navigate(['/home'], data['user'].insertId);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/root-component/root-component.component.css":
/*!*************************************************************!*\
  !*** ./src/app/root-component/root-component.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n      box-sizing: border-box\r\n    }\r\n\r\n    /* Slideshow container */\r\n\r\n    .slideshow-container {\r\n      width: 1000px;\r\n      position: absolute;\r\n      display: inline;\r\n      margin: auto;\r\n      z-index: 1;\r\n    }\r\n\r\n    #login_button {\r\n      position: absolute;\r\n      margin-left: 100px;\r\n      margin-top: 179px;\r\n      z-index: 2;\r\n      height: 75px;\r\n    }\r\n\r\n    #register_button {\r\n      position: absolute;\r\n      margin-left: 100px;\r\n      margin-top: 377px;\r\n      z-index: 2;\r\n      height: 75px;\r\n    }\r\n\r\n    #title {\r\n      position: absolute;\r\n      margin-left: 271px;\r\n      margin-top: 550px;\r\n      z-index: 2;\r\n      height: 100px;\r\n    }\r\n\r\n    /* Hide the images by default */\r\n\r\n    .mySlides {\r\n      display: none;\r\n    }\r\n\r\n    /* Next & previous buttons */\r\n\r\n    .prev,\r\n    .next {\r\n      cursor: pointer;\r\n      position: absolute;\r\n      top: 50%;\r\n      width: auto;\r\n      margin-top: -22px;\r\n      padding: 16px;\r\n      color: white;\r\n      font-weight: bold;\r\n      font-size: 18px;\r\n      transition: 0.6s ease;\r\n      border-radius: 0 3px 3px 0;\r\n    }\r\n\r\n    /* Position the \"next button\" to the right */\r\n\r\n    .next {\r\n      right: 0;\r\n      border-radius: 3px 0 0 3px;\r\n    }\r\n\r\n    /* On hover, add a black background color with a little bit see-through */\r\n\r\n    .prev:hover,\r\n    .next:hover {\r\n      background-color: rgba(0, 0, 0, 0.8);\r\n    }\r\n\r\n    /* Caption text */\r\n\r\n    .text {\r\n      color: #f2f2f200;\r\n      font-size: 15px;\r\n      padding: 8px 12px;\r\n      position: absolute;\r\n      bottom: 8px;\r\n      width: 100%;\r\n      text-align: center;\r\n    }\r\n\r\n    /* Number text (1/3 etc) */\r\n\r\n    .numbertext {\r\n      color: #f2f2f2;\r\n      font-size: 12px;\r\n      padding: 8px 12px;\r\n      position: absolute;\r\n      top: 0;\r\n    }\r\n\r\n    /* The dots/bullets/indicators */\r\n\r\n    .dot {\r\n      cursor: pointer;\r\n      height: 15px;\r\n      width: 15px;\r\n      margin: 0 2px;\r\n      background-color: #bbb;\r\n      border-radius: 50%;\r\n      display: inline-block;\r\n      transition: background-color 0.6s ease;\r\n    }\r\n\r\n    .active,\r\n    .dot:hover {\r\n      background-color: #717171;\r\n    }\r\n\r\n    /* Fading animation */\r\n\r\n    .fade {\r\n      -webkit-animation-name: fade;\r\n      -webkit-animation-duration: 1.5s;\r\n      animation-name: fade;\r\n      animation-duration: 1.5s;\r\n    }\r\n\r\n    @-webkit-keyframes fade {\r\n      from {\r\n        opacity: .4\r\n      }\r\n      to {\r\n        opacity: 1\r\n      }\r\n    }\r\n\r\n    @keyframes fade {\r\n      from {\r\n        opacity: .4\r\n      }\r\n      to {\r\n        opacity: 1\r\n      }\r\n    }"

/***/ }),

/***/ "./src/app/root-component/root-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/root-component/root-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script>\r\n  var slideIndex = 1;\r\n  showSlides(slideIndex);\r\n\r\n  // Next/previous controls\r\n  function plusSlides(n) {\r\n    showSlides(slideIndex += n);\r\n  }\r\n\r\n  // Thumbnail image controls\r\n  function currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n  }\r\n\r\n  function showSlides(n) {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var dots = document.getElementsByClassName(\"dot\");\r\n    if (n > slides.length) { slideIndex = 1 }\r\n    if (n < 1) { slideIndex = slides.length }\r\n    for (i = 0; i < slides.length; i++) {\r\n      slides[i].style.display = \"none\";\r\n    }\r\n    for (i = 0; i < dots.length; i++) {\r\n      dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex - 1].style.display = \"block\";\r\n    dots[slideIndex - 1].className += \" active\";\r\n  }\r\n</script>\r\n\r\n\r\n<script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js'></script>\r\n<div class=\"slideshow-container\">\r\n  <img src='./assets/login.png' id='login_button' (click)='login_button()'>\r\n  <img src='./assets/register.png' id='register_button' (click)='register_button()'>\r\n  <img src='./assets/logo.png' id='title'>\r\n\r\n  <!-- Full-width images with number and caption text -->\r\n  <div class=\"mySlides fade\">\r\n    <div class=\"numbertext\">1 / 3</div>\r\n    <img src=\"./assets/running_1.jpeg\" style=\"width:100%\">\r\n    <div class=\"text\"></div>\r\n  </div>\r\n\r\n  <div class=\"mySlides fade\">\r\n    <div class=\"numbertext\"> / 3</div>\r\n    <img src=\"./assets/running_2.jpeg\" style=\"width:100%\">\r\n    <div class=\"text\"></div>\r\n  </div>\r\n\r\n  <div class=\"mySlides fade\">\r\n    <div class=\"numbertext\">3 / 3</div>\r\n    <img src=\"./assets/running_3.jpeg\" style=\"width:100%\">\r\n    <div class=\"text\"></div>\r\n  </div>\r\n\r\n  <!-- Next and previous buttons -->\r\n  <a class=\"prev\" (click)=\"plusSlides(-1)\">&#10094;</a>\r\n  <a class=\"next\" (click)=\"plusSlides(1)\">&#10095;</a>\r\n</div>\r\n<br>\r\n\r\n<!-- The dots/circles -->\r\n<div style=\"text-align:center\">\r\n  <span class=\"dot\" (click)=\"currentSlide(1)\"></span>\r\n  <span class=\"dot\" (click)=\"currentSlide(2)\"></span>\r\n  <span class=\"dot\" (click)=\"currentSlide(3)\"></span>\r\n</div>\r\n\r\n<app-root></app-root>\r\n<!-- <div id='gmap' style='width:80%;height:400px'></div> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/root-component/root-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/root-component/root-component.component.ts ***!
  \************************************************************/
/*! exports provided: RootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootComponent", function() { return RootComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootComponent = /** @class */ (function () {
    function RootComponent(_router) {
        this._router = _router;
        this.slideIndex = 1;
    }
    RootComponent.prototype.ngOnInit = function () {
        this.showSlides(this.slideIndex);
    };
    RootComponent.prototype.plusSlides = function (n) {
        this.showSlides(this.slideIndex += n);
    };
    RootComponent.prototype.currentSlide = function (n) {
        this.showSlides(this.slideIndex = n);
    };
    RootComponent.prototype.showSlides = function (n) {
        var i;
        var slides = document.getElementsByClassName('mySlides');
        var dots = document.getElementsByClassName('dot');
        if (n > slides.length) {
            this.slideIndex = 1;
        }
        if (n < 1) {
            this.slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[this.slideIndex - 1].style.display = 'block';
        dots[this.slideIndex - 1].className += ' active';
    };
    RootComponent.prototype.login_button = function () {
        this._router.navigate(['/login']);
    };
    RootComponent.prototype.register_button = function () {
        this._router.navigate(['/register']);
    };
    RootComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root-component',
            template: __webpack_require__(/*! ./root-component.component.html */ "./src/app/root-component/root-component.component.html"),
            styles: [__webpack_require__(/*! ./root-component.component.css */ "./src/app/root-component/root-component.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RootComponent);
    return RootComponent;
}());

// Next/previous controls
// Thumbnail image controls


/***/ }),

/***/ "./src/assets/login-animation.js":
/*!***************************************!*\
  !*** ./src/assets/login-animation.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var email = document.querySelector('#email'), password = document.querySelector('#password'), mySVG = document.querySelector('.svgContainer'), armL = document.querySelector('.armL'), armR = document.querySelector('.armR'), eyeL = document.querySelector('.eyeL'), eyeR = document.querySelector('.eyeR'), nose = document.querySelector('.nose'), mouth = document.querySelector('.mouth'), mouthBG = document.querySelector('.mouthBG'), mouthSmallBG = document.querySelector('.mouthSmallBG'), mouthMediumBG = document.querySelector('.mouthMediumBG'), mouthLargeBG = document.querySelector('.mouthLargeBG'), mouthMaskPath = document.querySelector('#mouthMaskPath'), mouthOutline = document.querySelector('.mouthOutline'), tooth = document.querySelector('.tooth'), tongue = document.querySelector('.tongue'), chin = document.querySelector('.chin'), face = document.querySelector('.face'), eyebrow = document.querySelector('.eyebrow'), outerEarL = document.querySelector('.earL .outerEar'), outerEarR = document.querySelector('.earR .outerEar'), earHairL = document.querySelector('.earL .earHair'), earHairR = document.querySelector('.earR .earHair'), hair = document.querySelector('.hair');
var caretPos, curEmailIndex, screenCenter, svgCoords, eyeMaxHorizD = 20, eyeMaxVertD = 10, noseMaxHorizD = 23, noseMaxVertD = 10, dFromC, eyeDistH, eyeLDistV, eyeRDistV, eyeDistR, mouthStatus = "small";

function getCoord(e) {
	var carPos = email.selectionEnd,
		div = document.createElement('div'),
		span = document.createElement('span'),
		copyStyle = getComputedStyle(email),
		emailCoords = {}, caretCoords = {}, centerCoords = {}
		;
	[].forEach.call(copyStyle, function (prop) {
		div.style[prop] = copyStyle[prop];
	});
	div.style.position = 'absolute';
	document.body.appendChild(div);
	div.textContent = email.value.substr(0, carPos);
	span.textContent = email.value.substr(carPos) || '.';
	div.appendChild(span);

	emailCoords = getPosition(email);							//console.log("emailCoords.x: " + emailCoords.x + ", emailCoords.y: " + emailCoords.y);
	caretCoords = getPosition(span);							//console.log("caretCoords.x " + caretCoords.x + ", caretCoords.y: " + caretCoords.y);
	centerCoords = getPosition(mySVG);							//console.log("centerCoords.x: " + centerCoords.x);
	svgCoords = getPosition(mySVG);
	screenCenter = centerCoords.x + (mySVG.offsetWidth / 2);		//console.log("screenCenter: " + screenCenter);
	caretPos = caretCoords.x + emailCoords.x;					//console.log("caretPos: " + caretPos);

	dFromC = screenCenter - caretPos; 							//console.log("dFromC: " + dFromC);
	var pFromC = Math.round((caretPos / screenCenter) * 100) / 100;
	if (pFromC < 1) {

	} else if (pFromC > 1) {
		pFromC -= 2;
		pFromC = Math.abs(pFromC);
	}

	eyeDistH = -dFromC * .05;
	if (eyeDistH > eyeMaxHorizD) {
		eyeDistH = eyeMaxHorizD;
	} else if (eyeDistH < -eyeMaxHorizD) {
		eyeDistH = -eyeMaxHorizD;
	}

	var eyeLCoords = { x: svgCoords.x + 84, y: svgCoords.y + 76 };
	var eyeRCoords = { x: svgCoords.x + 113, y: svgCoords.y + 76 };
	var noseCoords = { x: svgCoords.x + 97, y: svgCoords.y + 81 };
	var mouthCoords = { x: svgCoords.x + 100, y: svgCoords.y + 100 };
	var eyeLAngle = getAngle(eyeLCoords.x, eyeLCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
	var eyeLX = Math.cos(eyeLAngle) * eyeMaxHorizD;
	var eyeLY = Math.sin(eyeLAngle) * eyeMaxVertD;
	var eyeRAngle = getAngle(eyeRCoords.x, eyeRCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
	var eyeRX = Math.cos(eyeRAngle) * eyeMaxHorizD;
	var eyeRY = Math.sin(eyeRAngle) * eyeMaxVertD;
	var noseAngle = getAngle(noseCoords.x, noseCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
	var noseX = Math.cos(noseAngle) * noseMaxHorizD;
	var noseY = Math.sin(noseAngle) * noseMaxVertD;
	var mouthAngle = getAngle(mouthCoords.x, mouthCoords.y, emailCoords.x + caretCoords.x, emailCoords.y + 25);
	var mouthX = Math.cos(mouthAngle) * noseMaxHorizD;
	var mouthY = Math.sin(mouthAngle) * noseMaxVertD;
	var mouthR = Math.cos(mouthAngle) * 6;
	var chinX = mouthX * .8;
	var chinY = mouthY * .5;
	var chinS = 1 - ((dFromC * .15) / 100);
	if (chinS > 1) { chinS = 1 - (chinS - 1); }
	var faceX = mouthX * .3;
	var faceY = mouthY * .4;
	var faceSkew = Math.cos(mouthAngle) * 5;
	var eyebrowSkew = Math.cos(mouthAngle) * 25;
	var outerEarX = Math.cos(mouthAngle) * 4;
	var outerEarY = Math.cos(mouthAngle) * 5;
	var hairX = Math.cos(mouthAngle) * 6;
	var hairS = 1.2;

	TweenMax.to(eyeL, 1, { x: -eyeLX, y: -eyeLY, ease: Expo.easeOut });
	TweenMax.to(eyeR, 1, { x: -eyeRX, y: -eyeRY, ease: Expo.easeOut });
	TweenMax.to(nose, 1, { x: -noseX, y: -noseY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut });
	TweenMax.to(mouth, 1, { x: -mouthX, y: -mouthY, rotation: mouthR, transformOrigin: "center center", ease: Expo.easeOut });
	TweenMax.to(chin, 1, { x: -chinX, y: -chinY, scaleY: chinS, ease: Expo.easeOut });
	TweenMax.to(face, 1, { x: -faceX, y: -faceY, skewX: -faceSkew, transformOrigin: "center top", ease: Expo.easeOut });
	TweenMax.to(eyebrow, 1, { x: -faceX, y: -faceY, skewX: -eyebrowSkew, transformOrigin: "center top", ease: Expo.easeOut });
	TweenMax.to(outerEarL, 1, { x: outerEarX, y: -outerEarY, ease: Expo.easeOut });
	TweenMax.to(outerEarR, 1, { x: outerEarX, y: outerEarY, ease: Expo.easeOut });
	TweenMax.to(earHairL, 1, { x: -outerEarX, y: -outerEarY, ease: Expo.easeOut });
	TweenMax.to(earHairR, 1, { x: -outerEarX, y: outerEarY, ease: Expo.easeOut });
	TweenMax.to(hair, 1, { x: hairX, scaleY: hairS, transformOrigin: "center bottom", ease: Expo.easeOut });

	document.body.removeChild(div);
};

function onEmailInput(e) {
	getCoord(e);
	var value = e.target.value;
	curEmailIndex = value.length;

	// very crude email validation for now to trigger effects
	if (curEmailIndex > 0) {
		if (mouthStatus == "small") {
			mouthStatus = "medium";
			TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthMediumBG, shapeIndex: 8, ease: Expo.easeOut });
			TweenMax.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
			TweenMax.to(tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
			TweenMax.to([eyeL, eyeR], 1, { scaleX: .85, scaleY: .85, ease: Expo.easeOut });
		}
		if (value.includes("@")) {
			mouthStatus = "large";
			TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthLargeBG, ease: Expo.easeOut });
			TweenMax.to(tooth, 1, { x: 3, y: -2, ease: Expo.easeOut });
			TweenMax.to(tongue, 1, { y: 2, ease: Expo.easeOut });
			TweenMax.to([eyeL, eyeR], 1, { scaleX: .65, scaleY: .65, ease: Expo.easeOut, transformOrigin: "center center" });
		} else {
			mouthStatus = "medium";
			TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthMediumBG, ease: Expo.easeOut });
			TweenMax.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
			TweenMax.to(tongue, 1, { x: 0, y: 1, ease: Expo.easeOut });
			TweenMax.to([eyeL, eyeR], 1, { scaleX: .85, scaleY: .85, ease: Expo.easeOut });
		}
	} else {
		mouthStatus = "small";
		TweenMax.to([mouthBG, mouthOutline, mouthMaskPath], 1, { morphSVG: mouthSmallBG, shapeIndex: 9, ease: Expo.easeOut });
		TweenMax.to(tooth, 1, { x: 0, y: 0, ease: Expo.easeOut });
		TweenMax.to(tongue, 1, { y: 0, ease: Expo.easeOut });
		TweenMax.to([eyeL, eyeR], 1, { scaleX: 1, scaleY: 1, ease: Expo.easeOut });
	}
}

function onEmailFocus(e) {
	e.target.parentElement.classList.add("focusWithText");
	getCoord();
}

function onEmailBlur(e) {
	if (e.target.value == "") {
		e.target.parentElement.classList.remove("focusWithText");
	}
	resetFace();
}

function onPasswordFocus(e) {
	coverEyes();
}

function onPasswordBlur(e) {
	uncoverEyes();
}

function coverEyes() {
	TweenMax.to(armL, .45, { x: -93, y: 2, rotation: 0, ease: Quad.easeOut });
	TweenMax.to(armR, .45, { x: -93, y: 2, rotation: 0, ease: Quad.easeOut, delay: .1 });
}

function uncoverEyes() {
	TweenMax.to(armL, 1.35, { y: 220, ease: Quad.easeOut });
	TweenMax.to(armL, 1.35, { rotation: 105, ease: Quad.easeOut, delay: .1 });
	TweenMax.to(armR, 1.35, { y: 220, ease: Quad.easeOut });
	TweenMax.to(armR, 1.35, { rotation: -105, ease: Quad.easeOut, delay: .1 });
}

function resetFace() {
	TweenMax.to([eyeL, eyeR], 1, { x: 0, y: 0, ease: Expo.easeOut });
	TweenMax.to(nose, 1, { x: 0, y: 0, scaleX: 1, scaleY: 1, ease: Expo.easeOut });
	TweenMax.to(mouth, 1, { x: 0, y: 0, rotation: 0, ease: Expo.easeOut });
	TweenMax.to(chin, 1, { x: 0, y: 0, scaleY: 1, ease: Expo.easeOut });
	TweenMax.to([face, eyebrow], 1, { x: 0, y: 0, skewX: 0, ease: Expo.easeOut });
	TweenMax.to([outerEarL, outerEarR, earHairL, earHairR, hair], 1, { x: 0, y: 0, scaleY: 1, ease: Expo.easeOut });
}

function getAngle(x1, y1, x2, y2) {
	var angle = Math.atan2(y1 - y2, x1 - x2);
	return angle;
}

function getPosition(el) {
	var xPos = 0;
	var yPos = 0;

	while (el) {
		if (el.tagName == "BODY") {
			// deal with browser quirks with body/window/document and page scroll
			var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
			var yScroll = el.scrollTop || document.documentElement.scrollTop;

			xPos += (el.offsetLeft - xScroll + el.clientLeft);
			yPos += (el.offsetTop - yScroll + el.clientTop);
		} else {
			// for all other non-BODY elements
			xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			yPos += (el.offsetTop - el.scrollTop + el.clientTop);
		}

		el = el.offsetParent;
	}
	return {
		x: xPos,
		y: yPos
	};
}


function initialize() {

	email = document.querySelector('#email'), password = document.querySelector('#password'), mySVG = document.querySelector('.svgContainer'), armL = document.querySelector('.armL'), armR = document.querySelector('.armR'), eyeL = document.querySelector('.eyeL'), eyeR = document.querySelector('.eyeR'), nose = document.querySelector('.nose'), mouth = document.querySelector('.mouth'), mouthBG = document.querySelector('.mouthBG'), mouthSmallBG = document.querySelector('.mouthSmallBG'), mouthMediumBG = document.querySelector('.mouthMediumBG'), mouthLargeBG = document.querySelector('.mouthLargeBG'), mouthMaskPath = document.querySelector('#mouthMaskPath'), mouthOutline = document.querySelector('.mouthOutline'), tooth = document.querySelector('.tooth'), tongue = document.querySelector('.tongue'), chin = document.querySelector('.chin'), face = document.querySelector('.face'), eyebrow = document.querySelector('.eyebrow'), outerEarL = document.querySelector('.earL .outerEar'), outerEarR = document.querySelector('.earR .outerEar'), earHairL = document.querySelector('.earL .earHair'), earHairR = document.querySelector('.earR .earHair'), hair = document.querySelector('.hair');
	caretPos, curEmailIndex, screenCenter, svgCoords, eyeMaxHorizD = 20, eyeMaxVertD = 10, noseMaxHorizD = 23, noseMaxVertD = 10, dFromC, eyeDistH, eyeLDistV, eyeRDistV, eyeDistR, mouthStatus = "small";

	email.addEventListener('focus', onEmailFocus);
	email.addEventListener('blur', onEmailBlur);
	email.addEventListener('input', onEmailInput);
	password.addEventListener('focus', onPasswordFocus);
	password.addEventListener('blur', onPasswordBlur);
	TweenMax.set(armL, { x: -93, y: 220, rotation: 105, transformOrigin: "top left" });
	TweenMax.set(armR, { x: -93, y: 220, rotation: -105, transformOrigin: "top right" });
}

window.initialize = initialize;

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Rob\Documents\DojoAssignments\Mean\Project Week\Runningbuddy\angularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map