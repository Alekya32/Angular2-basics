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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SampleComponent = (function () {
    //initialization
    function SampleComponent() {
        this.name = "Alekya";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.myName = "";
        this.showHeader = true;
        this.items = ["TV", "AC", "Fridge", "vaccum cleaner"];
        this.price = 1500;
    }
    SampleComponent.prototype.runMe = function () {
        console.log("Please click this button");
    };
    SampleComponent.prototype.send = function (eventAny) {
        console.log(eventAny.target.value);
    };
    SampleComponent.prototype.send1 = function (event) {
        console.log(event.target.value);
    };
    return SampleComponent;
}());
SampleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "sample",
        templateUrl: "sample.component.html"
    }),
    __metadata("design:paramtypes", [])
], SampleComponent);
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map