webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"background:url(assets/images/banner.jpg); background-size:cover;width:100%;height:200px; background-position:center bottom\">\n  <div class=\"container\">\n  <div class=\"row\">\n    \n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-50\">\n    <div class=\" myself text-light\">\n  <h1> About</h1>\n  \n</div>\n  </div>\n  \n  </div>\n  </div>\n  </section>\n\n<section id=\"cv\" class=\"spacer-md bg-lite\">\n    <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-md-8 col-sm-12 col-xs-12\">\n    <article>\n     \n    <p class=\"lead\">Hello, I'm G Santosh Laxman a Webdesigner and UIDeveloper specializing in web design. </p>\n    <ul>\n    <li>Having 7 years of hands-on experience in Web Designing technologies that includes HTML, HTML5, CSS3, Bootstrap, Javascript, jQuery, Adobe Photoshop and AngularJS.</li>\n    <li>Expertise in CSS coding and Photoshop designing.</li>\n    <li>Extensive knowledge of current web standards, HTML5, CSS3.</li>\n    <li>Familiar with Responsive Designing layout for various web pages.</li>\n    <li>Implemented Bootstrap Technology in more than 120 templates.</li>\n    <li>In-depth knowledge of creating workable links between different portions of pages</li>\n    <li>Ability to identify core requirements of a successful web page navigation</li>\n    <li>Goal oriented and ability to work effectively in any environment.</li>\n    </ul>\n    </article>\n    \n    </div>\n    <div class=\"col-md-4 col-sm-12 col-xs-12\">\n      <img src=\"assets/images/aboutimg.jpg\"/>\n\n    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#sanNavbar\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Santosh | UX/UI Developer</a>\n      </div>\n  \n      <!-- Collect the nav links, forms, and other content for toggling -->\n      <div class=\"collapse navbar-collapse\" id=\"sanNavbar\">\n        \n         \n        <ul class=\"nav navbar-nav navbar-right\">\n          <li class=\"active\" routerLinkActive=\"active\"><a routerLink=\"home\">Home</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"about\">About</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"portfolio\">Portfolio</a></li>\n          <li routerLinkActive=\"active\"><a routerLink=\"contact\">Contact</a></li>\n           \n        </ul>\n      </div><!-- /.navbar-collapse -->\n    </div><!-- /.container-fluid -->\n  </nav>\n  \n<router-outlet></router-outlet>\n\n<footer>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n    All Rights Reserved\n</div>\n</div>\n</div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_5__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"background:url(assets/images/banner.jpg); background-size:cover;width:100%;height:200px; background-position:center bottom\">\n  <div class=\"container\">\n  <div class=\"row\">\n    \n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-50\">\n    <div class=\" myself text-light\">\n  <h1> Contact</h1>\n  \n</div>\n  </div>\n  \n  </div>\n  </div>\n  </section>\n\n<section id=\"cv\" class=\"spacer-md bg-lite\">\n    <div class=\"container\">\n    <div class=\"row\">\n    <div class=\"col-sm-12\" style=\"min-height:400px;\">\n    <article>\n    <h4>Contact</h4>\n     <div>Phone:91+7893213029</div>\n     \n    </article>\n    \n    </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"background:url(assets/images/banner.jpg); background-size:cover;width:100%;height:500px; background-position:top top\">\n  <div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-6\"></div>\n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center mt-100\">\n    <div class=\" myself\" style=\"transform:rotate(13deg); margin-left:20%;\">\n  <h1> I'm Ganti Santosh</h1>\n  <h3> @Techmagica Business Solutions </h3>\n  <p>as a </p>\n  <h3>Senior Web Designer</h3>\n  <div>(UI Designer / UI Developer)</div>\n</div>\n  </div>\n  \n  \n  </div>\n  </div>\n  </section>\n\n  <section>\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-sm-12 col-md-12\">\n              <div class=\"page-header\">\n                  <h1>My Skills include </h1>\n                </div>\n\n          </div>\n        </div>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-md-3\">\n                <div class=\"thumbnail\">\n                  <img src=\"assets/images/html5.jpg\" alt=\"HTML5\" style=\"width:100%;\" >\n                  <div class=\"caption\">\n                    <h3>HTML5</h3>\n                    <p class=\"lead\">Having hand-on experience and extensive knowledge of current web standards, HTML5.</p>\n                   \n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-6 col-md-3\">\n                  <div class=\"thumbnail\">\n                    <img src=\"assets/images/css3.jpg\" alt=\"CSS3\">\n                    <div class=\"caption\">\n                      <h3>CSS3</h3>\n                      <p class=\"lead\">Having hand-on experience and  extensive knowledge of current web standards,  CSS3.</p>\n                     \n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-6 col-md-3\">\n                    <div class=\"thumbnail\">\n                      <img src=\"assets/images/jquery.jpg\" alt=\"jQuery\">\n                      <div class=\"caption\">\n                        <h3>jQuery</h3>\n                        <p class=\"lead\">Having hand-on experience and  extensive knowledge of current web standards, jQuery.</p>\n                        \n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6 col-md-3\">\n                      <div class=\"thumbnail\">\n                        <img src=\"assets/images/photoshop.jpg\" alt=\"Photoshop\">\n                        <div class=\"caption\">\n                          <h3>Photoshop</h3>\n                          <p class=\"lead\">Having hand-on experience and  extensive knowledge of current web standards, Photoshop.</p>\n                         \n                        </div>\n                      </div>\n                    </div>\n            </div>\n            </div>\n  </section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n\n\n<h1 class=\"text-center\" style=\"text-align:center\">\n  page-not-found works!\n</h1>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<section style=\"background:url(assets/images/banner.jpg); background-size:cover;width:100%;height:200px; background-position:center bottom\">\n  <div class=\"container\">\n  <div class=\"row\">\n    \n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center mt-50\">\n    <div class=\" myself text-light\">\n  <h1> Portfolio</h1>\n  \n</div>\n  </div>\n  \n  </div>\n  </div>\n  </section>\n\n  \n      <section id=\"cv\" class=\"spacer-md bg-lite\">\n          <div class=\"container\">\n          <div class=\"row\" style=\"background-color:#e1e5e8;\">\n          <div class=\"col-sm-4 panelbg-grey\">\n            \n          <div >\n              <img src=\"assets/images/resume-photo.png\" alt=\"Photo\" class=\" center-block\">\n            </div>\n\n            <article>\n                <div class=\" lbl-blue\"> \n                    Info\n                  </div>\n               \n                   \n                  <div class=\"row\">\n                      <div class=\"col-xs-2 text-center\">\n                          <i class=\"fa fa-user\"></i>  \n                      </div>\n                      <div class=\"col-xs-10\">\n                          <div><strong>Name</strong></div>\n                          <small><em>G Santosh Laxman</em></small>\n                              </div>\n                      </div>\n                   <div class=\"space-md\"></div>\n                    <div class=\"row\">\n                        <div class=\"col-xs-2 text-center\">\n                            <i class=\"fa fa-map-marker\"></i>    \n                        </div>\n                        <div class=\"col-xs-10\">\n                            <div><strong>Address</strong></div>\n                            <small><em>Hyderabad, Telangana, India</em></small>\n                                </div>\n                        </div>\n                        <div class=\"space-md\"></div>\n                      <div class=\"row\">\n                          <div class=\"col-xs-2 text-center\">\n                              <i class=\"fa fa-envelope\"></i> \n                          </div>\n                          <div class=\"col-xs-10\">\n                              <div><strong>Email</strong></div>\n                              <small><em><a href=\"mailto:gsantosh2010@gmail.com\">gsantosh2010@gmail.com</a></em></small>\n                                  </div>\n                          </div>\n                          <div class=\"space-md\"></div>\n                          <div class=\"row\">\n                              <div class=\"col-xs-2 text-center\">\n                                  <i class=\"fa fa-globe\"></i>   \n                              </div>\n                              <div class=\"col-xs-10\">\n                                  <div><strong>Portfolio</strong></div>\n                                  <small><em><a href=\"https://gsantoshui.000webhostapp.com\">gsantoshui.000webhostapp.com</a></em></small>\n                                      </div>\n                              </div>\n                         \n                </article>\n                \n            <article>\n                <div class=\" lbl-blue\"> \n                    Social\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-xs-2 text-center\">\n                      <i class=\"fa fa-linkedin-square\"></i>  \n                      </div>\n                      <div class=\"col-xs-10\">\n                          <div><strong>LinkedIn</strong></div>\n                          <small><em><a href=\"https://www.linkedin.com/in/santosh-ganti-12b43a63/\">https://www.linkedin.com/in/santosh-ganti-12b43a63/</a></em></small>\n                              </div>\n                      </div>\n                      <div class=\"space-md\"></div>\n                      <div class=\"row\">\n                          <div class=\"col-xs-2 text-center\">\n                          <i class=\"fa fa-facebook\"></i>  \n                          </div>\n                          <div class=\"col-xs-10\">\n                              <div><strong>Facebook</strong></div>\n                              <small><em><a href=\"https://www.facebook.com/santosh.laxman\">https://www.facebook.com/santosh.laxman</a></em></small>\n                                  </div>\n                          </div>\n                        <div class=\"space-md\"></div>\n                </article>\n              <article>\n                  <div class=\" lbl-blue\"> \n                      Education\n                    </div>\n                    <p>M.C.A  from Osmania University, Hyderabad.</p>\n                  </article>\n                <article>\n                    <div class=\" lbl-blue\"> \n                        Experience\n                      </div>\n                      <div>Techmagica Business Solutions (Hyderabad),</div>\n                      <div>UI Designer /UI Developer,</div>\n                                <div>Dec, 2010 - Till Date.</div>\n                               <div> <a href=\"http://www.techmagica.com/\">http://www.techmagica.com/</a></div>\n                    </article>\n\n                  \n            <article>\n                <div class=\" lbl-blue\"> \n                    Skills\n                  </div>\n                <p>UX/UI Designing, Wire Framing, Prototyping, RWD, Logo Designing, Adobe Photoshop, Adobe Illustrator , \n                    Adobe Firework, Adobe InDesign, Adobe Dreamweaver, HTML5, CSS3, Bootstrap, jQuery, Javascript, AngularJs, Angular2.\n                    </p>\n                </article>\n                <div class=\"space-md\"></div>\n            </div>\n            <div class=\"col-sm-8\" >\n<div class=\" lbl-blue\">Resume</div>\n\n              <h2>G.Santosh Laxman</h2>\n                  <div>Senior Web Designer</div>\n\n\n                  <h4 class=\" lbl-blue\">Summary</h4>\n                <article>\n                    \n                    \n                     <ul>\n                     <li>Having 7 years of hands-on experience in Web Designing technologies that includes HTML, HTML5, CSS3, Bootstrap, Javascript, jQuery, Adobe Photoshop and AngularJS.</li>\n                     <li>Expertise in CSS coding and Photoshop designing.</li>\n                     <li>Extensive knowledge of current web standards, HTML5, CSS3.</li>\n                     <li>Familiar with Responsive Designing layout for various web pages.</li>\n                     <li>Implemented Bootstrap Technology in more than 120 templates.</li>\n                     <li>In-depth knowledge of creating workable links between different portions of pages</li>\n                     <li>Ability to identify core requirements of a successful web page navigation</li>\n                     <li>Goal oriented and ability to work effectively in any environment.</li>\n                     </ul>\n                     </article>\n                     \n                      \n                      \n                      \n                      \n                      <article>\n                          <h4 class=\" lbl-blue text-left\">Maintained Websites</h4>\n                        <div><strong>ZenAts</strong> - <a href=\"http://www.zenats.com/newhome/index.aspx\">http://www.zenats.com/newhome/index.aspx</a>\n                       \n                        <div id=\"sitesUnderZenats\">\n                        <ul>\n                        <li><a href=\"http://yachtcrewinternational.com/page/329/2183/120/home\">http://yachtcrewinternational.com/page/329/2183/120/home</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/119/index.aspx?id=332\">http://www.zenats.com/WebsiteTemplates/119/index.aspx?id=332</a></li>\n                        \n                        <li><a href=\"http://sharpestaffingagency.com/page/337/2216/113/home\">http://sharpestaffingagency.com/page/337/2216/113/home</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/115/index.aspx?id=271\">http://www.zenats.com/WebsiteTemplates/115/index.aspx?id=271</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/110/index.aspx?id=249\">http://www.zenats.com/WebsiteTemplates/110/index.aspx?id=249</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/109/index.aspx?id=251\">http://www.zenats.com/WebsiteTemplates/109/index.aspx?id=251</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/108/index.aspx?id=218\">http://www.zenats.com/WebsiteTemplates/108/index.aspx?id=218</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/107/index.aspx?id=215\">http://www.zenats.com/WebsiteTemplates/107/index.aspx?id=215</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/101/index.aspx?id=63\">http://www.zenats.com/WebsiteTemplates/101/index.aspx?id=63</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/98/index.aspx?id=198\">http://www.zenats.com/WebsiteTemplates/98/index.aspx?id=198</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/92/index.aspx?id=176\">http://www.zenats.com/WebsiteTemplates/92/index.aspx?id=176</a></li>\n                        \n                        <li><a href=\"http://sharpelawyers.com/page/175/1280/91/home\">http://sharpelawyers.com/page/175/1280/91/home</a></li>\n                        \n                        <li><a href=\"http://strategicpartnersconsultants.com/page/168/1266/89/home\">http://strategicpartnersconsultants.com/page/168/1266/89/home</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/88/index.aspx?id=149\">http://www.zenats.com/WebsiteTemplates/88/index.aspx?id=149</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/87/index.aspx?id=152\">http://www.zenats.com/WebsiteTemplates/87/index.aspx?id=152</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/83/index.aspx?id=126\">http://www.zenats.com/WebsiteTemplates/83/index.aspx?id=126</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/79/index.aspx?id=120\">http://www.zenats.com/WebsiteTemplates/79/index.aspx?id=120</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/75/index.aspx?id=141\">http://www.zenats.com/WebsiteTemplates/75/index.aspx?id=141</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/74/index.aspx?id=127\">http://www.zenats.com/WebsiteTemplates/74/index.aspx?id=127</a></li>\n                        \n                        <li><a href=\"http://www.zenats.com/WebsiteTemplates/61/index.aspx?id=112\">http://www.zenats.com/WebsiteTemplates/61/index.aspx?id=112</a></li>\n                        \n                        <li><a href=\"http://yogakshemafoundation.in/page/99/764/54/about-yogakshema-foundation\">http://yogakshemafoundation.in/page/99/764/54/about-yogakshema-foundation</a></li>\n                        \n                        \n                        </ul>\n                        </div>\n                        \n                        </div>\n                        \n                        <div><strong>RecruitAlliance</strong> - <a href=\"http://www.recruitalliance.com/\"> http://www.recruitalliance.com </a>, <a href=\"http://www.recruitalliance.in/\">http://www.recruitalliance.in/</a></div>\n                        <div><strong>RecruitINTEL.com</strong> - <a href=\"http://www.recruitintel.com/\">http://www.recruitintel.com/</a></div>\n                        <div><strong>MSMEIndia.com</strong> - <a href=\"http://www.msmeindia.com/newmsme/index.html\">http://www.msmeindia.com/newmsme/index.html</a></div>\n                        <div><strong>BFSIJOBS.com</strong> - <a href=\"http://www.bfsijobs.com/\">http://www.bfsijobs.com/</a></div>\n                        <div><strong>e-Lawyer</strong> - <a href=\"https://www.e-lawyer.com/\">https://www.e-lawyer.com/</a></div>\n                        <p></p>\n                          \n                          </article>\n                     \n              </div>\n            </div>\n            </div>\n            </section>\n\n\n\n\n      \n"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map