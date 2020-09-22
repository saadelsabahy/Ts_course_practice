"use strict";
console.log('======hello in generic=====');
var getArray = function (items) { return new Array().concat(items); };
var myNumArr = getArray([100, 200, 300]);
myNumArr.push(1);
console.log(myNumArr);
var myStringArr = getArray(['hello', 'world']);
myStringArr.push('this is type script');
//myStringArr.push(1); Error becuse  Argument of type '1' is not assignable to parameter of type 'string'
console.log(myStringArr);
/////////////////
function mergeObjects(obj1, obj2, obj3) {
    console.log(Object.assign(obj1, obj2, obj3));
}
mergeObjects({ name: 'student1' }, { age: 15 }, { a: 3000 });
///////////
function testKeyOf(obj, key) {
    console.log(obj[key]);
}
testKeyOf({ vlue: 1 }, 'vlue');
//////////
var DataStorage = /** @class */ (function () {
    function DataStorage(data) {
        this.data = data;
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
        console.log(this.data);
    };
    DataStorage.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
        console.log(this.data);
    };
    DataStorage.prototype.getItems = function () {
        console.log(this.data);
    };
    return DataStorage;
}());
var numbersObj = new DataStorage([1, 2, 3, 4]);
numbersObj.addItem(5);
numbersObj.removeItem(3);
var updateStarship = function (id, starship) {
    console.log(starship);
};
// updateStarship(1,{name:'explorer',arrived:true}) error must supply arrived
updateStarship(1, { name: 'explorer' }); //work
var starships = {
    explorer1: {
        name: 'exp1',
        arrived: true,
    },
    explorer2: {
        name: 'exp2',
        arrived: false,
    },
};
