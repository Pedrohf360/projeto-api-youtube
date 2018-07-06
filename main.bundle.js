webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nhtml, body {\n    background: #eee;\n    position: relative;\n}\n\n.imgIcon {\n    width: 26%;\n    position: relative;\n    margin-left: 38%;\n    margin-top: 7%;\n}\n\n.nav {\n    border-bottom: 1px solid #EAEAEB;\n    text-align: right;\n    height: 70px;\n    line-height: 70px;\n    margin-right: 4% !important;\n}\n\n.menu {\n    margin: 0 30px 0 0;\n}\n\n.menu button {\n    clear: right;\n    text-decoration: none;\n    color: gray;\n    margin: 0 10px;\n    line-height: 70px;\n    color: white;\n    font-weight: 500;\n}\n\nlabel {\n    margin: 0 40px 0 0;\n    font-size: 26px;\n    line-height: 70px;\n    display: none;;\n    width: 26px;\n    float: right;\n}\n\n#toggle {\n    display: none;\n}\n\n@media only screen and (max-width: 760px) {\n    label {\n        display: block;\n        cursor: pointer;\n    }\n    .menu {\n        text-align: center;\n        width: 100%;\n        display: none;\n    }\n\n    .menu button {\n        display: block;\n        border-bottom: 1px solid #EAEAEB;\n        margin: 0;\n        z-index: 10;\n        color: black;\n        background-color: yellow;\n    }\n\n    #toggle:checked + .menu {\n        display: block;\n    }\n\n    .iconTitle  {\n        display: none;\n    }\n\n    .title {\n        display: none;\n    }\n}\n\n/* menu base styles */\n\n/* \nnav {\n    position: absolute;\n    right: 4%;\n}\n\nnav ul {\n    list-style-type: none;\n    padding: 0;\n}\n\nnav a {\n    text-decoration: none;\n    color: #fff;\n    display: block;\n    padding: 10px;\n} */\n\n/* flex styles */\n\n/* \n@media screen and (min-width: 768px) {\n    nav ul {\n        background-color: red;\n        display: flex;\n        justify-content: flex-end;\n    }\n\n    nav li {\n        flex: 1 1 0;\n    }\n} */\n\n.mg-em-tp-1 {\n    margin-top: 1em;\n}\n\n.nomargin {\n    margin: 0;\n}\n\n.nomarginLeft {\n    margin-left: 0;\n}\n\n.nomarginTop {\n    margin-top: 0;\n}\n\n.margin10 {\n    margin: 10px;\n}\n\n.marginTopLeft {\n    margin-top: 3%;\n    margin-left: 3%;\n}\n\n.margin-left-1 {\n    margin-left: 1%;\n}\n\n.notbold {\n    font-weight: normal;\n}\n\n.mg-em-1 {\n    margin: 1em;\n}\n\n.right {\n    position: absolute;\n    text-align: right;\n    margin-right: 15em;\n    margin-top: 0;\n\n    right: 20px;\n}\n\napp-header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-header></app-header>\n\n    <app-content></app-content>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("./node_modules/ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        this.translate = translate;
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('pt');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__("./node_modules/ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_module__ = __webpack_require__("./src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__youtube_api_service__ = __webpack_require__("./src/app/youtube-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_2__content_content_component__["a" /* ContentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["b" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["a" /* TranslateLoader */],
                    useFactory: function (http) { return new __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["d" /* TranslateStaticLoader */](http, '/assets/i18n', '.json'); },
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]]
                })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__youtube_api_service__["a" /* YoutubeApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"mg-em-1\">\n    <input matInput (keydown)='receiveText($event)' placeholder=\"{{ 'typeHere' | translate }}\" type=\"text\">\n</mat-form-field>\n\n<button mat-raised-button class=\"margin10\" (click)=\"fetchVideos()\">{{ 'search' | translate }}</button>\n\n<div class=\"row mg-em-tp-1\" *ngFor=\"let video of videosInfo; let i = index\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12\">\n        <mat-card>\n            <div class=\"row\">\n                <div class=\"col-md-4 marginTopLeft\">\n                    <img mat-card-image src=\"{{ video.snippet.thumbnails.high.url }}\">\n\n                    <mat-card-actions>\n                        <button mat-button (click)=\"likeVideo(video)\" *ngIf=\"!video.liked\">\n                            <i class=\"fas fa-heart margin10\" [style.color]=\"'black'\"></i>Like\n                        </button>\n                        <button mat-button (click)=\"likeVideo(video)\" *ngIf=\"video.liked\">\n                            <i class=\"fas fa-heart margin10\" [style.color]=\"'red'\"></i>Like\n                        </button>\n                        <button mat-button (click)=\"deleteItem(i)\">\n                            <i class=\"fas fa-trash margin10\"></i>Delete\n                        </button>\n                    </mat-card-actions>\n                </div>\n                <div class=\"col-md-6\">\n                    <h2 class=\"margin-left-1\">{{ video.snippet.title }}</h2>\n                    <h5 class=\"margin-left-1\">{{ 'channel' | translate }}:\n                        <span class=\"notbold\"> {{ video.snippet.channelTitle }} </span>\n                    </h5>\n                    <mat-card-content class=\"margin-left-1\">\n                        <p>\n                            <strong>{{ 'description' | translate }}:</strong> {{ video.snippet.description }}</p>\n                    </mat-card-content>\n                </div>\n            </div>\n        </mat-card>\n    </div>\n</div>\n\n<mat-toolbar color=\"primary\" class=\"mg-em-tp-1\">\n    <mat-toolbar-row>\n        <p>{{ 'developedBy' | translate }}: Pedro H.</p>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__youtube_api_service__ = __webpack_require__("./src/app/youtube-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContentComponent = /** @class */ (function () {
    function ContentComponent(yt) {
        this.yt = yt;
        this.showSpinner = false;
        this.textSearch = '';
    }
    ContentComponent.prototype.fetchVideos = function () {
        var _this = this;
        this.yt.searchVideos((this.textSearch))
            .then(function (json) {
            _this.infoApi = json;
            _this.videosInfo = _this.infoApi['items'];
        })
            .catch(function () {
            console.log('request error');
        });
    };
    ContentComponent.prototype.likeVideo = function (video) {
        if (video.liked != null) {
            video.liked = !video.liked;
        }
        else {
            video.liked = true;
        }
    };
    ContentComponent.prototype.deleteItem = function (index) {
        this.videosInfo.splice(index, 1);
    };
    ContentComponent.prototype.receiveText = function (e) {
        this.textSearch = e.target.value;
    };
    ContentComponent.prototype.ngOnChanges = function (changes) {
        var textSearch = changes.textSearch;
        this.fetchVideos();
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content/content.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__youtube_api_service__["a" /* YoutubeApiService */]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item (click)=\"switchLanguage('pt')\">\n        <img src=\"../assets/images/brazil.png\" class=\"imgIcon\" alt=\"brazilian flag\">\n      </button>\n      <button mat-menu-item (click)=\"switchLanguage('en')\">\n        <img src=\"../assets/images/eua.png\" class=\"imgIcon\" alt=\"eua flag\">\n      </button>\n    </mat-menu>\n    <mat-icon class=\"iconTitle fab fa-youtube margin10\"></mat-icon>\n\n    <h3 class=\"title col-md-5\">{{ 'literalData.internshipProject' | translate }} - Group Mart</h3>\n    <div class=\"nav right\">\n      <label for=\"toggle\">&#9776;</label>\n      <input type=\"checkbox\" id=\"toggle\" />\n      <div class=\"menu\">\n\n        <button mat-button (click)=\"openSnackBar('literalData.contact', 'close', 3000)\">{{ 'contact' | translate }}</button>\n        <button mat-button (click)=\"openSnackBar('projectDescription', 'close', 6000)\">{{ 'about' | translate }}</button>\n        <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n\n      </div>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__("./node_modules/ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(snackBar, translate) {
        this.snackBar = snackBar;
        this.translate = translate;
    }
    HeaderComponent.prototype.openSnackBar = function (message, action, time) {
        if (!time) {
            time = 2000;
        }
        this.snackBar.open(this.translate.instant(message), this.translate.instant(action), {
            duration: time,
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["c" /* TranslateService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatIconModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatIconModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/youtube-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeApiService = /** @class */ (function () {
    function YoutubeApiService(http) {
        this.http = http;
        this.apiKey = 'AIzaSyDQ4Sc6AsHF5ai-wHlEV2YV8unurZmJkQ8';
    }
    // searchVideos(textSearch) {
    //   return this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey +
    //                         '&q=' + textSearch + '&part=snippet,id&maxResults=20')
    //     .map((res: Response) => res.json());
    // }
    YoutubeApiService.prototype.searchVideos = function (textSearch) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.http.get('https://www.googleapis.com/youtube/v3/search?key=' + _this.apiKey +
                '&q=' + textSearch + '&part=snippet,id&maxResults=20')
                .map(function (res) { return res.json(); })
                .toPromise());
        });
    };
    YoutubeApiService.prototype.setCurrentText = function (text) {
        this.currentText = text;
    };
    YoutubeApiService.prototype.getCurrentText = function () {
        return this.currentText;
    };
    YoutubeApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], YoutubeApiService);
    return YoutubeApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map