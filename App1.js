/**
 * Created by linyuebin on 2016/4/7.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("angular2/core");
var browser_1 = require("angular2/platform/browser");
var App1 = (function () {
    function App1() {
        this.name = "Jack";
    }
    App1 = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app.html'
        })
    ], App1);
    return App1;
})();
browser_1.bootstrap(App1);
//# sourceMappingURL=App1.js.map