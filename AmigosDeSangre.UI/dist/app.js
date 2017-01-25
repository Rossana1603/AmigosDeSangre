webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
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
	var platform_browser_1 = __webpack_require__(21);
	var http_1 = __webpack_require__(24);
	var forms_1 = __webpack_require__(25);
	var angular2_infinite_scroll_1 = __webpack_require__(29);
	var app_component_1 = __webpack_require__(61);
	var app_routing_1 = __webpack_require__(63);
	// Services
	// Components for module A
	var home_component_1 = __webpack_require__(86);
	// Directives
	// Shared
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent
	            ],
	            imports: [
	                platform_browser_1.BrowserModule,
	                http_1.HttpModule,
	                forms_1.FormsModule,
	                app_routing_1.routing,
	                angular2_infinite_scroll_1.InfiniteScrollModule
	            ],
	            providers: [],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var infinite_scroll_1 = __webpack_require__(30);
	var scroller_1 = __webpack_require__(31);
	var position_resolver_1 = __webpack_require__(58);
	var axis_resolver_1 = __webpack_require__(59);
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(58));
	__export(__webpack_require__(59));
	__export(__webpack_require__(60));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = {
	    directives: [infinite_scroll_1.InfiniteScroll, scroller_1.Scroller, axis_resolver_1.AxisResolver, position_resolver_1.PositionResolver]
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjItaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxnQ0FBK0IsdUJBQXVCLENBQUMsQ0FBQTtBQUN2RCx5QkFBeUIsZ0JBQWdCLENBQUMsQ0FBQTtBQUMxQyxrQ0FBaUMseUJBQXlCLENBQUMsQ0FBQTtBQUMzRCw4QkFBNkIscUJBQXFCLENBQUMsQ0FBQTtBQUVuRCxpQkFBYyx1QkFBdUIsQ0FBQyxFQUFBO0FBQ3RDLGlCQUFjLGdCQUFnQixDQUFDLEVBQUE7QUFDL0IsaUJBQWMseUJBQXlCLENBQUMsRUFBQTtBQUN4QyxpQkFBYyxxQkFBcUIsQ0FBQyxFQUFBO0FBQ3BDLGlCQUFjLGFBQWEsQ0FBQyxFQUFBO0FBRTVCO2tCQUFlO0lBQ2QsVUFBVSxFQUFFLENBQUUsZ0NBQWMsRUFBRSxtQkFBUSxFQUFFLDRCQUFZLEVBQUUsb0NBQWdCLENBQUU7Q0FDeEUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZmluaXRlU2Nyb2xsIH0gZnJvbSAnLi9zcmMvaW5maW5pdGUtc2Nyb2xsJztcbmltcG9ydCB7IFNjcm9sbGVyIH0gZnJvbSAnLi9zcmMvc2Nyb2xsZXInO1xuaW1wb3J0IHsgUG9zaXRpb25SZXNvbHZlciB9IGZyb20gJy4vc3JjL3Bvc2l0aW9uLXJlc29sdmVyJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciB9IGZyb20gJy4vc3JjL2F4aXMtcmVzb2x2ZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL3NyYy9pbmZpbml0ZS1zY3JvbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvc2Nyb2xsZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcG9zaXRpb24tcmVzb2x2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvYXhpcy1yZXNvbHZlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9pbmRleCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGlyZWN0aXZlczogWyBJbmZpbml0ZVNjcm9sbCwgU2Nyb2xsZXIsIEF4aXNSZXNvbHZlciwgUG9zaXRpb25SZXNvbHZlciBdXG59XG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var scroller_1 = __webpack_require__(31);
	var position_resolver_1 = __webpack_require__(58);
	var InfiniteScroll = (function () {
	    function InfiniteScroll(element, zone, positionResolverFactory) {
	        this.element = element;
	        this.zone = zone;
	        this.positionResolverFactory = positionResolverFactory;
	        this._distanceDown = 2;
	        this._distanceUp = 1.5;
	        this._throttle = 300;
	        this._disabled = false;
	        this.scrollWindow = true;
	        this._immediate = false;
	        this._horizontal = false;
	        this._alwaysCallback = false;
	        this.scrolled = new core_1.EventEmitter();
	        this.scrolledUp = new core_1.EventEmitter();
	    }
	    InfiniteScroll.prototype.ngOnInit = function () {
	        if (typeof window !== 'undefined') {
	            var containerElement = this.scrollWindow ? window : this.element;
	            this.scroller = new scroller_1.Scroller(containerElement, setInterval, this.element, this.onScrollDown.bind(this), this.onScrollUp.bind(this), this._distanceDown, this._distanceUp, {}, this._throttle, this._immediate, this._horizontal, this._alwaysCallback, this._disabled, this.positionResolverFactory);
	        }
	    };
	    InfiniteScroll.prototype.ngOnDestroy = function () {
	        if (this.scroller) {
	            this.scroller.clean();
	        }
	    };
	    InfiniteScroll.prototype.ngOnChanges = function (changes) {
	        if (changes['_disabled'] && this.scroller) {
	            this.scroller.handleInfiniteScrollDisabled(changes['_disabled'].currentValue);
	        }
	    };
	    InfiniteScroll.prototype.onScrollDown = function (data) {
	        var _this = this;
	        if (data === void 0) { data = { currentScrollPosition: 0 }; }
	        this.zone.run(function () { return _this.scrolled.next(data); });
	    };
	    InfiniteScroll.prototype.onScrollUp = function (data) {
	        var _this = this;
	        if (data === void 0) { data = { currentScrollPosition: 0 }; }
	        this.zone.run(function () { return _this.scrolledUp.next(data); });
	    };
	    InfiniteScroll.decorators = [
	        { type: core_1.Directive, args: [{
	                    selector: '[infinite-scroll]'
	                },] },
	    ];
	    /** @nocollapse */
	    InfiniteScroll.ctorParameters = [
	        { type: core_1.ElementRef, },
	        { type: core_1.NgZone, },
	        { type: position_resolver_1.PositionResolverFactory, },
	    ];
	    InfiniteScroll.propDecorators = {
	        '_distanceDown': [{ type: core_1.Input, args: ['infiniteScrollDistance',] },],
	        '_distanceUp': [{ type: core_1.Input, args: ['infiniteScrollUpDistance',] },],
	        '_throttle': [{ type: core_1.Input, args: ['infiniteScrollThrottle',] },],
	        '_disabled': [{ type: core_1.Input, args: ['infiniteScrollDisabled',] },],
	        'scrollWindow': [{ type: core_1.Input, args: ['scrollWindow',] },],
	        '_immediate': [{ type: core_1.Input, args: ['immediateCheck',] },],
	        '_horizontal': [{ type: core_1.Input, args: ['horizontal',] },],
	        '_alwaysCallback': [{ type: core_1.Input, args: ['alwaysCallback',] },],
	        'scrolled': [{ type: core_1.Output },],
	        'scrolledUp': [{ type: core_1.Output },],
	    };
	    return InfiniteScroll;
	}());
	exports.InfiniteScroll = InfiniteScroll;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5maW5pdGUtc2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5maW5pdGUtc2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBd0gsZUFBZSxDQUFDLENBQUE7QUFDeEkseUJBQThDLFlBQVksQ0FBQyxDQUFBO0FBQzNELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBRzlEO0lBZUUsd0JBQ1UsT0FBbUIsRUFDbkIsSUFBWSxFQUNaLHVCQUFnRDtRQUZoRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBZnpELGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsR0FBRyxDQUFDO1FBQzFCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGFBQVEsR0FBRyxJQUFJLG1CQUFZLEVBQXVCLENBQUM7UUFDbkQsZUFBVSxHQUFHLElBQUksbUJBQVksRUFBdUIsQ0FBQztJQU1uRCxDQUFDO0lBRUosaUNBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUNwRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFB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LEVBQUUsQ0FBQyxZQUFZLEVBQUcsRUFBRSxFQUFFO1FBQ3pELGlCQUFpQixFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBSyxFQUFFLElBQUksRUFBRSxDQUFDLGdCQUFnQixFQUFHLEVBQUUsRUFBRTtRQUNqRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtRQUMvQixZQUFZLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFNLEVBQUUsRUFBRTtLQUNoQyxDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQUFDLEFBMUVELElBMEVDO0FBMUVZLHNCQUFjLGlCQTBFMUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbGVyLCBJbmZpbml0ZVNjcm9sbEV2ZW50IH0gZnJvbSAnLi9zY3JvbGxlcic7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb24tcmVzb2x2ZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBJbmZpbml0ZVNjcm9sbCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwdWJsaWMgc2Nyb2xsZXI6IFNjcm9sbGVyO1xuXG4gICBfZGlzdGFuY2VEb3duOiBudW1iZXIgPSAyO1xuICAgX2Rpc3RhbmNlVXA6IG51bWJlciA9IDEuNTtcbiAgIF90aHJvdHRsZTogbnVtYmVyID0gMzAwO1xuICAgX2Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gICBzY3JvbGxXaW5kb3c6IGJvb2xlYW4gPSB0cnVlO1xuICAgX2ltbWVkaWF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgX2hvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgIF9hbHdheXNDYWxsYmFjazogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICBzY3JvbGxlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5maW5pdGVTY3JvbGxFdmVudD4oKTtcbiAgIHNjcm9sbGVkVXAgPSBuZXcgRXZlbnRFbWl0dGVyPEluZmluaXRlU2Nyb2xsRXZlbnQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgem9uZTogTmdab25lLFxuICAgIHByaXZhdGUgcG9zaXRpb25SZXNvbHZlckZhY3Rvcnk6IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQgPSB0aGlzLnNjcm9sbFdpbmRvdyA/IHdpbmRvdyA6IHRoaXMuZWxlbWVudDtcbiAgICAgIHRoaXMuc2Nyb2xsZXIgPSBuZXcgU2Nyb2xsZXIoY29udGFpbmVyRWxlbWVudCwgc2V0SW50ZXJ2YWwsIHRoaXMuZWxlbWVudCxcbiAgICAgICAgICB0aGlzLm9uU2Nyb2xsRG93bi5iaW5kKHRoaXMpLCB0aGlzLm9uU2Nyb2xsVXAuYmluZCh0aGlzKSxcbiAgICAgICAgICB0aGlzLl9kaXN0YW5jZURvd24sIHRoaXMuX2Rpc3RhbmNlVXAsIHt9LCB0aGlzLl90aHJvdHRsZSxcbiAgICAgICAgICB0aGlzLl9pbW1lZGlhdGUsIHRoaXMuX2hvcml6b250YWwsIHRoaXMuX2Fsd2F5c0NhbGxiYWNrLFxuICAgICAgICAgIHRoaXMuX2Rpc2FibGVkLCB0aGlzLnBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5KTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSAoKSB7XG4gICAgaWYgKHRoaXMuc2Nyb2xsZXIpIHtcbiAgICAgIHRoaXMuc2Nyb2xsZXIuY2xlYW4oKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYoY2hhbmdlc1snX2Rpc2FibGVkJ10gJiYgdGhpcy5zY3JvbGxlcil7XG4gICAgICB0aGlzLnNjcm9sbGVyLmhhbmRsZUluZmluaXRlU2Nyb2xsRGlzYWJsZWQoY2hhbmdlc1snX2Rpc2FibGVkJ10uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBvblNjcm9sbERvd24oZGF0YTogSW5maW5pdGVTY3JvbGxFdmVudCA9IHsgY3VycmVudFNjcm9sbFBvc2l0aW9uOiAwIH0pIHtcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuc2Nyb2xsZWQubmV4dChkYXRhKSk7XG4gIH1cblxuICBvblNjcm9sbFVwKGRhdGE6IEluZmluaXRlU2Nyb2xsRXZlbnQgPSB7IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogMCB9KSB7XG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLnNjcm9sbGVkVXAubmV4dChkYXRhKSk7XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IERpcmVjdGl2ZSwgYXJnczogW3tcbiAgc2VsZWN0b3I6ICdbaW5maW5pdGUtc2Nyb2xsXSdcbn0sIF0gfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSBbXG57dHlwZTogRWxlbWVudFJlZiwgfSxcbnt0eXBlOiBOZ1pvbmUsIH0sXG57dHlwZTogUG9zaXRpb25SZXNvbHZlckZhY3RvcnksIH0sXG5dO1xuc3RhdGljIHByb3BEZWNvcmF0b3JzOiB7W2tleTogc3RyaW5nXTogRGVjb3JhdG9ySW52b2NhdGlvbltdfSA9IHtcbidfZGlzdGFuY2VEb3duJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaW5maW5pdGVTY3JvbGxEaXN0YW5jZScsIF0gfSxdLFxuJ19kaXN0YW5jZVVwJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaW5maW5pdGVTY3JvbGxVcERpc3RhbmNlJywgXSB9LF0sXG4nX3Rocm90dGxlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaW5maW5pdGVTY3JvbGxUaHJvdHRsZScsIF0gfSxdLFxuJ19kaXNhYmxlZCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2luZmluaXRlU2Nyb2xsRGlzYWJsZWQnLCBdIH0sXSxcbidzY3JvbGxXaW5kb3cnOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydzY3JvbGxXaW5kb3cnLCBdIH0sXSxcbidfaW1tZWRpYXRlJzogW3sgdHlwZTogSW5wdXQsIGFyZ3M6IFsnaW1tZWRpYXRlQ2hlY2snLCBdIH0sXSxcbidfaG9yaXpvbnRhbCc6IFt7IHR5cGU6IElucHV0LCBhcmdzOiBbJ2hvcml6b250YWwnLCBdIH0sXSxcbidfYWx3YXlzQ2FsbGJhY2snOiBbeyB0eXBlOiBJbnB1dCwgYXJnczogWydhbHdheXNDYWxsYmFjaycsIF0gfSxdLFxuJ3Njcm9sbGVkJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbidzY3JvbGxlZFVwJzogW3sgdHlwZTogT3V0cHV0IH0sXSxcbn07XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(5);
	__webpack_require__(32);
	__webpack_require__(35);
	__webpack_require__(46);
	__webpack_require__(53);
	__webpack_require__(55);
	;
	var Scroller = (function () {
	    function Scroller(windowElement, $interval, $elementRef, infiniteScrollDownCallback, infiniteScrollUpCallback, infiniteScrollDownDistance, infiniteScrollUpDistance, infiniteScrollParent, infiniteScrollThrottle, isImmediate, horizontal, alwaysCallback, scrollDisabled, _positionResolver) {
	        if (horizontal === void 0) { horizontal = false; }
	        if (alwaysCallback === void 0) { alwaysCallback = false; }
	        if (scrollDisabled === void 0) { scrollDisabled = false; }
	        this.windowElement = windowElement;
	        this.$interval = $interval;
	        this.$elementRef = $elementRef;
	        this.infiniteScrollDownCallback = infiniteScrollDownCallback;
	        this.infiniteScrollUpCallback = infiniteScrollUpCallback;
	        this.infiniteScrollThrottle = infiniteScrollThrottle;
	        this.isImmediate = isImmediate;
	        this.horizontal = horizontal;
	        this.alwaysCallback = alwaysCallback;
	        this.scrollDisabled = scrollDisabled;
	        this._positionResolver = _positionResolver;
	        this.lastScrollPosition = 0;
	        this.isContainerWindow = Object.prototype.toString.call(this.windowElement).includes('Window');
	        this.documentElement = this.isContainerWindow ? this.windowElement.document.documentElement : null;
	        this.handleInfiniteScrollDistance(infiniteScrollDownDistance, infiniteScrollUpDistance);
	        // if (attrs.infiniteScrollParent != null) {
	        // 	attachEvent(angular.element(elem.parent()));
	        // }
	        this.handleInfiniteScrollDisabled(scrollDisabled);
	        this.defineContainer();
	        this.positionResolver = this._positionResolver.create({
	            container: this.container,
	            documentElement: this.documentElement,
	            isContainerWindow: this.isContainerWindow,
	            horizontal: horizontal
	        });
	        this.createInterval();
	    }
	    Scroller.prototype.defineContainer = function () {
	        if (this.isContainerWindow) {
	            this.container = this.windowElement;
	        }
	        else {
	            this.container = this.windowElement.nativeElement;
	        }
	        this.attachEvent(this.container);
	    };
	    Scroller.prototype.createInterval = function () {
	        var _this = this;
	        if (this.isImmediate) {
	            this.checkInterval = this.$interval(function () {
	                return _this.handler();
	            }, 0);
	        }
	    };
	    Scroller.prototype.handler = function () {
	        var container = this.positionResolver.calculatePoints(this.$elementRef);
	        var scrollingDown = this.lastScrollPosition < container.scrolledUntilNow;
	        this.lastScrollPosition = container.scrolledUntilNow;
	        var remaining;
	        var containerBreakpoint;
	        if (scrollingDown) {
	            remaining = container.totalToScroll - container.scrolledUntilNow;
	            containerBreakpoint = container.height * this.scrollDownDistance + 1;
	        }
	        else {
	            remaining = container.scrolledUntilNow;
	            containerBreakpoint = container.height * this.scrollUpDistance + 1;
	        }
	        var shouldScroll = remaining <= containerBreakpoint;
	        var triggerCallback = (this.alwaysCallback || shouldScroll) && this.scrollEnabled;
	        var shouldClearInterval = !shouldScroll && this.checkInterval;
	        // if (this.useDocumentBottom) {
	        // 	container.totalToScroll = this.height(this.$elementRef.nativeElement.ownerDocument);
	        // }
	        this.checkWhenEnabled = shouldScroll;
	        if (triggerCallback) {
	            var infiniteScrollEvent = {
	                currentScrollPosition: container.scrolledUntilNow
	            };
	            if (scrollingDown) {
	                this.infiniteScrollDownCallback(infiniteScrollEvent);
	            }
	            else {
	                this.infiniteScrollUpCallback(infiniteScrollEvent);
	            }
	        }
	        if (shouldClearInterval) {
	            clearInterval(this.checkInterval);
	        }
	    };
	    Scroller.prototype.handleInfiniteScrollDistance = function (scrollDownDistance, scrollUpDistance) {
	        this.scrollDownDistance = parseFloat(scrollDownDistance) || 0;
	        this.scrollUpDistance = parseFloat(scrollUpDistance) || 0;
	    };
	    Scroller.prototype.attachEvent = function (newContainer) {
	        var _this = this;
	        this.clean();
	        if (newContainer) {
	            var throttle_1 = this.infiniteScrollThrottle;
	            this.disposeScroll = Observable_1.Observable.fromEvent(this.container, 'scroll')
	                .throttle(function (ev) { return Observable_1.Observable.timer(throttle_1); })
	                .filter(function (ev) { return _this.scrollEnabled; })
	                .subscribe(function (ev) { return _this.handler(); });
	        }
	    };
	    Scroller.prototype.clean = function () {
	        if (this.disposeScroll) {
	            this.disposeScroll.unsubscribe();
	        }
	    };
	    Scroller.prototype.handleInfiniteScrollDisabled = function (scrollDisabled) {
	        this.scrollEnabled = !scrollDisabled;
	    };
	    return Scroller;
	}());
	exports.Scroller = Scroller;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFJN0MsUUFBTywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3ZDLFFBQU8sMkJBQTJCLENBQUMsQ0FBQTtBQUNuQyxRQUFPLDRCQUE0QixDQUFDLENBQUE7QUFDcEMsUUFBTywwQkFBMEIsQ0FBQyxDQUFBO0FBQ2xDLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUloQyxDQUFDO0FBRUY7SUFnQkUsa0JBQ1UsYUFBd0MsRUFDeEMsU0FBbUIsRUFDbkIsV0FBdUIsRUFDdkIsMEJBQW9DLEVBQ3BDLHdCQUFrQyxFQUMxQywwQkFBa0MsRUFDbEMsd0JBQWdDLEVBQ2hDLG9CQUErQyxFQUN2QyxzQkFBOEIsRUFDOUIsV0FBb0IsRUFDcEIsVUFBMkIsRUFDM0IsY0FBK0IsRUFDL0IsY0FBK0IsRUFDL0IsaUJBQTBDO1FBSGxELDBCQUFtQyxHQUFuQyxrQkFBbUM7UUFDbkMsOEJBQXVDLEdBQXZDLHNCQUF1QztRQUN2Qyw4QkFBdUMsR0FBdkMsc0JBQXVDO1FBWi9CLGtCQUFhLEdBQWIsYUFBYSxDQUEyQjtRQUN4QyxjQUFTLEdBQVQsU0FBUyxDQUFVO1FBQ25CLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBVTtRQUNwQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQVU7UUFJbEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFRO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFTO1FBQ3BCLGVBQVUsR0FBVixVQUFVLENBQWlCO1FBQzNCLG1CQUFjLEdBQWQsY0FBYyxDQUFpQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQWxCN0MsdUJBQWtCLEdBQVcsQ0FBQyxDQUFDO1FBb0JwQyxJQUFJ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QUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDO2lCQUNoRSxRQUFRLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxVQUFRLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQztpQkFDMUMsTUFBTSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBbEIsQ0FBa0IsQ0FBQztpQkFDaEMsU0FBUyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkMsQ0FBQztJQUNILENBQUM7SUFFRCwrQ0FBNEIsR0FBNUIsVUFBOEIsY0FBdUI7UUFDbkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFqSUQsSUFpSUM7QUFqSVksZ0JBQVEsV0FpSXBCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciB9IGZyb20gJy4vYXhpcy1yZXNvbHZlcic7XG5pbXBvcnQgeyBQb3NpdGlvblJlc29sdmVyLCBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vcG9zaXRpb24tcmVzb2x2ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGltZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci90aHJvdHRsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2ZpbHRlcic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcblxuZXhwb3J0IGludGVyZmFjZSBJbmZpbml0ZVNjcm9sbEV2ZW50IHtcbiAgY3VycmVudFNjcm9sbFBvc2l0aW9uOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgU2Nyb2xsZXIge1xuICBwdWJsaWMgc2Nyb2xsRG93bkRpc3RhbmNlOiBudW1iZXI7XG4gIHB1YmxpYyBzY3JvbGxVcERpc3RhbmNlOiBudW1iZXI7XG4gIHB1YmxpYyBzY3JvbGxFbmFibGVkOiBib29sZWFuO1xuICBwdWJsaWMgY2hlY2tXaGVuRW5hYmxlZDogYm9vbGVhbjtcbiAgcHVibGljIGNvbnRhaW5lcjogV2luZG93IHwgRWxlbWVudFJlZiB8IGFueTtcbiAgcHVibGljIGltbWVkaWF0ZUNoZWNrOiBib29sZWFuO1xuICBwdWJsaWMgdXNlRG9jdW1lbnRCb3R0b206IGJvb2xlYW47XG4gIHB1YmxpYyBjaGVja0ludGVydmFsOiBudW1iZXI7XG4gIHByaXZhdGUgZG9jdW1lbnRFbGVtZW50OiBXaW5kb3cgfCBFbGVtZW50UmVmIHwgYW55O1xuICBwcml2YXRlIGlzQ29udGFpbmVyV2luZG93OiBib29sZWFuO1xuICBwcml2YXRlIGRpc3Bvc2VTY3JvbGw6IFN1YnNjcmlwdGlvbjtcbiAgcHVibGljIGxhc3RTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgLy8gcHJpdmF0ZSBheGlzOiBBeGlzUmVzb2x2ZXI7XG4gIHByaXZhdGUgcG9zaXRpb25SZXNvbHZlcjogUG9zaXRpb25SZXNvbHZlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHdpbmRvd0VsZW1lbnQ6IFdpbmRvdyB8IEVsZW1lbnRSZWYgfCBhbnksXG4gICAgcHJpdmF0ZSAkaW50ZXJ2YWw6IEZ1bmN0aW9uLFxuICAgIHByaXZhdGUgJGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBpbmZpbml0ZVNjcm9sbERvd25DYWxsYmFjazogRnVuY3Rpb24sXG4gICAgcHJpdmF0ZSBpbmZpbml0ZVNjcm9sbFVwQ2FsbGJhY2s6IEZ1bmN0aW9uLFxuICAgIGluZmluaXRlU2Nyb2xsRG93bkRpc3RhbmNlOiBudW1iZXIsXG4gICAgaW5maW5pdGVTY3JvbGxVcERpc3RhbmNlOiBudW1iZXIsXG4gICAgaW5maW5pdGVTY3JvbGxQYXJlbnQ6IFdpbmRvdyB8IEVsZW1lbnRSZWYgfCBhbnksXG4gICAgcHJpdmF0ZSBpbmZpbml0ZVNjcm9sbFRocm90dGxlOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBpc0ltbWVkaWF0ZTogYm9vbGVhbixcbiAgICBwcml2YXRlIGhvcml6b250YWw6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICBwcml2YXRlIGFsd2F5c0NhbGxiYWNrOiBib29sZWFuID0gZmFsc2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlLFxuICAgIHByaXZhdGUgX3Bvc2l0aW9uUmVzb2x2ZXI6IFBvc2l0aW9uUmVzb2x2ZXJGYWN0b3J5XG4gICkge1xuICAgIHRoaXMuaXNDb250YWluZXJXaW5kb3cgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpcy53aW5kb3dFbGVtZW50KS5pbmNsdWRlcygnV2luZG93Jyk7XG4gICAgdGhpcy5kb2N1bWVudEVsZW1lbnQgPSB0aGlzLmlzQ29udGFpbmVyV2luZG93ID8gdGhpcy53aW5kb3dFbGVtZW50LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGw7XG4gICAgdGhpcy5oYW5kbGVJbmZpbml0ZVNjcm9sbERpc3RhbmNlKGluZmluaXRlU2Nyb2xsRG93bkRpc3RhbmNlLCBpbmZpbml0ZVNjcm9sbFVwRGlzdGFuY2UpO1xuXG4gICAgLy8gaWYgKGF0dHJzLmluZmluaXRlU2Nyb2xsUGFyZW50ICE9IG51bGwpIHtcbiAgICAvLyBcdGF0dGFjaEV2ZW50KGFuZ3VsYXIuZWxlbWVudChlbGVtLnBhcmVudCgpKSk7XG4gICAgLy8gfVxuICAgIHRoaXMuaGFuZGxlSW5maW5pdGVTY3JvbGxEaXNhYmxlZChzY3JvbGxEaXNhYmxlZCk7XG4gICAgdGhpcy5kZWZpbmVDb250YWluZXIoKTtcbiAgICB0aGlzLnBvc2l0aW9uUmVzb2x2ZXIgPSB0aGlzLl9wb3NpdGlvblJlc29sdmVyLmNyZWF0ZSh7XG4gICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgZG9jdW1lbnRFbGVtZW50OiB0aGlzLmRvY3VtZW50RWxlbWVudCxcbiAgICAgIGlzQ29udGFpbmVyV2luZG93OiB0aGlzLmlzQ29udGFpbmVyV2luZG93LFxuICAgICAgaG9yaXpvbnRhbDogaG9yaXpvbnRhbFxuICAgIH0pO1xuICAgIHRoaXMuY3JlYXRlSW50ZXJ2YWwoKTtcbiAgfVxuXG4gIGRlZmluZUNvbnRhaW5lciAoKSB7XG4gICAgaWYgKHRoaXMuaXNDb250YWluZXJXaW5kb3cpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy53aW5kb3dFbGVtZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRhaW5lciA9IHRoaXMud2luZG93RWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIH1cbiAgICB0aGlzLmF0dGFjaEV2ZW50KHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIGNyZWF0ZUludGVydmFsICgpIHtcbiAgICBpZiAodGhpcy5pc0ltbWVkaWF0ZSkge1xuICAgICAgdGhpcy5jaGVja0ludGVydmFsID0gdGhpcy4kaW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVyKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyICgpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnBvc2l0aW9uUmVzb2x2ZXIuY2FsY3VsYXRlUG9pbnRzKHRoaXMuJGVsZW1lbnRSZWYpO1xuICAgIGNvbnN0IHNjcm9sbGluZ0Rvd246IGJvb2xlYW4gPSB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA8IGNvbnRhaW5lci5zY3JvbGxlZFVudGlsTm93O1xuICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3c7XG5cbiAgICBsZXQgcmVtYWluaW5nOiBudW1iZXI7XG4gICAgbGV0IGNvbnRhaW5lckJyZWFrcG9pbnQ6IG51bWJlcjtcbiAgICBpZiAoc2Nyb2xsaW5nRG93bikge1xuICAgICAgcmVtYWluaW5nID0gY29udGFpbmVyLnRvdGFsVG9TY3JvbGwgLSBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgICAgIGNvbnRhaW5lckJyZWFrcG9pbnQgPSBjb250YWluZXIuaGVpZ2h0ICogdGhpcy5zY3JvbGxEb3duRGlzdGFuY2UgKyAxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1haW5pbmcgPSBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgICAgIGNvbnRhaW5lckJyZWFrcG9pbnQgPSBjb250YWluZXIuaGVpZ2h0ICogdGhpcy5zY3JvbGxVcERpc3RhbmNlICsgMTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkU2Nyb2xsOiBib29sZWFuID0gcmVtYWluaW5nIDw9IGNvbnRhaW5lckJyZWFrcG9pbnQ7XG4gICAgY29uc3QgdHJpZ2dlckNhbGxiYWNrOiBib29sZWFuID0gKHRoaXMuYWx3YXlzQ2FsbGJhY2sgfHwgc2hvdWxkU2Nyb2xsKSAmJiB0aGlzLnNjcm9sbEVuYWJsZWQ7XG4gICAgY29uc3Qgc2hvdWxkQ2xlYXJJbnRlcnZhbCA9ICFzaG91bGRTY3JvbGwgJiYgdGhpcy5jaGVja0ludGVydmFsO1xuICAgIC8vIGlmICh0aGlzLnVzZURvY3VtZW50Qm90dG9tKSB7XG4gICAgLy8gXHRjb250YWluZXIudG90YWxUb1Njcm9sbCA9IHRoaXMuaGVpZ2h0KHRoaXMuJGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vd25lckRvY3VtZW50KTtcbiAgICAvLyB9XG4gICAgdGhpcy5jaGVja1doZW5FbmFibGVkID0gc2hvdWxkU2Nyb2xsO1xuXG4gICAgaWYgKHRyaWdnZXJDYWxsYmFjaykge1xuICAgICAgY29uc3QgaW5maW5pdGVTY3JvbGxFdmVudDogSW5maW5pdGVTY3JvbGxFdmVudCA9IHsgXG4gICAgICAgIGN1cnJlbnRTY3JvbGxQb3NpdGlvbjogY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3cgXG4gICAgICB9O1xuICAgICAgaWYgKHNjcm9sbGluZ0Rvd24pIHtcbiAgICAgICAgdGhpcy5pbmZpbml0ZVNjcm9sbERvd25DYWxsYmFjayhpbmZpbml0ZVNjcm9sbEV2ZW50KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5maW5pdGVTY3JvbGxVcENhbGxiYWNrKGluZmluaXRlU2Nyb2xsRXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2hvdWxkQ2xlYXJJbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNoZWNrSW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUluZmluaXRlU2Nyb2xsRGlzdGFuY2UgKHNjcm9sbERvd25EaXN0YW5jZTogbnVtYmVyIHwgYW55LCBzY3JvbGxVcERpc3RhbmNlOiBudW1iZXIgfCBhbnkpIHtcbiAgICB0aGlzLnNjcm9sbERvd25EaXN0YW5jZSA9IHBhcnNlRmxvYXQoc2Nyb2xsRG93bkRpc3RhbmNlKSB8fCAwO1xuICAgIHRoaXMuc2Nyb2xsVXBEaXN0YW5jZSA9IHBhcnNlRmxvYXQoc2Nyb2xsVXBEaXN0YW5jZSkgfHwgMDtcbiAgfVxuXG4gIGF0dGFjaEV2ZW50IChuZXdDb250YWluZXI6IFdpbmRvdyB8IEVsZW1lbnRSZWYgfCBhbnkpIHtcbiAgICB0aGlzLmNsZWFuKCk7XG4gICAgaWYgKG5ld0NvbnRhaW5lcikge1xuICAgICAgY29uc3QgdGhyb3R0bGU6IG51bWJlciA9IHRoaXMuaW5maW5pdGVTY3JvbGxUaHJvdHRsZTtcbiAgICAgIHRoaXMuZGlzcG9zZVNjcm9sbCA9IE9ic2VydmFibGUuZnJvbUV2ZW50KHRoaXMuY29udGFpbmVyLCAnc2Nyb2xsJylcbiAgICAgICAgLnRocm90dGxlKGV2ID0+IE9ic2VydmFibGUudGltZXIodGhyb3R0bGUpKVxuICAgICAgICAuZmlsdGVyKGV2ID0+IHRoaXMuc2Nyb2xsRW5hYmxlZClcbiAgICAgICAgLnN1YnNjcmliZShldiA9PiB0aGlzLmhhbmRsZXIoKSk7XG4gICAgfVxuICB9XG5cbiAgY2xlYW4gKCkge1xuICAgIGlmICh0aGlzLmRpc3Bvc2VTY3JvbGwpIHtcbiAgICAgIHRoaXMuZGlzcG9zZVNjcm9sbC51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUluZmluaXRlU2Nyb2xsRGlzYWJsZWQgKHNjcm9sbERpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5zY3JvbGxFbmFibGVkID0gIXNjcm9sbERpc2FibGVkO1xuICB9XG59XG5cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var axis_resolver_1 = __webpack_require__(59);
	var PositionResolverFactory = (function () {
	    function PositionResolverFactory(axisResolver) {
	        this.axisResolver = axisResolver;
	    }
	    PositionResolverFactory.prototype.create = function (options) {
	        return new PositionResolver(this.axisResolver.create(!options.horizontal), options);
	    };
	    PositionResolverFactory.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    PositionResolverFactory.ctorParameters = [
	        { type: axis_resolver_1.AxisResolverFactory, },
	    ];
	    return PositionResolverFactory;
	}());
	exports.PositionResolverFactory = PositionResolverFactory;
	var PositionResolver = (function () {
	    function PositionResolver(axis, options) {
	        this.axis = axis;
	        this.options = options;
	    }
	    PositionResolver.prototype.calculatePoints = function (element) {
	        return this.options.isContainerWindow
	            ? this.calculatePointsForWindow(element)
	            : this.calculatePointsForElement(element);
	    };
	    PositionResolver.prototype.calculatePointsForWindow = function (element) {
	        // container's height
	        var height = this.height(this.options.container);
	        // scrolled until now / current y point
	        var scrolledUntilNow = height + this.pageYOffset(this.options.documentElement);
	        // total height / most bottom y point
	        var totalToScroll = this.offsetTop(element.nativeElement) + this.height(element.nativeElement);
	        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
	    };
	    PositionResolver.prototype.calculatePointsForElement = function (element) {
	        var scrollTop = this.axis.scrollTopKey();
	        var scrollHeight = this.axis.scrollHeightKey();
	        var height = this.height(this.options.container);
	        // perhaps use this.container.offsetTop instead of 'scrollTop'
	        var scrolledUntilNow = this.options.container[scrollTop];
	        var containerTopOffset = 0;
	        var offsetTop = this.offsetTop(this.options.container);
	        if (offsetTop !== void 0) {
	            containerTopOffset = offsetTop;
	        }
	        var totalToScroll = this.options.container[scrollHeight];
	        // const totalToScroll = this.offsetTop(this.$elementRef.nativeElement) - containerTopOffset + this.height(this.$elementRef.nativeElement);
	        return { height: height, scrolledUntilNow: scrolledUntilNow, totalToScroll: totalToScroll };
	    };
	    PositionResolver.prototype.height = function (elem) {
	        var offsetHeight = this.axis.offsetHeightKey();
	        var clientHeight = this.axis.clientHeightKey();
	        // elem = elem.nativeElement;
	        if (isNaN(elem[offsetHeight])) {
	            return this.options.documentElement[clientHeight];
	        }
	        else {
	            return elem[offsetHeight];
	        }
	    };
	    PositionResolver.prototype.offsetTop = function (elem) {
	        var top = this.axis.topKey();
	        // elem = elem.nativeElement;
	        if (!elem.getBoundingClientRect) {
	            return;
	        }
	        return elem.getBoundingClientRect()[top] + this.pageYOffset(elem);
	    };
	    PositionResolver.prototype.pageYOffset = function (elem) {
	        var pageYOffset = this.axis.pageYOffsetKey();
	        var scrollTop = this.axis.scrollTopKey();
	        var offsetTop = this.axis.offsetTopKey();
	        // elem = elem.nativeElement;
	        if (isNaN(window[pageYOffset])) {
	            return this.options.documentElement[scrollTop];
	        }
	        else if (elem.ownerDocument) {
	            return elem.ownerDocument.defaultView[pageYOffset];
	        }
	        else {
	            return elem[offsetTop];
	        }
	    };
	    return PositionResolver;
	}());
	exports.PositionResolver = PositionResolver;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tcmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwb3NpdGlvbi1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELDhCQUFrRCxpQkFBaUIsQ0FBQyxDQUFBO0FBVXBFO0lBRUUsaUNBQW9CLFlBQWlDO1FBQWpDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUNyRCxDQUFDO0lBRUQsd0NBQU0sR0FBTixVQUFRLE9BQXlCO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFDSSxrQ0FBVSxHQUEwQjtRQUMzQyxFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO0tBQ25CLENBQUM7SUFDRixrQkFBa0I7SUFDWCxzQ0FBYyxHQUE2RDtRQUNsRixFQUFDLElBQUksRUFBRSxtQ0FBbUIsR0FBRztLQUM1QixDQUFDO0lBQ0YsOEJBQUM7QUFBRCxDQUFDLEFBZkQsSUFlQztBQWZZLCtCQUF1QiwwQkFlbkMsQ0FBQTtBQUVEO0lBQ0UsMEJBQXFCLElBQWtCLEVBQVUsT0FBeUI7UUFBckQsU0FBSSxHQUFKLElBQUksQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQzFFLENBQUM7SUFFRCwwQ0FBZSxHQUFmLFVBQWlCLE9BQW1CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQjtjQUNqQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDO2NBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbURBQXdCLEdBQXhCLFVBQTBCLE9BQW1CO1FBQzNDLHFCQUFxQjtRQUNyQixJQUFNLE1BQU0sR0FBRyxJQUFJ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LElBQUksU0FBUyxHQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFM0MsNkJBQTZCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFDSCx1QkFBQztBQUFELENBQUMsQUF6RUQsSUF5RUM7QUF6RVksd0JBQWdCLG1CQXlFNUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlciwgQXhpc1Jlc29sdmVyRmFjdG9yeSB9IGZyb20gJy4vYXhpcy1yZXNvbHZlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25FbGVtZW50cyB7XG4gIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgZG9jdW1lbnRFbGVtZW50OiBhbnk7XG4gIGlzQ29udGFpbmVyV2luZG93OiBib29sZWFuO1xuICBob3Jpem9udGFsOiBib29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBheGlzUmVzb2x2ZXI6IEF4aXNSZXNvbHZlckZhY3RvcnkpIHtcbiAgfVxuXG4gIGNyZWF0ZSAob3B0aW9uczogUG9zaXRpb25FbGVtZW50cykge1xuICAgIHJldHVybiBuZXcgUG9zaXRpb25SZXNvbHZlcih0aGlzLmF4aXNSZXNvbHZlci5jcmVhdGUoIW9wdGlvbnMuaG9yaXpvbnRhbCksIG9wdGlvbnMpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xue3R5cGU6IEF4aXNSZXNvbHZlckZhY3RvcnksIH0sXG5dO1xufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb25SZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIGF4aXM6IEF4aXNSZXNvbHZlciwgcHJpdmF0ZSBvcHRpb25zOiBQb3NpdGlvbkVsZW1lbnRzKSB7XG4gIH1cblxuICBjYWxjdWxhdGVQb2ludHMgKGVsZW1lbnQ6IEVsZW1lbnRSZWYpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzQ29udGFpbmVyV2luZG93XG4gICAgICA/IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yV2luZG93KGVsZW1lbnQpXG4gICAgICA6IHRoaXMuY2FsY3VsYXRlUG9pbnRzRm9yRWxlbWVudChlbGVtZW50KTtcbiAgfVxuXG4gIGNhbGN1bGF0ZVBvaW50c0ZvcldpbmRvdyAoZWxlbWVudDogRWxlbWVudFJlZikge1xuICAgIC8vIGNvbnRhaW5lcidzIGhlaWdodFxuICAgIGNvbnN0IGhlaWdodCA9IHRoaXMuaGVpZ2h0KHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgIC8vIHNjcm9sbGVkIHVudGlsIG5vdyAvIGN1cnJlbnQgeSBwb2ludFxuICAgIGNvbnN0IHNjcm9sbGVkVW50aWxOb3cgPSBoZWlnaHQgKyB0aGlzLnBhZ2VZT2Zmc2V0KHRoaXMub3B0aW9ucy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIC8vIHRvdGFsIGhlaWdodCAvIG1vc3QgYm90dG9tIHkgcG9pbnRcbiAgICBjb25zdCB0b3RhbFRvU2Nyb2xsID0gdGhpcy5vZmZzZXRUb3AoZWxlbWVudC5uYXRpdmVFbGVtZW50KSArIHRoaXMuaGVpZ2h0KGVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgcmV0dXJuIHsgaGVpZ2h0LCBzY3JvbGxlZFVudGlsTm93LCB0b3RhbFRvU2Nyb2xsIH07XG4gIH1cblxuICBjYWxjdWxhdGVQb2ludHNGb3JFbGVtZW50IChlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gICAgbGV0IHNjcm9sbFRvcCAgICA9IHRoaXMuYXhpcy5zY3JvbGxUb3BLZXkoKTtcbiAgICBsZXQgc2Nyb2xsSGVpZ2h0ID0gdGhpcy5heGlzLnNjcm9sbEhlaWdodEtleSgpO1xuXG4gICAgY29uc3QgaGVpZ2h0ID0gdGhpcy5oZWlnaHQodGhpcy5vcHRpb25zLmNvbnRhaW5lcik7XG4gICAgLy8gcGVyaGFwcyB1c2UgdGhpcy5jb250YWluZXIub2Zmc2V0VG9wIGluc3RlYWQgb2YgJ3Njcm9sbFRvcCdcbiAgICBjb25zdCBzY3JvbGxlZFVudGlsTm93ID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lcltzY3JvbGxUb3BdO1xuICAgIGxldCBjb250YWluZXJUb3BPZmZzZXQgPSAwO1xuICAgIGNvbnN0IG9mZnNldFRvcCA9IHRoaXMub2Zmc2V0VG9wKHRoaXMub3B0aW9ucy5jb250YWluZXIpO1xuICAgIGlmIChvZmZzZXRUb3AgIT09IHZvaWQgMCkge1xuICAgICAgY29udGFpbmVyVG9wT2Zmc2V0ID0gb2Zmc2V0VG9wO1xuICAgIH1cbiAgICBjb25zdCB0b3RhbFRvU2Nyb2xsID0gdGhpcy5vcHRpb25zLmNvbnRhaW5lcltzY3JvbGxIZWlnaHRdO1xuICAgIC8vIGNvbnN0IHRvdGFsVG9TY3JvbGwgPSB0aGlzLm9mZnNldFRvcCh0aGlzLiRlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIC0gY29udGFpbmVyVG9wT2Zmc2V0ICsgdGhpcy5oZWlnaHQodGhpcy4kZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICByZXR1cm4geyBoZWlnaHQsIHNjcm9sbGVkVW50aWxOb3csIHRvdGFsVG9TY3JvbGwgfTtcbiAgfVxuXG4gIHByaXZhdGUgaGVpZ2h0IChlbGVtOiBhbnkpIHtcbiAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gdGhpcy5heGlzLm9mZnNldEhlaWdodEtleSgpO1xuICAgIGxldCBjbGllbnRIZWlnaHQgPSB0aGlzLmF4aXMuY2xpZW50SGVpZ2h0S2V5KCk7XG5cbiAgICAvLyBlbGVtID0gZWxlbS5uYXRpdmVFbGVtZW50O1xuICAgIGlmIChpc05hTihlbGVtW29mZnNldEhlaWdodF0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvY3VtZW50RWxlbWVudFtjbGllbnRIZWlnaHRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbVtvZmZzZXRIZWlnaHRdO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb2Zmc2V0VG9wIChlbGVtOiBhbnkpIHtcbiAgICBsZXQgdG9wID0gdGhpcy5heGlzLnRvcEtleSgpO1xuXG4gICAgLy8gZWxlbSA9IGVsZW0ubmF0aXZlRWxlbWVudDtcbiAgICBpZiAoIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7IC8vIHx8IGVsZW0uY3NzKCdub25lJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbdG9wXSArIHRoaXMucGFnZVlPZmZzZXQoZWxlbSk7XG4gIH1cblxuICBwYWdlWU9mZnNldCAoZWxlbTogYW55KSB7XG4gICAgbGV0IHBhZ2VZT2Zmc2V0ID0gdGhpcy5heGlzLnBhZ2VZT2Zmc2V0S2V5KCk7XG4gICAgbGV0IHNjcm9sbFRvcCAgID0gdGhpcy5heGlzLnNjcm9sbFRvcEtleSgpO1xuICAgIGxldCBvZmZzZXRUb3AgICA9IHRoaXMuYXhpcy5vZmZzZXRUb3BLZXkoKTtcblxuICAgIC8vIGVsZW0gPSBlbGVtLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKGlzTmFOKHdpbmRvd1twYWdlWU9mZnNldF0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvY3VtZW50RWxlbWVudFtzY3JvbGxUb3BdO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5vd25lckRvY3VtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3W3BhZ2VZT2Zmc2V0XTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVsZW1bb2Zmc2V0VG9wXTtcbiAgICB9XG4gIH1cbn1cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var AxisResolverFactory = (function () {
	    function AxisResolverFactory() {
	    }
	    AxisResolverFactory.prototype.create = function (vertical) {
	        if (vertical === void 0) { vertical = true; }
	        return new AxisResolver(vertical);
	    };
	    AxisResolverFactory.decorators = [
	        { type: core_1.Injectable },
	    ];
	    /** @nocollapse */
	    AxisResolverFactory.ctorParameters = [];
	    return AxisResolverFactory;
	}());
	exports.AxisResolverFactory = AxisResolverFactory;
	var AxisResolver = (function () {
	    function AxisResolver(vertical) {
	        if (vertical === void 0) { vertical = true; }
	        this.vertical = vertical;
	    }
	    AxisResolver.prototype.clientHeightKey = function () { return this.vertical ? 'clientHeight' : 'clientWidth'; };
	    AxisResolver.prototype.offsetHeightKey = function () { return this.vertical ? 'offsetHeight' : 'offsetWidth'; };
	    AxisResolver.prototype.scrollHeightKey = function () { return this.vertical ? 'scrollHeight' : 'scrollWidth'; };
	    AxisResolver.prototype.pageYOffsetKey = function () { return this.vertical ? 'pageYOffset' : 'pageXOffset'; };
	    AxisResolver.prototype.offsetTopKey = function () { return this.vertical ? 'offsetTop' : 'offsetLeft'; };
	    AxisResolver.prototype.scrollTopKey = function () { return this.vertical ? 'scrollTop' : 'scrollLeft'; };
	    AxisResolver.prototype.topKey = function () { return this.vertical ? 'top' : 'left'; };
	    return AxisResolver;
	}());
	exports.AxisResolver = AxisResolver;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy1yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF4aXMtcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUFtQyxlQUFlLENBQUMsQ0FBQTtBQUduRDtJQUNFO0lBQWUsQ0FBQztJQUVoQixvQ0FBTSxHQUFOLFVBQVEsUUFBd0I7UUFBeEIsd0JBQXdCLEdBQXhCLGVBQXdCO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0ksOEJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtLQUNuQixDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsa0NBQWMsR0FBNkQsRUFDakYsQ0FBQztJQUNGLDBCQUFDO0FBQUQsQ0FBQyxBQVpELElBWUM7QUFaWSwyQkFBbUIsc0JBWS9CLENBQUE7QUFFRDtJQUNFLHNCQUFxQixRQUF3QjtRQUFoQyx3QkFBZ0MsR0FBaEMsZUFBZ0M7UUFBeEIsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFDN0MsQ0FBQztJQUNELHNDQUFlLEdBQWYsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLGFBQWEsQ0FBQSxDQUFBLENBQUM7SUFDekUsc0NBQWUsR0FBZixjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsYUFBYSxDQUFBLENBQUEsQ0FBQztJQUN6RSxzQ0FBZSxHQUFmLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxhQUFhLENBQUEsQ0FBQSxDQUFDO0lBQ3pFLHFDQUFjLEdBQWQsY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxHQUFJLGFBQWEsQ0FBQSxDQUFBLENBQUM7SUFDekUsbUNBQVksR0FBWixjQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLEdBQU0sWUFBWSxDQUFBLENBQUEsQ0FBQztJQUN4RSxtQ0FBWSxHQUFaLGNBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsR0FBTSxZQUFZLENBQUEsQ0FBQSxDQUFDO0lBQ3hFLDZCQUFNLEdBQU4sY0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFZLE1BQU0sQ0FBQSxDQUFBLENBQUM7SUFDcEUsbUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLG9CQUFZLGVBVXhCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5cbmV4cG9ydCBjbGFzcyBBeGlzUmVzb2x2ZXJGYWN0b3J5IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNyZWF0ZSAodmVydGljYWw6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgcmV0dXJuIG5ldyBBeGlzUmVzb2x2ZXIodmVydGljYWwpO1xuICB9XG5zdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBJbmplY3RhYmxlIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xuXTtcbn1cblxuZXhwb3J0IGNsYXNzIEF4aXNSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIHZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZSkge1xuICB9XG4gIGNsaWVudEhlaWdodEtleSgpIHtyZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdjbGllbnRIZWlnaHQnIDogJ2NsaWVudFdpZHRoJ31cbiAgb2Zmc2V0SGVpZ2h0S2V5KCkge3JldHVybiB0aGlzLnZlcnRpY2FsID8gJ29mZnNldEhlaWdodCcgOiAnb2Zmc2V0V2lkdGgnfVxuICBzY3JvbGxIZWlnaHRLZXkoKSB7cmV0dXJuIHRoaXMudmVydGljYWwgPyAnc2Nyb2xsSGVpZ2h0JyA6ICdzY3JvbGxXaWR0aCd9XG4gIHBhZ2VZT2Zmc2V0S2V5KCkgIHtyZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdwYWdlWU9mZnNldCcgIDogJ3BhZ2VYT2Zmc2V0J31cbiAgb2Zmc2V0VG9wS2V5KCkgICAge3JldHVybiB0aGlzLnZlcnRpY2FsID8gJ29mZnNldFRvcCcgICAgOiAnb2Zmc2V0TGVmdCd9XG4gIHNjcm9sbFRvcEtleSgpICAgIHtyZXR1cm4gdGhpcy52ZXJ0aWNhbCA/ICdzY3JvbGxUb3AnICAgIDogJ3Njcm9sbExlZnQnfVxuICB0b3BLZXkoKSAgICAgICAgICB7cmV0dXJuIHRoaXMudmVydGljYWwgPyAndG9wJyAgICAgICAgICA6ICdsZWZ0J31cbn1cbmludGVyZmFjZSBEZWNvcmF0b3JJbnZvY2F0aW9uIHtcbiAgdHlwZTogRnVuY3Rpb247XG4gIGFyZ3M/OiBhbnlbXTtcbn1cbiJdfQ==

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(3);
	var infinite_scroll_1 = __webpack_require__(30);
	var axis_resolver_1 = __webpack_require__(59);
	var position_resolver_1 = __webpack_require__(58);
	var InfiniteScrollModule = (function () {
	    function InfiniteScrollModule() {
	    }
	    InfiniteScrollModule.decorators = [
	        { type: core_1.NgModule, args: [{
	                    imports: [],
	                    declarations: [infinite_scroll_1.InfiniteScroll],
	                    exports: [infinite_scroll_1.InfiniteScroll],
	                    providers: [axis_resolver_1.AxisResolverFactory, position_resolver_1.PositionResolverFactory]
	                },] },
	    ];
	    /** @nocollapse */
	    InfiniteScrollModule.ctorParameters = [];
	    return InfiniteScrollModule;
	}());
	exports.InfiniteScrollModule = InfiniteScrollModule;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBRTlDLGdDQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3BELDhCQUFvQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3RELGtDQUF3QyxxQkFBcUIsQ0FBQyxDQUFBO0FBRzlEO0lBQUE7SUFXQSxDQUFDO0lBWDBDLCtCQUFVLEdBQTBCO1FBQy9FLEVBQUUsSUFBSSxFQUFFLGVBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsT0FBTyxFQUFPLEVBQUk7b0JBQ2xCLFlBQVksRUFBRSxDQUFFLGdDQUFjLENBQUU7b0JBQ2hDLE9BQU8sRUFBTyxDQUFFLGdDQUFjLENBQUU7b0JBQ2hDLFNBQVMsRUFBSyxDQUFFLG1DQUFtQixFQUFFLDJDQUF1QixDQUFFO2lCQUMvRCxFQUFHLEVBQUU7S0FDTCxDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsbUNBQWMsR0FBNkQsRUFDakYsQ0FBQztJQUNGLDJCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSw0QkFBb0IsdUJBV2hDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluZmluaXRlU2Nyb2xsIH0gIGZyb20gJy4vaW5maW5pdGUtc2Nyb2xsJztcbmltcG9ydCB7IEF4aXNSZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL2F4aXMtcmVzb2x2ZXInO1xuaW1wb3J0IHsgUG9zaXRpb25SZXNvbHZlckZhY3RvcnkgfSBmcm9tICcuL3Bvc2l0aW9uLXJlc29sdmVyJztcblxuXG5leHBvcnQgY2xhc3MgSW5maW5pdGVTY3JvbGxNb2R1bGUgeyBzdGF0aWMgZGVjb3JhdG9yczogRGVjb3JhdG9ySW52b2NhdGlvbltdID0gW1xueyB0eXBlOiBOZ01vZHVsZSwgYXJnczogW3tcbiAgaW1wb3J0czogICAgICBbICBdLFxuICBkZWNsYXJhdGlvbnM6IFsgSW5maW5pdGVTY3JvbGwgXSxcbiAgZXhwb3J0czogICAgICBbIEluZmluaXRlU2Nyb2xsIF0sXG4gIHByb3ZpZGVyczogICAgWyBBeGlzUmVzb2x2ZXJGYWN0b3J5LCBQb3NpdGlvblJlc29sdmVyRmFjdG9yeSBdXG59LCBdIH0sXG5dO1xuLyoqIEBub2NvbGxhcHNlICovXG5zdGF0aWMgY3RvclBhcmFtZXRlcnM6ICh7dHlwZTogYW55LCBkZWNvcmF0b3JzPzogRGVjb3JhdG9ySW52b2NhdGlvbltdfXxudWxsKVtdID0gW1xuXTtcbn1cblxuaW50ZXJmYWNlIERlY29yYXRvckludm9jYXRpb24ge1xuICB0eXBlOiBGdW5jdGlvbjtcbiAgYXJncz86IGFueVtdO1xufVxuIl19

/***/ },

/***/ 61:
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
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        console.log('AppComponent initializing...');
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: "<router-outlet></router-outlet>",
	            styles: [__webpack_require__(62)],
	            encapsulation: core_1.ViewEncapsulation.None
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 62:
/***/ function(module, exports) {

	module.exports = "/***********************Colors variables in SaSS***************************/\n/* fonts. nav. */\n/* drop downs. alternating rows. */\nhtml body {\n  background: #EEEEF1; }\n\n:host {\n  display: block; }\n\n.space {\n  padding-top: 60px; }\n\nfooter {\n  text-align: center;\n  font-size: 0.8em; }\n"

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(64);
	var home_component_1 = __webpack_require__(86);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: '**', redirectTo: '', pathMatch: 'full' }
	];
	exports.appRoutingProviders = [];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 86:
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
	var HomeComponent = (function () {
	    function HomeComponent() {
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        this.message = "hii angular 2";
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'my-home',
	            template: __webpack_require__(87),
	            styles: [__webpack_require__(88)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "<div>Demoooooooooooooo</div>\r\n{{ message}}\r\n";

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = ""

/***/ }

});
//# sourceMappingURL=app.js.map