function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _camera_twod_camera_twod_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./camera-twod/camera-twod.component */
    "./src/app/camera-twod/camera-twod.component.ts");
    /* harmony import */


    var _keyboard_control_layer_keyboard_control_layer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./keyboard-control-layer/keyboard-control-layer.component */
    "./src/app/keyboard-control-layer/keyboard-control-layer.component.ts");
    /* harmony import */


    var _path_lines_path_lines_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./path-lines/path-lines.component */
    "./src/app/path-lines/path-lines.component.ts");
    /* harmony import */


    var _polygon_layer_example_polygon_layer_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./polygon-layer-example/polygon-layer-example.component */
    "./src/app/polygon-layer-example/polygon-layer-example.component.ts");
    /* harmony import */


    var _circle_layer_example_circle_layer_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./circle-layer-example/circle-layer-example.component */
    "./src/app/circle-layer-example/circle-layer-example.component.ts");
    /* harmony import */


    var _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./waypoints/waypoints.component */
    "./src/app/waypoints/waypoints.component.ts");

    var _c0 = ["waypoints"];
    var _c1 = ["obstacles"];
    var _c2 = ["fzb"];
    var _c3 = ["perspective_controller"];
    var _c4 = ["flight_lines"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(cameraService) {
        _classCallCheck(this, AppComponent);

        this.cameraService = cameraService;
        this.title = 'cesiumDemo';
        this.show_fzb = true;
        this.show_waypoints = true;
        this.show_obstacles = true;
        this.perspective = true;
        this.show_flightlines = true;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle_waypoints",
        value: function toggle_waypoints() {
          this.waypoints.setShow(this.show_waypoints);
        }
      }, {
        key: "toggle_obstacles",
        value: function toggle_obstacles() {
          this.obstacles.setShow(this.show_obstacles);
        }
      }, {
        key: "toggle_fzb",
        value: function toggle_fzb() {
          this.fzb.setShow(this.show_fzb);
        }
      }, {
        key: "toggle_flightlines",
        value: function toggle_flightlines() {
          this.fl.setShow(this.show_flightlines);
        }
      }, {
        key: "get_perspective",
        value: function get_perspective() {
          if (this.perspective == true) {
            return "3D";
          }

          return "2D";
        }
      }, {
        key: "toggle_perspective",
        value: function toggle_perspective() {
          if (this.perspective == true) {
            this.pc.set3D();
          } else {
            this.pc.set2D();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_cesium__WEBPACK_IMPORTED_MODULE_1__["CameraService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.waypoints = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.obstacles = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fzb = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.pc = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fl = _t.first);
        }
      },
      decls: 30,
      vars: 6,
      consts: [[3, "ngModel", "ngModelChange", "change"], ["perspective_controller", ""], ["flight_lines", ""], ["fzb", ""], ["obstacles", ""], ["waypoints", ""]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ANGULAR CESIUM DEMO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Settings ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-action-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-slide-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slide_toggle_ngModelChange_6_listener($event) {
            return ctx.show_flightlines = $event;
          })("change", function AppComponent_Template_mat_slide_toggle_change_6_listener() {
            return ctx.toggle_flightlines();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Show Flightlines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-slide-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slide_toggle_ngModelChange_8_listener($event) {
            return ctx.show_fzb = $event;
          })("change", function AppComponent_Template_mat_slide_toggle_change_8_listener() {
            return ctx.toggle_fzb();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Show Boundaries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-slide-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
            return ctx.show_obstacles = $event;
          })("change", function AppComponent_Template_mat_slide_toggle_change_10_listener() {
            return ctx.toggle_obstacles();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Show Obstacles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slide-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slide_toggle_ngModelChange_12_listener($event) {
            return ctx.show_waypoints = $event;
          })("change", function AppComponent_Template_mat_slide_toggle_change_12_listener() {
            return ctx.toggle_waypoints();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Show Waypoints");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-slide-toggle", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_slide_toggle_ngModelChange_14_listener($event) {
            return ctx.perspective = $event;
          })("change", function AppComponent_Template_mat_slide_toggle_change_14_listener() {
            return ctx.toggle_perspective();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ac-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-camera-twod", null, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "keyboard-control-layer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-path-lines", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "polygon-layer-example", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "circle-layer-example", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "waypoints", null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "For demonstration purposes (don't look at the source code)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_flightlines);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_fzb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_obstacles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.show_waypoints);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.perspective);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.get_perspective());
        }
      },
      directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelActionRow"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcMapComponent"], _camera_twod_camera_twod_component__WEBPACK_IMPORTED_MODULE_5__["CameraTwodComponent"], _keyboard_control_layer_keyboard_control_layer_component__WEBPACK_IMPORTED_MODULE_6__["KeyboardControlLayerComponent"], _path_lines_path_lines_component__WEBPACK_IMPORTED_MODULE_7__["PathLinesComponent"], _polygon_layer_example_polygon_layer_example_component__WEBPACK_IMPORTED_MODULE_8__["PolygonLayerExampleComponent"], _circle_layer_example_circle_layer_example_component__WEBPACK_IMPORTED_MODULE_9__["CircleLayerExampleComponent"], _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_10__["WaypointsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["CameraService"]
        }];
      }, {
        waypoints: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['waypoints']
        }],
        obstacles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['obstacles']
        }],
        fzb: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fzb']
        }],
        pc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['perspective_controller']
        }],
        fl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['flight_lines']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");
    /* harmony import */


    var _polygon_layer_example_polygon_layer_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./polygon-layer-example/polygon-layer-example.component */
    "./src/app/polygon-layer-example/polygon-layer-example.component.ts");
    /* harmony import */


    var _circle_layer_example_circle_layer_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./circle-layer-example/circle-layer-example.component */
    "./src/app/circle-layer-example/circle-layer-example.component.ts");
    /* harmony import */


    var _keyboard_control_layer_keyboard_control_layer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./keyboard-control-layer/keyboard-control-layer.component */
    "./src/app/keyboard-control-layer/keyboard-control-layer.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./waypoints/waypoints.component */
    "./src/app/waypoints/waypoints.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _camera_twod_camera_twod_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./camera-twod/camera-twod.component */
    "./src/app/camera-twod/camera-twod.component.ts");
    /* harmony import */


    var _path_lines_path_lines_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./path-lines/path-lines.component */
    "./src/app/path-lines/path-lines.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [angular_cesium__WEBPACK_IMPORTED_MODULE_4__["CameraService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_cesium__WEBPACK_IMPORTED_MODULE_4__["AngularCesiumModule"].forRoot(), angular_cesium__WEBPACK_IMPORTED_MODULE_4__["AngularCesiumWidgetsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _polygon_layer_example_polygon_layer_example_component__WEBPACK_IMPORTED_MODULE_5__["PolygonLayerExampleComponent"], _circle_layer_example_circle_layer_example_component__WEBPACK_IMPORTED_MODULE_6__["CircleLayerExampleComponent"], _keyboard_control_layer_keyboard_control_layer_component__WEBPACK_IMPORTED_MODULE_7__["KeyboardControlLayerComponent"], _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_11__["WaypointsComponent"], _camera_twod_camera_twod_component__WEBPACK_IMPORTED_MODULE_13__["CameraTwodComponent"], _path_lines_path_lines_component__WEBPACK_IMPORTED_MODULE_14__["PathLinesComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_cesium__WEBPACK_IMPORTED_MODULE_4__["AngularCesiumModule"], angular_cesium__WEBPACK_IMPORTED_MODULE_4__["AngularCesiumWidgetsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _polygon_layer_example_polygon_layer_example_component__WEBPACK_IMPORTED_MODULE_5__["PolygonLayerExampleComponent"], _circle_layer_example_circle_layer_example_component__WEBPACK_IMPORTED_MODULE_6__["CircleLayerExampleComponent"], _keyboard_control_layer_keyboard_control_layer_component__WEBPACK_IMPORTED_MODULE_7__["KeyboardControlLayerComponent"], _waypoints_waypoints_component__WEBPACK_IMPORTED_MODULE_11__["WaypointsComponent"], _camera_twod_camera_twod_component__WEBPACK_IMPORTED_MODULE_13__["CameraTwodComponent"], _path_lines_path_lines_component__WEBPACK_IMPORTED_MODULE_14__["PathLinesComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], angular_cesium__WEBPACK_IMPORTED_MODULE_4__["AngularCesiumModule"].forRoot(), angular_cesium__WEBPACK_IMPORTED_MODULE_4__["AngularCesiumWidgetsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["NoopAnimationsModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"]],
          providers: [angular_cesium__WEBPACK_IMPORTED_MODULE_4__["CameraService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/camera-twod/camera-twod.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/camera-twod/camera-twod.component.ts ***!
    \******************************************************/

  /*! exports provided: CameraTwodComponent */

  /***/
  function srcAppCameraTwodCameraTwodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraTwodComponent", function () {
      return CameraTwodComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");

    var CameraTwodComponent = /*#__PURE__*/function () {
      function CameraTwodComponent(cameraService) {
        _classCallCheck(this, CameraTwodComponent);

        this.cameraService = cameraService;
      }

      _createClass(CameraTwodComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cameraService.setSceneMode(angular_cesium__WEBPACK_IMPORTED_MODULE_1__["SceneMode"].SCENE3D);
        }
      }, {
        key: "set2D",
        value: function set2D() {
          this.cameraService.setSceneMode(angular_cesium__WEBPACK_IMPORTED_MODULE_1__["SceneMode"].SCENE2D);
        }
      }, {
        key: "set3D",
        value: function set3D() {
          this.cameraService.setSceneMode(angular_cesium__WEBPACK_IMPORTED_MODULE_1__["SceneMode"].SCENE3D);
        }
      }]);

      return CameraTwodComponent;
    }();

    CameraTwodComponent.ɵfac = function CameraTwodComponent_Factory(t) {
      return new (t || CameraTwodComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_cesium__WEBPACK_IMPORTED_MODULE_1__["CameraService"]));
    };

    CameraTwodComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CameraTwodComponent,
      selectors: [["app-camera-twod"]],
      decls: 0,
      vars: 0,
      template: function CameraTwodComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbWVyYS10d29kL2NhbWVyYS10d29kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CameraTwodComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-camera-twod',
          templateUrl: './camera-twod.component.html',
          styleUrls: ['./camera-twod.component.css']
        }]
      }], function () {
        return [{
          type: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["CameraService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/circle-layer-example/circle-layer-example.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/circle-layer-example/circle-layer-example.component.ts ***!
    \************************************************************************/

  /*! exports provided: CircleLayerExampleComponent */

  /***/
  function srcAppCircleLayerExampleCircleLayerExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CircleLayerExampleComponent", function () {
      return CircleLayerExampleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _mock_data_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mock-data-provider.service */
    "./src/app/circle-layer-example/mock-data-provider.service.ts");
    /* harmony import */


    var _services_obstacles_obstacles_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/obstacles/obstacles.service */
    "./src/app/services/obstacles/obstacles.service.ts");

    var CircleLayerExampleComponent = /*#__PURE__*/function () {
      function CircleLayerExampleComponent(mockDataProvider, obstaclesService) {
        _classCallCheck(this, CircleLayerExampleComponent);

        this.mockDataProvider = mockDataProvider;
        this.obstaclesService = obstaclesService;
        this.Cesium = Cesium;
        this.show = true;
      }

      _createClass(CircleLayerExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = 0;

          function getId() {
            a = a + 1;
            return a;
          }

          function makeACEntity(a) {
            return {
              id: String(getId()),
              actionType: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["ActionType"].ADD_UPDATE,
              entity: {
                position: Cesium.Cartesian3.fromDegrees(a["longitude"], a["latitude"]),
                radius: a["radius"],
                height: a["height"]
              }
            };
          }

          this.circles$ = this.obstaclesService.get_obstacles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (points) {
            return points.map(function (point) {
              return makeACEntity(point);
            });
          }));
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          this.layer.removeAll();
        }
      }, {
        key: "setShow",
        value: function setShow($event) {
          this.show = $event;
        }
      }]);

      return CircleLayerExampleComponent;
    }();

    CircleLayerExampleComponent.ɵfac = function CircleLayerExampleComponent_Factory(t) {
      return new (t || CircleLayerExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mock_data_provider_service__WEBPACK_IMPORTED_MODULE_3__["MockDataProviderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_obstacles_obstacles_service__WEBPACK_IMPORTED_MODULE_4__["ObstaclesService"]));
    };

    CircleLayerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CircleLayerExampleComponent,
      selectors: [["circle-layer-example"]],
      viewQuery: function CircleLayerExampleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcLayerComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.layer = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])],
      decls: 2,
      vars: 2,
      consts: [["acFor", "let circle of circles$", 3, "show", "context"], ["props", "{\n        position: circle.position,\n        length : circle.height,\n        topRadius : circle.radius,\n        bottomRadius : circle.radius,\n        material : Cesium.Color.RED.withAlpha(0.2),\n        }"]],
      template: function CircleLayerExampleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ac-layer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ac-cylinder-desc", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show)("context", ctx);
        }
      },
      directives: [angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcLayerComponent"], angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcCylinderDescComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NpcmNsZS1sYXllci1leGFtcGxlL2NpcmNsZS1sYXllci1leGFtcGxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircleLayerExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'circle-layer-example',
          templateUrl: 'circle-layer-example.component.html',
          styleUrls: ['circle-layer-example.component.css'],
          providers: []
        }]
      }], function () {
        return [{
          type: _mock_data_provider_service__WEBPACK_IMPORTED_MODULE_3__["MockDataProviderService"]
        }, {
          type: _services_obstacles_obstacles_service__WEBPACK_IMPORTED_MODULE_4__["ObstaclesService"]
        }];
      }, {
        layer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcLayerComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/circle-layer-example/mock-data-provider.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/circle-layer-example/mock-data-provider.service.ts ***!
    \********************************************************************/

  /*! exports provided: MockDataProviderService */

  /***/
  function srcAppCircleLayerExampleMockDataProviderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MockDataProviderService", function () {
      return MockDataProviderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MockDataProviderService = /*#__PURE__*/function () {
      function MockDataProviderService() {
        _classCallCheck(this, MockDataProviderService);

        this.obstacles = [];
        this.obstacles = [];
        this.raw_obstacles = [{
          "latitude": 38.146689,
          "longitude": -76.426475,
          "radius": 150.0,
          "height": 750.0
        }, {
          "latitude": 38.142914,
          "longitude": -76.430297,
          "radius": 300.0,
          "height": 300.0
        }, {
          "latitude": 38.149504,
          "longitude": -76.43311,
          "radius": 100.0,
          "height": 750.0
        }, {
          "latitude": 38.148711,
          "longitude": -76.429061,
          "radius": 300.0,
          "height": 750.0
        }, {
          "latitude": 38.144203,
          "longitude": -76.426155,
          "radius": 50.0,
          "height": 400.0
        }, {
          "latitude": 38.146003,
          "longitude": -76.430733,
          "radius": 225.0,
          "height": 500.0
        }];

        for (var obstacle_index in this.raw_obstacles) {
          var current_obstacle = this.raw_obstacles[obstacle_index];
          this.obstacles[obstacle_index] = {
            id: obstacle_index,
            position: Cesium.Cartesian3.fromDegrees(current_obstacle["longitude"], current_obstacle["latitude"]),
            radius: current_obstacle["radius"],
            height: current_obstacle["height"]
          };
        }
      }

      _createClass(MockDataProviderService, [{
        key: "getDataSteam$",
        value: function getDataSteam$() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.obstacles);
        }
      }]);

      return MockDataProviderService;
    }();

    MockDataProviderService.ɵfac = function MockDataProviderService_Factory(t) {
      return new (t || MockDataProviderService)();
    };

    MockDataProviderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MockDataProviderService,
      factory: MockDataProviderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MockDataProviderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/keyboard-control-layer/keyboard-control-layer.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/keyboard-control-layer/keyboard-control-layer.component.ts ***!
    \****************************************************************************/

  /*! exports provided: KeyboardControlLayerComponent */

  /***/
  function srcAppKeyboardControlLayerKeyboardControlLayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyboardControlLayerComponent", function () {
      return KeyboardControlLayerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");

    var KeyboardControlLayerComponent = /*#__PURE__*/function () {
      function KeyboardControlLayerComponent(keyboardControlService) {
        _classCallCheck(this, KeyboardControlLayerComponent);

        this.keyboardControlService = keyboardControlService;
      }

      _createClass(KeyboardControlLayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.keyboardControlService.setKeyboardControls({
            W: {
              action: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["KeyboardAction"].CAMERA_FORWARD
            },
            S: {
              action: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["KeyboardAction"].CAMERA_BACKWARD
            },
            D: {
              action: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["KeyboardAction"].CAMERA_RIGHT
            },
            A: {
              action: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["KeyboardAction"].CAMERA_LEFT
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.keyboardControlService.removeKeyboardControls();
        }
      }]);

      return KeyboardControlLayerComponent;
    }();

    KeyboardControlLayerComponent.ɵfac = function KeyboardControlLayerComponent_Factory(t) {
      return new (t || KeyboardControlLayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_cesium__WEBPACK_IMPORTED_MODULE_1__["KeyboardControlService"]));
    };

    KeyboardControlLayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeyboardControlLayerComponent,
      selectors: [["keyboard-control-layer"]],
      decls: 0,
      vars: 0,
      template: function KeyboardControlLayerComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyboardControlLayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'keyboard-control-layer',
          template: ''
        }]
      }], function () {
        return [{
          type: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["KeyboardControlService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/path-lines/path-lines.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/path-lines/path-lines.component.ts ***!
    \****************************************************/

  /*! exports provided: PathLinesComponent */

  /***/
  function srcAppPathLinesPathLinesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PathLinesComponent", function () {
      return PathLinesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_poi_poi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/poi/poi.service */
    "./src/app/services/poi/poi.service.ts");

    var PathLinesComponent = /*#__PURE__*/function () {
      function PathLinesComponent(poiService) {
        _classCallCheck(this, PathLinesComponent);

        this.poiService = poiService;
        this.Cesium = Cesium;
        this.show = true;
      }

      _createClass(PathLinesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = 100;

          function getId() {
            a = a + 1;
            return a;
          }

          function pairToACEntity(pair) {
            return {
              id: String(getId()),
              actionType: angular_cesium__WEBPACK_IMPORTED_MODULE_1__["ActionType"].ADD_UPDATE,
              entity: {
                positions: Cesium.Cartesian3.fromDegreesArrayHeights([pair[0]["longitude"], pair[0]["latitude"], pair[0]["altitude"], pair[1]["longitude"], pair[1]["latitude"], pair[1]["altitude"]])
              }
            };
          }

          this.flat_wp = this.poiService.get_waypoints().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (x) {
            return x;
          }));
          this.polylines$ = this.flat_wp.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (pair) {
            return pairToACEntity(pair);
          }));
        }
      }, {
        key: "setShow",
        value: function setShow($event) {
          this.polylines$.subscribe(function (x) {
            return console.log(x);
          });
          this.show = $event;
        }
      }]);

      return PathLinesComponent;
    }();

    PathLinesComponent.ɵfac = function PathLinesComponent_Factory(t) {
      return new (t || PathLinesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_poi_poi_service__WEBPACK_IMPORTED_MODULE_3__["PoiService"]));
    };

    PathLinesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PathLinesComponent,
      selectors: [["app-path-lines"]],
      decls: 2,
      vars: 2,
      consts: [["acFor", "let polyline of polylines$", 3, "context", "show"], ["props", "{\n              width : 2,\n              positions: polyline.positions,\n              material: , Cesium.Color.WHITE.withAlpha(0.4),\n              dashLength: 200,\n            }"]],
      template: function PathLinesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ac-layer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ac-polyline-desc", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("context", ctx)("show", ctx.show);
        }
      },
      directives: [angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcLayerComponent"], angular_cesium__WEBPACK_IMPORTED_MODULE_1__["AcPolylineDescComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGgtbGluZXMvcGF0aC1saW5lcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PathLinesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-path-lines',
          templateUrl: './path-lines.component.html',
          styleUrls: ['./path-lines.component.css']
        }]
      }], function () {
        return [{
          type: _services_poi_poi_service__WEBPACK_IMPORTED_MODULE_3__["PoiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/polygon-layer-example/polygon-layer-example.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/polygon-layer-example/polygon-layer-example.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PolygonLayerExampleComponent */

  /***/
  function srcAppPolygonLayerExamplePolygonLayerExampleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolygonLayerExampleComponent", function () {
      return PolygonLayerExampleComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");
    /* harmony import */


    var _services_search_grid_boundary_search_grid_boundary_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/search-grid-boundary/search-grid-boundary.service */
    "./src/app/services/search-grid-boundary/search-grid-boundary.service.ts");
    /* harmony import */


    var _services_flight_zone_boundary_flight_zone_boundary_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/flight-zone-boundary/flight-zone-boundary.service */
    "./src/app/services/flight-zone-boundary/flight-zone-boundary.service.ts");

    var PolygonLayerExampleComponent = /*#__PURE__*/function () {
      function PolygonLayerExampleComponent(searchGridBoundaryService, flightZoneBoundaryService) {
        _classCallCheck(this, PolygonLayerExampleComponent);

        this.searchGridBoundaryService = searchGridBoundaryService;
        this.flightZoneBoundaryService = flightZoneBoundaryService;
        this.show = true;
        this.updater = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"](); //this.alt_min = 100;

        this.alt_max = 750;
      }

      _createClass(PolygonLayerExampleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var a = 0;

          function getId() {
            a = a + 1;
            return a;
          }

          function flat_points_to_poly(bps) {
            var material = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Cesium.Color.ORANGE.withAlpha(0.3);
            return {
              id: String(getId()),
              entity: new angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcEntity"]({
                hierarchy: Cesium.Cartesian3.fromDegreesArrayHeights(bps),
                extrudedHeight: 0,
                perPositionHeight: true,
                material: material,
                outline: true,
                outlineColor: Cesium.Color.BLACK
              }),
              actionType: angular_cesium__WEBPACK_IMPORTED_MODULE_3__["ActionType"].ADD_UPDATE
            };
          }

          this.flat_sgb = this.searchGridBoundaryService.get_search_grid_boundary().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (points) {
            return points.map(function (point) {
              return [point.longitude, point.latitude, _this.alt_max];
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])());
          this.flat_fzb = this.flightZoneBoundaryService.get_flight_zone_boundary().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (points) {
            return points[0].boundaryPoints.map(function (point) {
              return [point.longitude, point.latitude, _this.alt_max];
            });
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeAll"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["toArray"])());
          this.sgb$ = this.flat_sgb.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            return flat_points_to_poly(x);
          }));
          this.fzb$ = this.flat_fzb.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
            return flat_points_to_poly(x, Cesium.Color.TEAL.withAlpha(0.2));
          }));
        }
      }, {
        key: "setShow",
        value: function setShow($event) {
          this.show = $event;
        }
      }]);

      return PolygonLayerExampleComponent;
    }();

    PolygonLayerExampleComponent.ɵfac = function PolygonLayerExampleComponent_Factory(t) {
      return new (t || PolygonLayerExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_search_grid_boundary_search_grid_boundary_service__WEBPACK_IMPORTED_MODULE_4__["SearchGridBoundaryService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_flight_zone_boundary_flight_zone_boundary_service__WEBPACK_IMPORTED_MODULE_5__["FlightZoneBoundaryService"]));
    };

    PolygonLayerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PolygonLayerExampleComponent,
      selectors: [["polygon-layer-example"]],
      viewQuery: function PolygonLayerExampleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLayerComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.layer = _t.first);
        }
      },
      decls: 4,
      vars: 4,
      consts: [["acFor", "let polygon of sgb$", 3, "context", "show"], ["props", "{\n        hierarchy: polygon.hierarchy,\n        material: polygon.material,\n        height: polygon.height,\n        outline: polygon.outline,\n        outlineColor: polygon.outlineColor,\n        extrudedHeight: polygon.extrudedHeight,\n        perPositionHeight: polygon.perPositionHeight,\n        show: polygon.show\n    }"], ["acFor", "let polygon of fzb$", 3, "context", "show"]],
      template: function PolygonLayerExampleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ac-layer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ac-polygon-desc", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ac-layer", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "ac-polygon-desc", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("context", ctx)("show", ctx.show);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("context", ctx)("show", ctx.show);
        }
      },
      directives: [angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLayerComponent"], angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcPolygonDescComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PolygonLayerExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'polygon-layer-example',
          template: "\n      <ac-layer acFor=\"let polygon of sgb$\" [context]=\"this\" [show]=\"show\">\n          <ac-polygon-desc props=\"{\n        hierarchy: polygon.hierarchy,\n        material: polygon.material,\n        height: polygon.height,\n        outline: polygon.outline,\n        outlineColor: polygon.outlineColor,\n        extrudedHeight: polygon.extrudedHeight,\n        perPositionHeight: polygon.perPositionHeight,\n        show: polygon.show\n    }\">\n          </ac-polygon-desc>\n      </ac-layer>\n      <ac-layer acFor=\"let polygon of fzb$\" [context]=\"this\" [show]=\"show\">\n          <ac-polygon-desc props=\"{\n        hierarchy: polygon.hierarchy,\n        material: polygon.material,\n        height: polygon.height,\n        outline: polygon.outline,\n        outlineColor: polygon.outlineColor,\n        extrudedHeight: polygon.extrudedHeight,\n        perPositionHeight: polygon.perPositionHeight,\n        show: polygon.show\n    }\">\n          </ac-polygon-desc>\n      </ac-layer>\n\n  "
        }]
      }], function () {
        return [{
          type: _services_search_grid_boundary_search_grid_boundary_service__WEBPACK_IMPORTED_MODULE_4__["SearchGridBoundaryService"]
        }, {
          type: _services_flight_zone_boundary_flight_zone_boundary_service__WEBPACK_IMPORTED_MODULE_5__["FlightZoneBoundaryService"]
        }];
      }, {
        layer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLayerComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/flight-zone-boundary/flight-zone-boundary.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/services/flight-zone-boundary/flight-zone-boundary.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: FlightZoneBoundaryService */

  /***/
  function srcAppServicesFlightZoneBoundaryFlightZoneBoundaryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightZoneBoundaryService", function () {
      return FlightZoneBoundaryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var FlightZoneBoundaryService = /*#__PURE__*/function () {
      function FlightZoneBoundaryService(http) {
        _classCallCheck(this, FlightZoneBoundaryService);

        this.http = http;
      }

      _createClass(FlightZoneBoundaryService, [{
        key: "get_flight_zone_boundary",
        value: function get_flight_zone_boundary() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/flyZones", {
            params: params
          });
        }
      }]);

      return FlightZoneBoundaryService;
    }();

    FlightZoneBoundaryService.ɵfac = function FlightZoneBoundaryService_Factory(t) {
      return new (t || FlightZoneBoundaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FlightZoneBoundaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FlightZoneBoundaryService,
      factory: FlightZoneBoundaryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlightZoneBoundaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/obstacles/obstacles.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/obstacles/obstacles.service.ts ***!
    \*********************************************************/

  /*! exports provided: ObstaclesService */

  /***/
  function srcAppServicesObstaclesObstaclesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObstaclesService", function () {
      return ObstaclesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ObstaclesService = /*#__PURE__*/function () {
      function ObstaclesService(http) {
        _classCallCheck(this, ObstaclesService);

        this.http = http;
      }

      _createClass(ObstaclesService, [{
        key: "get_obstacles",
        value: function get_obstacles() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/stationaryObstacles", {
            params: params
          });
        }
      }]);

      return ObstaclesService;
    }();

    ObstaclesService.ɵfac = function ObstaclesService_Factory(t) {
      return new (t || ObstaclesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ObstaclesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ObstaclesService,
      factory: ObstaclesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObstaclesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/poi/poi.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/poi/poi.service.ts ***!
    \*********************************************/

  /*! exports provided: PoiService */

  /***/
  function srcAppServicesPoiPoiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoiService", function () {
      return PoiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PoiService = /*#__PURE__*/function () {
      function PoiService(http) {
        _classCallCheck(this, PoiService);

        this.http = http;
      }

      _createClass(PoiService, [{
        key: "get_lost_comms",
        value: function get_lost_comms() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/lostCommsPos", {
            params: params
          });
        }
      }, {
        key: "get_waypoints",
        value: function get_waypoints() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/waypoints", {
            params: params
          });
        }
      }, {
        key: "get_off_axis",
        value: function get_off_axis() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/offAxisOdlcPos", {
            params: params
          });
        }
      }, {
        key: "get_emergent",
        value: function get_emergent() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/emergentLastKnownPos", {
            params: params
          });
        }
      }, {
        key: "get_airdrop",
        value: function get_airdrop() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/airDropPos", {
            params: params
          });
        }
      }, {
        key: "get_ugv_drive",
        value: function get_ugv_drive() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/ugvDrivePos", {
            params: params
          });
        }
      }]);

      return PoiService;
    }();

    PoiService.ɵfac = function PoiService_Factory(t) {
      return new (t || PoiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    PoiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PoiService,
      factory: PoiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/search-grid-boundary/search-grid-boundary.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/services/search-grid-boundary/search-grid-boundary.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: SearchGridBoundaryService */

  /***/
  function srcAppServicesSearchGridBoundarySearchGridBoundaryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchGridBoundaryService", function () {
      return SearchGridBoundaryService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SearchGridBoundaryService = /*#__PURE__*/function () {
      function SearchGridBoundaryService(http) {
        _classCallCheck(this, SearchGridBoundaryService);

        this.http = http;
      }

      _createClass(SearchGridBoundaryService, [{
        key: "get_search_grid_boundary",
        value: function get_search_grid_boundary() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("/api/searchGridPoints", {
            params: params
          });
        }
      }]);

      return SearchGridBoundaryService;
    }();

    SearchGridBoundaryService.ɵfac = function SearchGridBoundaryService_Factory(t) {
      return new (t || SearchGridBoundaryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    SearchGridBoundaryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SearchGridBoundaryService,
      factory: SearchGridBoundaryService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchGridBoundaryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/waypoints/waypoints.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/waypoints/waypoints.component.ts ***!
    \**************************************************/

  /*! exports provided: WaypointsComponent */

  /***/
  function srcAppWaypointsWaypointsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaypointsComponent", function () {
      return WaypointsComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_cesium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-cesium */
    "./node_modules/angular-cesium/__ivy_ngcc__/fesm2015/angular-cesium.js");
    /* harmony import */


    var _services_poi_poi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/poi/poi.service */
    "./src/app/services/poi/poi.service.ts");

    var WaypointsComponent = /*#__PURE__*/function () {
      function WaypointsComponent(poiService) {
        _classCallCheck(this, WaypointsComponent);

        this.poiService = poiService;
        this.show = true;
        this.Cesium = Cesium;
      }

      _createClass(WaypointsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var a = 0;

          function getId() {
            a = a + 1;
            return a;
          }

          function makeACEntity(a, color) {
            return {
              id: String(getId()),
              actionType: angular_cesium__WEBPACK_IMPORTED_MODULE_3__["ActionType"].ADD_UPDATE,
              entity: {
                position: Cesium.Cartesian3.fromDegrees(a["longitude"], a["latitude"], a["altitude"]),
                color: color
              }
            };
          }

          this.waypoints$ = this.poiService.get_waypoints().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (points) {
            return points.map(function (point) {
              return makeACEntity(point, Cesium.Color.GREEN);
            });
          }));
          this.lost_comms$ = this.poiService.get_lost_comms().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (point) {
            return makeACEntity(point, Cesium.Color.RED);
          }));
          this.off_axis$ = this.poiService.get_off_axis().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (point) {
            return makeACEntity(point, Cesium.Color.CHOCOLATE);
          }));
          this.emergent$ = this.poiService.get_emergent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (point) {
            return makeACEntity(point, Cesium.Color.ORANGE);
          }));
          this.ugv_drive$ = this.poiService.get_ugv_drive().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (point) {
            return makeACEntity(point, Cesium.Color.BLACK);
          }));
          this.entities$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["concat"])(this.waypoints$, this.lost_comms$, this.off_axis$, this.emergent$, this.ugv_drive$);
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          this.layer.removeAll();
        }
      }, {
        key: "setShow",
        value: function setShow($event) {
          this.show = $event;
        }
      }]);

      return WaypointsComponent;
    }();

    WaypointsComponent.ɵfac = function WaypointsComponent_Factory(t) {
      return new (t || WaypointsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_poi_poi_service__WEBPACK_IMPORTED_MODULE_4__["PoiService"]));
    };

    WaypointsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: WaypointsComponent,
      selectors: [["waypoints"]],
      viewQuery: function WaypointsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLayerComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.layer = _t.first);
        }
      },
      decls: 3,
      vars: 2,
      consts: [["acFor", "let point of entities$", 3, "context", "show"], ["props", "{\n              position: point.position,\n              pixelSize : 10,\n              outlineColor: point.color,\n              outlineWidth: 2,\n           }"], ["props", "{\n            position: point.position,\n            pixelOffset : [-15, 20] | pixelOffset,\n            text: point.id,\n            font: '12px sans-serif'\n            }"]],
      template: function WaypointsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ac-layer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ac-point-desc", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ac-label-desc", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("context", ctx)("show", ctx.show);
        }
      },
      directives: [angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLayerComponent"], angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcPointDescComponent"], angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLabelDescComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WaypointsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'waypoints',
          template: "\n      <ac-layer acFor=\"let point of entities$\" [context]=\"this\" [show]=\"show\">\n          <ac-point-desc props=\"{\n              position: point.position,\n              pixelSize : 10,\n              outlineColor: point.color,\n              outlineWidth: 2,\n           }\">\n           </ac-point-desc>\n           <ac-label-desc props=\"{\n            position: point.position,\n            pixelOffset : [-15, 20] | pixelOffset,\n            text: point.id,\n            font: '12px sans-serif'\n            }\">\n          </ac-label-desc>\n      </ac-layer>\n  ",
          styleUrls: []
        }]
      }], function () {
        return [{
          type: _services_poi_poi_service__WEBPACK_IMPORTED_MODULE_4__["PoiService"]
        }];
      }, {
        layer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [angular_cesium__WEBPACK_IMPORTED_MODULE_3__["AcLayerComponent"], {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      api_url: "http://127.0.0.1:5000/api",
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Cesium.buildModuleUrl.setBaseUrl('/assets/cesium/'); //Cesium.Ion.defaultAccessToken="";

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/eamon/Documents/cesiumDemo/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map