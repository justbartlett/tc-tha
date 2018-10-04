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
		var e = new Error("Cannot find module '" + req + "'");
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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
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



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <p *ngFor=\"let incident of incidents\">\n  {{incident.id}}\n</p> -->\n<app-header></app-header>\n<div class=\"main\">\n    <div class=\"row\">\n        <div class=\"card\">\n            <h2>Large Cyber Incidents By Industry</h2>\n            <app-bar-chart *ngIf=\"incidents\" [incidentsBars]=\"incidents\"></app-bar-chart>\n        </div>\n        <div class=\"card\">\n          <h2>This is a datatable</h2>\n          <table>\n            <tr *ngFor=\"let incident of incidents\">\n              <td class=\"label\">{{incident.label}}</td>\n              <td>{{incident.industry}}</td>\n              <td>{{incident.large}}</td>\n              <td>{{incident.small}}</td>\n              <td>{{incident.unknown}}</td>\n              <td>{{incident.total}}</td>\n              <td><button (click)=\"delete(incident)\">Remove</button></td>\n            </tr>\n          </table>\n              \n        </div>\n    </div>\n  </div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sr-only {\n  display: none; }\n\n.main {\n  padding: 24px;\n  background: #1e202f; }\n\n@media (max-width: 767.98px) {\n    .main {\n      padding: 6px; } }\n\n.row {\n  padding: 6px 6px;\n  display: flex;\n  flex-wrap: wrap; }\n\n.row h1 {\n    margin: 0; }\n\n.row .card {\n    background: #282840;\n    margin: 0 8px 16px;\n    padding: 16px;\n    width: calc(50% - 16px); }\n\n@media (max-width: 480px) {\n      .row .card {\n        margin: 0 0 16px 0; } }\n\n.row .card h2 {\n      color: #fff;\n      text-transform: uppercase;\n      letter-spacing: .1em;\n      font-size: 13px;\n      font-weight: normal;\n      margin: 0;\n      padding: 0;\n      line-height: 24px; }\n\n@media (max-width: 840px) {\n  .row .card {\n    width: 100%; } }\n\ntable {\n  width: 100%;\n  margin-top: 10px; }\n\ntable td {\n    color: #656599; }\n\ntable td.label {\n      color: #52547d; }\n\ntable button {\n    background: #282840;\n    border: 0;\n    margin: 2px 0;\n    padding: 6px 18px;\n    font-size: 11px;\n    text-transform: uppercase;\n    border: 2px solid #323150;\n    font-weight: 600;\n    border-radius: 3px;\n    color: #52547d;\n    transition: 0.5s all ease-in-out; }\n\ntable button:hover {\n    color: #fff;\n    background: linear-gradient(to right, #ff6a94, #a06afe); }\n"

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
/* harmony import */ var _incident_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./incident-data.service */ "./src/app/incident-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(incidentDataService) {
        this.incidentDataService = incidentDataService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getIncidentData();
    };
    AppComponent.prototype.getIncidentData = function () {
        var _this = this;
        this.incidentDataService.getData()
            .subscribe(function (incidents) { return _this.incidents = incidents; });
    };
    AppComponent.prototype.delete = function (incident) {
        this.incidents = this.incidents.filter(function (keepIncident) { return keepIncident !== incident; });
        this.deleteIncident = incident;
        this.incidentDataService.deleteIncident(incident).subscribe();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_incident_data_service__WEBPACK_IMPORTED_MODULE_1__["IncidentDataService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _incident_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incident-data.service */ "./src/app/incident-data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bar-chart/bar-chart.component */ "./src/app/bar-chart/bar-chart.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["BarChartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [_incident_data_service__WEBPACK_IMPORTED_MODULE_6__["IncidentDataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.html":
/*!****************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-size\" (window:resize)=\"onResize()\">\n  <svg class=\"bar-chart\">\n    <defs>\n        <linearGradient id=\"Gradient1\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"100%\">\n          <stop class=\"start\" offset=\"0%\" stop-color=\"#88b4ff\" stop-opacity=\"1\"></stop>\n          <stop class=\"end\" offset=\"100%\" stop-color=\"#5a83ef\" stop-opacity=\"1\"></stop>\n        </linearGradient>\n        <linearGradient id=\"Gradient2\" x1=\"0%\" x2=\"100%\" y1=\"0%\" y2=\"100%\">\n          <stop class=\"start\" offset=\"0%\" stop-color=\"#c487ff\" stop-opacity=\"1\"></stop>\n          <stop class=\"end\" offset=\"100%\" stop-color=\"#915bef\" stop-opacity=\"1\"></stop>\n        </linearGradient>\n    </defs>\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-chart {\n  height: 100%;\n  width: 100%;\n  min-height: 340px; }\n  @media (max-width: 480px) {\n    .bar-chart {\n      min-height: 200px;\n      max-width: 350px; } }\n  .bar-chart .axis-x {\n    display: none; }\n  .bar-chart .axis-y path {\n    stroke: none; }\n  .bar-chart .axis-y line {\n    stroke: #2e2e4a; }\n  .bar-chart .axis-y text {\n    fill: #52547d;\n    font-size: 12px; }\n  .bar:nth-child(even) {\n  fill: url(\"#Gradient2\"); }\n"

/***/ }),

/***/ "./src/app/bar-chart/bar-chart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bar-chart/bar-chart.component.ts ***!
  \**************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarChartComponent = /** @class */ (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('.bar-chart');
        this.chart = this.svg.append('g');
        this.setChartProperties();
        this.setScales();
        this.drawBars();
        this.drawAxis();
    };
    BarChartComponent.prototype.ngOnChanges = function () {
        if (this.bars) {
            this.setScales();
            this.drawBars();
            this.updateAxis();
        }
    };
    BarChartComponent.prototype.onResize = function () {
        this.setChartProperties();
        this.drawOnResize();
    };
    BarChartComponent.prototype.setChartProperties = function () {
        var canvasWidth = parseInt(this.svg.style('width'), 0); // get the width and height of the svg
        var canvasHeight = parseInt(this.svg.style('height'), 0);
        this.margin = {
            top: canvasHeight * 0.05,
            right: canvasWidth * 0.1,
            bottom: canvasHeight * 0.01,
            left: canvasWidth * 0.05,
        };
        this.width = canvasWidth - this.margin.left - this.margin.right; // set the width and height with margins
        this.height = canvasHeight - this.margin.top - this.margin.bottom;
        this.chart
            .attr('transform', "translate(" + this.margin.left + ", " + this.margin.top + ")"); // move the chart by margin to center it
    };
    BarChartComponent.prototype.setScales = function () {
        var xDomain = [0, d3__WEBPACK_IMPORTED_MODULE_1__["max"](this.incidentsBars.map(function (incident) { return incident.large; }))]; // set domains (spread of values)
        // const yDomain = this.incidentsBars.map(incident => incident.industry);
        var yDomain = this.incidentsBars.map(function (incident) { return incident.label; });
        this.xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]() // create a band scale for our x data
            .domain(xDomain).range([0, this.width]);
        this.yScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]() // create a linear scale for our y data
            .domain(yDomain).range([0, this.height]);
    };
    BarChartComponent.prototype.drawAxis = function () {
        this.xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](this.xScale) // initialize the x and y axis properties with d3
            .ticks(5);
        this.yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](this.yScale);
        this.chart.append('g') // draw the x axis
            .call(this.xAxis)
            .attr('class', 'axis-x')
            .attr('transform', "translate(0, " + this.height + ")");
        this.chart.append('g') // draw the y axis
            .call(this.yAxis)
            .attr('class', 'axis-y');
    };
    BarChartComponent.prototype.drawBars = function () {
        // const color = d3.scaleOrdinal(d3.schemeCategory10)    // create an ordinal scale with a domain to map incident.x to appropriate gradient
        //   .domain(this.incidentsBars.map(incident => incident.label));
        var _this = this;
        this.bars = this.chart // join incident data to the bar elements using a key function
            .selectAll('.bar')
            .data(this.incidentsBars, function (incident) { return incident.large; });
        this.bars // add bars to chart
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('fill', "url(#Gradient1)")
            .attr('x', 0)
            .attr('y', function (incident) { return _this.yScale(incident.label); })
            .attr('width', function (incident) { return _this.xScale(incident.large); })
            .attr('height', this.yScale.bandwidth());
        this.bars // update - modify current bars on chart
            .transition().delay(250)
            .attr('y', function (incident) { return _this.yScale(incident.label); })
            .attr('width', function (incident) { return _this.xScale(incident.large); })
            .attr('height', this.yScale.bandwidth());
        this.bars // update - remove bars from chart
            .exit()
            .transition()
            .attr('width', 0)
            .remove();
    };
    BarChartComponent.prototype.updateAxis = function () {
        this.xAxis.scale(this.xScale);
        this.yAxis.scale(this.yScale);
        this.chart.select('.axis-x')
            .transition().delay(250)
            .call(this.xAxis);
        this.chart.select('.axis-y')
            .transition().delay(250)
            .call(this.yAxis);
    };
    BarChartComponent.prototype.drawOnResize = function () {
        var _this = this;
        this.xScale.range([0, this.width]);
        this.yScale.range([0, this.height]);
        this.chart.select('.axis-x')
            .call(this.xAxis)
            .attr('transform', "translate(0, " + this.height + ")")
            .select('.axis-x-title')
            .attr('transform', "translate(" + this.width + ", 0)");
        this.chart.select('.axis-y')
            .call(this.yAxis);
        this.chart.selectAll('.bar')
            .attr('x', 0)
            .attr('y', function (incident) { return _this.yScale(incident.label); })
            .attr('width', function (incident) { return _this.xScale(incident.large); })
            .attr('height', this.yScale.bandwidth());
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BarChartComponent.prototype, "incidentsBars", void 0);
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            template: __webpack_require__(/*! ./bar-chart.component.html */ "./src/app/bar-chart/bar-chart.component.html"),
            styles: [__webpack_require__(/*! ./bar-chart.component.scss */ "./src/app/bar-chart/bar-chart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"upper\">\n  <ul role=\"navigation\">\n      <li class=\"logo\">\n        <i class=\"material-icons\">language</i>\n        <span>Global Corp</span>\n      </li>\n      <li class=\"user\">\n        <span>Justin B</span>\n        <img src=\"../assets/avatar-jb.png\" alt=\"Justin Bartlett avatar\" />\n      </li>\n      <li>\n        <i class=\"material-icons\">input</i>\n      </li>\n    </ul>\n</nav>\n\n<nav class=\"lower\">\n  <ul role=\"navigation\">\n    <li class=\"active\">Dashboard</li>\n    <li>Incidents</li>\n    <li>Endpoints</li>\n    <li>Settings</li>\n    <li class=\"search\">\n      <i class=\"material-icons\">search</i>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upper, .lower {\n  height: 56px; }\n  .upper ul, .lower ul {\n    height: 56px;\n    display: flex;\n    align-items: center;\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .upper ul li, .lower ul li {\n      margin: 0;\n      padding: 0; }\n  .upper {\n  background: #6a93ff;\n  padding: 0 32px;\n  color: #fff; }\n  @media (max-width: 767.98px) {\n    .upper {\n      padding: 0 16px; } }\n  .upper ul {\n    justify-content: space-between; }\n  .upper ul .user {\n      margin: 0 24px 0 auto;\n      display: flex;\n      align-items: center; }\n  .upper ul .user span {\n        font-size: 14px;\n        line-height: 32px;\n        margin-right: 12px; }\n  .upper ul li.logo {\n      display: flex;\n      align-items: center; }\n  .upper ul li.logo i {\n        font-size: 28px;\n        margin-right: 6px; }\n  .upper ul li.logo span {\n        font-size: 19px;\n        line-height: 56px; }\n  .upper ul i {\n      color: #fff; }\n  .upper ul img {\n      height: 32px; }\n  .lower {\n  background: #282840;\n  padding: 0 32px; }\n  @media (max-width: 767.98px) {\n    .lower {\n      padding: 0 16px; } }\n  .lower ul li {\n    font-size: 13px;\n    line-height: 56px;\n    color: #656599;\n    height: 56px;\n    cursor: pointer;\n    text-transform: uppercase;\n    letter-spacing: .1em;\n    margin: 0 12px; }\n  .lower ul li:first-child {\n      margin: 0 12px 0 0; }\n  .lower ul li:last-child {\n      margin: 0 0 0 12px; }\n  .lower ul li.active {\n      color: #6993ff;\n      position: relative; }\n  .lower ul li.active::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        height: 2px;\n        width: 100%;\n        display: block;\n        background: #6993ff; }\n  .lower ul li.search {\n      margin-left: auto;\n      position: relative; }\n  @media (max-width: 767.98px) {\n        .lower ul li.search {\n          display: none; } }\n  .lower ul li.search i.material-icons {\n        padding-top: 14px;\n        font-size: 28px; }\n  .lower ul li.search::after {\n        content: '';\n        position: absolute;\n        bottom: 8px;\n        right: 0;\n        height: 1px;\n        width: 200px;\n        display: block;\n        background: #333251; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var incidents = [
            {
                'id': 0,
                'industry': 'Professional',
                'large': '158',
                'small': '59',
                'unknown': '323',
                'total': '540',
                'label': 'A'
            },
            {
                'id': 1,
                'industry': 'Public',
                'large': '22429',
                'small': '51',
                'unknown': '308',
                'total': '22788',
                'label': 'B'
            },
            {
                'id': 2,
                'industry': 'Real Estate',
                'large': '2',
                'small': '5',
                'unknown': '24',
                'total': '31',
                'label': 'C'
            },
            {
                'id': 3,
                'industry': 'Retail',
                'large': '56',
                'small': '111',
                'unknown': '150',
                'total': '317',
                'label': 'D'
            },
            {
                'id': 4,
                'industry': 'Trade',
                'large': '13',
                'small': '5',
                'unknown': '13',
                'total': '31',
                'label': 'E'
            },
            {
                'id': 5,
                'industry': 'Transportation',
                'large': '15',
                'small': '9',
                'unknown': '35',
                'total': '59',
                'label': 'F'
            },
            {
                'id': 6,
                'industry': 'Utilities',
                'large': '14',
                'small': '8',
                'unknown': '24',
                'total': '46',
                'label': 'G'
            },
            {
                'id': 7,
                'industry': 'unknown',
                'large': '1043',
                'small': '9',
                'unknown': '17521',
                'total': '18573',
                'label': 'H'
            },
            {
                'id': 8,
                'industry': 'total',
                'large': '24505',
                'small': '961',
                'unknown': '27842',
                'total': '53808',
                'label': 'I'
            }
        ];
        return { incidents: incidents };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/incident-data.service.ts":
/*!******************************************!*\
  !*** ./src/app/incident-data.service.ts ***!
  \******************************************/
/*! exports provided: IncidentDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentDataService", function() { return IncidentDataService; });
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


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var IncidentDataService = /** @class */ (function () {
    function IncidentDataService(http) {
        this.http = http;
        this.incidentsUrl = 'api/incidents';
    }
    IncidentDataService.prototype.getData = function () {
        return this.http.get(this.incidentsUrl);
    };
    IncidentDataService.prototype.deleteIncident = function (incident) {
        return this.http.delete(this.incidentsUrl + "/" + incident.id, httpOptions);
    };
    IncidentDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IncidentDataService);
    return IncidentDataService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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

module.exports = __webpack_require__(/*! /Users/jbar/Desktop/threat-connect-tha/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map