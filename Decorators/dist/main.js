"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* const firstDecorator = (loggingStatement: string) => {
    console.log(loggingStatement);
    /////////factories
    return (constractor: Function) => {
        console.log('first factory');
    };
};
const secondDecorator = () => {
    console.log('second decorator....');
    return (constractor: Function) => {
        console.log('second factory');
    };
};
@firstDecorator(' first decorator..')
@secondDecorator()
class Person {
    name = 'saad';
    constructor() {
        console.log('hello from class');
    }
}

const p1 = new Person();
console.log(p1); */
let Department = class Department {
    constructor() {
        this.name = 'It';
        console.log('constractor');
    }
    get department() {
        return this.name;
    }
    printName() {
        console.log('departName:' + this.name);
    }
};
__decorate([
    testDecorator('for field')
], Department.prototype, "name", void 0);
__decorate([
    testDecorator('for get accessor ')
], Department.prototype, "department", null);
__decorate([
    testDecorator('for PrintName function')
], Department.prototype, "printName", null);
Department = __decorate([
    testDecorator('for class')
], Department);
function testDecorator(sentence) {
    console.log(sentence);
    return (target, key, desc) => {
        console.log({ target, key, desc });
    };
}
/*
////parameters of decorator
Either the constructor function of the class for a static member, or the prototype of the class for an instance member.

The name of the member.//not return when use decorator before class defination

The Property Descriptor for the member.//not return when use decorator before class defination and filed of class
*/
/*
we can return somthing from decorators for methods and accessors and TS will use it but for properties can return but TS will ignore it
*/
