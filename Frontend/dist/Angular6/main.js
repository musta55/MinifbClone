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

module.exports = "\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// built-in






// components



//routes




//other



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
                _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_14__["PostsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_8__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [{
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                    multi: true
                }, _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _shared_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
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



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.userService.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
            });
            return next.handle(clonedreq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) { }, function (err) {
                if (err.error.auth == false) {
                    _this.router.navigateByUrl('/login');
                }
            }));
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    width: auto;\n    margin: 10px auto;\n    align-items: center;\n}\n\n.stories{\n    margin-left: 25%;\n    width: 50rem;\n    height: 15rem;\n    overflow-x: auto;\n    /* display:inline-flex; */\n    display: flex;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n}\n\n.card{\n    flex: 0 0 auto;\n}\n\n.card, .card-img, .card-img-overlay{\n    border: transparent;\n    border-radius: 10px;\n}\n\n.others{\n    display:inline-flex;\n    margin-top: 10px;\n    margin-right: 13px;\n    width: 7.5rem; \n    height: 12rem; \n    background-color: #3b5998; \n    box-shadow: 0px 3px 3px 0px rgba(0,0,0,0.25);\n}\n\n.mine{\n    margin-top: 10px;\n    margin-right: 20px;\n    width: 7.5rem; \n    height: 12rem; \n    background-color: #3b5998; \n    box-shadow: inset 0px 0px 3px 0px #FFFFFF;\n}\n\n.card-text{\n    background-color: transparent;\n}\n\n.card-img, .card-body{\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.grad{\n    background-image: linear-gradient(#3b589800, #2e4b88);\n}\n\nh6{\n    font-size: 15px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.dot {\n    height: 60px;\n    width: 60px;\n    background-color: rgb(255, 255, 255);\n    border-radius: 50%;\n    border: transparent;\n    display: inline-block;\n    justify-content: center;\n    position: absolute;\n    top: 60%;\n  }\n\n.center-dot{\n    display: flex;\n    justify-content: center; \n  }\n\nh2{\n    margin-top: 0px;\n    font-size: 50px;\n    /* position: absolute; */\n    text-align: center;\n}\n\n.write-post{\n    width: 80rem;\n    height: 5rem;\n    margin-top: 50px;\n    margin-left: 80px;\n    text-align: center;\n    display: inline-flex;\n}\n\n#post{\n    /* margin-top: 5%; */\n    margin-left:auto;\n    margin-right:auto;\n    height: 3rem;\n    width: 50rem;\n    background: rgba(230, 216, 216, 0.14);\n    border-radius: 30px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5.4px);\n    -webkit-backdrop-filter: blur(5.4px);\n    border: 1px solid rgba(255, 255, 255, 0.29);\n    padding-left: 30px;\n    color: white;\n}\n\n#post:focus{\n    background: rgba(255, 255, 255, 0.14);\n    border-radius: 30px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5.4px);\n    -webkit-backdrop-filter: blur(5.4px);\n    border: 1px solid rgba(255, 255, 255, 0.29);\n    color: white;\n}\n\n::-webkit-input-placeholder { \n    color: rgb(8, 8, 8);\n    opacity: 1;\n}\n\n:-ms-input-placeholder { \n    color: rgb(8, 8, 8);\n    opacity: 1;\n}\n\n::-ms-input-placeholder { \n    color: rgb(8, 8, 8);\n    opacity: 1;\n}\n\n::placeholder { \n    color: rgb(8, 8, 8);\n    opacity: 1;\n}\n\n.next-arrow{\n    margin-top: 10%;\n}\n\n/* .posts{\n    padding: 25px 25%;\n} */\n\n.single-post{\n    margin-bottom: 20px;\n    padding: 20px;\n    width: 50rem;\n    background: rgba(255, 255, 255, 0.14);\n    border-radius: 15px;\n    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n    backdrop-filter: blur(5.4px);\n    -webkit-backdrop-filter: blur(5.4px);\n    border: 1px solid rgba(255, 255, 255, 0.29);\n}\n\n.propic-name{\n    display: inline-flex;\n    margin: -15px 0 20px -15px;\n}\n\n/* .name{\n    margin-top: 10%;\n} */\n\n.pro-pic{\n    margin: 0px 15px;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 50px;\n    width: 50px;\n}\n\n.logout{\n\tposition:fixed;\n\twidth:60px;\n\theight:60px;\n\tbottom:40px;\n\tright:40px;\n\tbackground-color:rgb(255, 255, 255);\n\tcolor:#FFF;\n\tborder-radius:50px;\n    border-color: transparent;\n\ttext-align:center;\n    color: #2e4b88;\n}\n\n.propic-self{\n    float: right;\n    margin: 15px 50px 10px 0;\n    border-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    height: 45px;\n    width: 45px;\n}\n\n.white-head{\n    background: #21386b;\n    box-shadow: 0 4px 10px rgba(250, 250, 250, 0.1);\n    backdrop-filter: blur(5.4px);\n    -webkit-backdrop-filter: blur(5.4px);\n    /* border-bottom: 1px solid #132347; */\n    height: 70px;\n    width: 100%;\n}\n\n#fbLogo{\n    margin: 10px 0px 5px 40px;\n    height: 50px;\n    width: auto;\n    float: left;\n}\n\n#storyUpload{\n    display: block;\n    visibility: hidden;\n    height: 0;\n    width: 0;\n}\n\n/*Scrollbar custommize*/\n\n.stories{\n    scrollbar-color: #D4AA70 #e4e4e4;\n}\n\n.stories::-webkit-scrollbar {\n    width: 15px;\n    height: 5px;\n}\n\n.stories::-webkit-scrollbar-track {\n    background-color: #e4e4e4;\n    border-radius: 100px;\n}\n\n.stories::-webkit-scrollbar-thumb {\n    background-color: #538cd8f1;\n    border-radius: 100px;\n}\n\n.posts{\n    height: 150px;\n    width: 900px;\n    margin: 30px;\n    background-color: #c7d3ebf1;\n}\n\n.form-group{\n    height: 90%;\n    width:90%;\n}\n\n.stories{\n    display: inline-flex;\n    width: 60rem;\n    margin-left: 20px;\n}\n\n.showpost{\n    margin: 40px;\n}"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"page-header\"> Mini Facebook</h2>\n    <form (submit)=\"addPost()\">\n        <div class=\"form-group\">\n\n            <h6 class=\"page-header\"> {{userName}}</h6>\n            <input type=\"text\" [(ngModel)]=\"Posts.post_name\" name=\"post_name\" class=\"form-control posts\"\n                placeholder=\"What's on your mind? \" required />\n\n            <!-- story r template -->\n\n        </div>\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Post\">\n    </form>\n\n    <hr>\n\n    <!-- Story show -->\n    <div class=\"stories\">\n\n        <div class=\"card bg-dark text-white mine\">\n            <input type=\"file\" id=\"storyUpload\" accept=\"image/*\" (change)=\"onFileSelected($event)\" #file>\n            <div class=\"card-img\" alt=\"...\"></div>\n            <button class=\"btn card-img\" (click)=\"file.click()\">\n                <h5 class=\"card-title\" style=\"color:#7895d3;\">Add Story</h5>\n            </button>\n\n        </div>\n        <div *ngFor=\"let story of fetchedStories\">\n            <div class=\"card bg-dark text-white others\">\n                <img src={{story.storyUUID}}  class=\"card-img\" alt=\"...\">\n                <div class=\"card-img-overlay grad\">\n                    <h6 class=\"card-title\" style=\"margin-top:8.5rem;\">{{story.name}}</h6>\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\"next-arrow\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" fill=\"white\"\n                class=\"bi bi-arrow-right-circle-fill\" viewBox=\"0 0 16 16\">\n                <path\n                    d=\"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z\" />\n            </svg>\n        </div>\n    </div>\n\n\n    <!-- Facebook post template -->\n\n    <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n    <div class=\"showPost\">\n        <div class=\"page-timeline\">\n            <div class=\"vtimeline-point\">\n                <div class=\"vtimeline-block\" *ngFor=\"let post of Posts\">\n\n                    <a href=\"#\">\n                        <h3>{{post.first_name}}</h3>\n                    </a>\n\n                    <p>\n                        {{post.post_name}} </p><br>\n\n                </div>\n            </div>\n        </div>\n\n        <button class=\"btn btn-danger\" (click)=\"onLogout()\">Log Out</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, userService, router) {
        this.postService = postService;
        this.userService = userService;
        this.router = router;
        this.Posts = [];
        this.userName = "";
        this.question = "?";
        this.fileName = '';
        this.file = null;
        this.newStory = {
            name: '',
            story: '',
            time: new Date()
        };
        this.minioHost = "storyobjectdb";
        this.port = "9000";
        this.bucket = "minifb";
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Fetch userDetails from UserService
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
            _this.userName = _this.userDetails.fullName;
            _this.fetchPosts();
            _this.fetchStory();
        }, function (err) {
            console.log(err);
        });
        //Fetch Post
    };
    PostsComponent.prototype.addPost = function () {
        var _this = this;
        var newPost = {
            first_name: this.userDetails.fullName,
            post_name: this.Posts.post_name
        };
        this.postService.addPost(newPost)
            .subscribe(function (post) {
            _this.Posts.push(post);
            _this.fetchPosts();
        });
    };
    PostsComponent.prototype.fetchPosts = function () {
        var _this = this;
        return this.postService.getPosts().subscribe(function (data) {
            _this.Posts = data;
            var filtered = _this.Posts.filter(function (post) {
                return post.first_name != _this.userDetails.fullName;
            });
            _this.Posts = filtered;
            var slicedArray = _this.Posts.slice(0, 10);
            _this.Posts = slicedArray;
            //  console.log(this.Posts)
        });
    };
    PostsComponent.prototype.fetchStory = function () {
        var _this = this;
        this.postService.getStories().subscribe(function (data) {
            _this.allStory = data.body;
            _this.fetchedStories = _this.allStory;
            var filtered = _this.fetchedStories.filter(function (story) {
                return story.name != _this.userDetails.fullName;
            });
            _this.fetchedStories = filtered;
            var slicedArray = _this.fetchedStories.slice(0, 10);
            _this.fetchedStories = slicedArray;
            for (var i = 0; i < _this.fetchedStories.length; i++) {
                _this.fetchedStories[i].storyUUID = "http://localhost:1000/story/" + _this.fetchedStories[i].storyUUID;
                console.log(_this.fetchedStories[i].storyUUID);
                //   this.fetchedStories[i].storyUUID = "http://localhost:9001/story/";
                console.log(_this.fetchedStories[i]);
                console.log("Eta frontend er story part");
            }
        });
    };
    PostsComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        this.file = event.target.files[0];
        if (this.file) {
            var formData = new FormData();
            formData.append('files', this.file, this.file.name);
            formData.append('name', this.userName);
            this.postService.postStory(formData).subscribe(function (res) {
                if (res) {
                    console.log('Story Done');
                }
                _this.fetchStory();
            });
        }
    };
    PostsComponent.prototype.onLogout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")],
            providers: [_shared_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"]]
        }),
        __metadata("design:paramtypes", [_shared_post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"], _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/sign-up/sign-up.component */ "./src/app/user/sign-up/sign-up.component.ts");
/* harmony import */ var _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sign-in/sign-in.component */ "./src/app/user/sign-in/sign-in.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");





var appRoutes = [
    {
        path: 'signup', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_1__["SignUpComponent"] }]
    },
    {
        path: 'login', component: _user_user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"],
        children: [{ path: '', component: _user_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] }]
    },
    // {
    //     path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
    // },
    {
        path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'story', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: Post, PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Post = /** @class */ (function () {
    function Post() {
        this._id = "";
        this.first_name = "";
        this.post_name = "";
    }
    return Post;
}());

var PostService = /** @class */ (function () {
    // headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // });
    // storyHeader = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    // });
    function PostService(httpClient) {
        this.httpClient = httpClient;
        this.endPointPost = 'http://localhost:1000/status';
        this.endPointStory = 'http://localhost:1000/story';
        this.httpHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    PostService.prototype.getPosts = function () {
        // return this.httpClient.get<Post>(this.endPoint + '/api/posts')
        //   .pipe(
        //     retry(1),
        //     catchError(this.httpError)
        //   )
        return this.httpClient.get(this.endPointPost + '')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.httpError));
    };
    PostService.prototype.addPost = function (post) {
        console.log("hoy kina");
        return this.httpClient.post(this.endPointPost + '', JSON.stringify(post), this.httpHeader)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.httpError));
    };
    PostService.prototype.postStory = function (story) {
        return this.httpClient.post(this.endPointStory + '', story, {});
        // return this.httpClient.post(this.endPointStory + '', story, { headers: this.storyHeader });
    };
    PostService.prototype.getStories = function () {
        return this.httpClient.get(this.endPointStory, { observe: "response" });
    };
    // return this.httpClient.get<story>(this.endPointStory + '', { headers: this.headers, observe: "response" });
    PostService.prototype.httpError = function (error) {
        var msg = '';
        if (error.error instanceof ErrorEvent) {
            // client side error
            msg = error.error.message;
        }
        else {
            // server side error
            msg = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(msg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(msg);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        //HttpMethods
        this.endPointUser = 'http://localhost:1000/authenticate';
    }
    UserService.prototype.postUser = function (user) {
        return this.http.post(this.endPointUser + '/register', user, this.noAuthHeader);
    };
    UserService.prototype.login = function (authCredentials) {
        return this.http.post(this.endPointUser + '/login', authCredentials, this.noAuthHeader);
    };
    UserService.prototype.getUserProfile = function () {
        return this.http.get(this.endPointUser + '/userProfile');
    };
    //Helper Methods
    UserService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    UserService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    UserService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <table *ngIf=\"userDetails\" class=\"table-fill\">\n  <thead>\n      <tr>\n          <th colspan=\"2\" class=\"text-center\">User Profile</th>\n      </tr>\n  </thead>\n  <tbody>\n      <tr>\n          <td>First Name</td>\n          <td>{{userDetails.fullName.split(' ')[0]}}</td>\n      </tr>\n      <tr>\n          <td>Last Name</td>\n          <td>{{userDetails.fullName.split(' ')[1]}}</td>\n      </tr>\n      <tr>\n          <td>Email</td>\n          <td>{{userDetails.email}}</td>\n      </tr>\n      <tr>\n          <td colspan=\"2\" class=\"text-center\">\n              <input type=\"button\" (click)=\"onLogout()\" value=\"Logout\" />\n          </td>\n      </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
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



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserProfile().subscribe(function (res) {
            _this.userDetails = res['user'];
        }, function (err) {
            console.log(err);
        });
    };
    UserProfileComponent.prototype.onLogout = function () {
        this.userService.deleteToken();
        this.router.navigate(['/login']);
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n <img src=\"assets/img/login.png\" id=\"icon\" alt=\"User Icon\" />\n  </div>\n  <form #signInForm=\"ngForm\" (ngSubmit)=\"signInForm.valid && onSubmit(signInForm)\">\n    <input type=\"text\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"model.email\" placeholder=\"Email\" [pattern]=\"emailRegex\" required\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !email.valid }\">\n    <div *ngIf=\"signInForm.submitted && email.errors?.pattern\">\n      <label class=\"validation-message\">Invalid email address.</label>\n    </div>\n    <input type=\"password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" placeholder=\"Password\" required minlength=\"4\"\n      [ngClass]=\"{'invalid-textbox' :signInForm.submitted && !password.valid }\">\n    <div *ngIf=\"signInForm.submitted && password.errors?.minlength\">\n      <label class=\"validation-message\">Minimum 4 characters.</label>\n    </div>\n    <input type=\"submit\" value=\"Sign In\">\n  </form>\n  <!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n    {{serverErrorMessages}}\n  </div>"

/***/ }),

/***/ "./src/app/user/sign-in/sign-in.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-in/sign-in.component.ts ***!
  \***************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignInComponent = /** @class */ (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = {
            email: '',
            password: ''
        };
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignInComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn())
            this.router.navigateByUrl('/post');
        //  this.router.navigateByUrl('/userprofile');
    };
    SignInComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.login(form.value).subscribe(function (res) {
            _this.userService.setToken(res['token']);
            _this.router.navigateByUrl('/posts');
            //     this.router.navigateByUrl('/userprofile');
        }, function (err) {
            _this.serverErrorMessages = err.error.message;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/user/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/user/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"/assets/img/signup.png\" id=\"icon\" alt=\"User Icon\" />\n</div>\n<form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n  <input type=\"text\" #fullName=\"ngModel\" [(ngModel)]=\"userService.selectedUser.fullName\" name=\"fullName\" placeholder=\"Full Name\"\n  required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !fullName.valid }\">\n  <div *ngIf=\"signUpForm.submitted && !fullName.valid\">\n    <label class=\"validation-message\">This field is required.</label>\n  </div>\n  <input type=\"text\" #email=\"ngModel\" [(ngModel)]=\"userService.selectedUser.email\" name=\"email\" placeholder=\"Email\"\n  required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\">\n  <div *ngIf=\"signUpForm.submitted && email.errors\">\n    <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n  </div>\n  <input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"userService.selectedUser.password\" name=\"password\" placeholder=\"Password\"\n  minlength=\"4\" required [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\">\n  <div *ngIf=\"signUpForm.submitted && password.errors\">\n    <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n    <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n  </div>\n  <input type=\"submit\" value=\"Sign Up\">\n</form>\n\n<!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n  Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>"

/***/ }),

/***/ "./src/app/user/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(userService) {
        this.userService = userService;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.userService.postUser(form.value).subscribe(function (res) {
            _this.showSucessMessage = true;
            setTimeout(function () { return _this.showSucessMessage = false; }, 4000);
            _this.resetForm(form);
        }, function (err) {
            if (err.status === 422) {
                _this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                _this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        });
    };
    SignUpComponent.prototype.resetForm = function (form) {
        this.userService.selectedUser = {
            fullName: '',
            email: '',
            password: ''
        };
        form.resetForm();
        this.serverErrorMessages = '';
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/user/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/user/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\">\n  \n  </div>\n  <div class=\"column\">\n\n    <div class=\"wrapper\"></div>\n \n      <div id=\"formContent\">\n        <h2 class=\"underlineHover\"  routerLink=\"/login\"  routerLinkActive=\"active\"> Sign In </h2>\n        <h2 class=\"underlineHover\"  routerLink=\"/signup\"  routerLinkActive=\"active\">Sign Up </h2>\n        <router-outlet></router-outlet>\n      </div>\n   \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



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
    production: false,
    apiBaseUrl: 'http://localhost:9001/authenticate/'
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

module.exports = __webpack_require__(/*! /home/agentsmith/6thSem/distributedsystem/MinifbClone/Frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map