"use strict";
var _a;
const e1 = {
    name: 'saad',
    privilages: ['all-access'],
    startDate: new Date(),
};
console.log(e1);
function printMixedPrivillage(emp) {
    /// use in to check if property exist in object
    if ('privilages' in emp) {
        console.log(emp.privilages);
    }
    else {
        console.log('has no privilades');
    }
}
printMixedPrivillage({ name: 'saad', startDate: new Date() });
class Car {
    drive() {
        console.log('driving car');
    }
    printWalkedDistance(n) {
        console.log('car walked' + n);
    }
}
class Truck {
    drive() {
        console.log('driving Truck');
    }
    metres(n) {
        console.log('Truck walked' + n);
    }
}
const v1 = new Car();
const v2 = new Truck();
function vehicleWalkedDistance(v) {
    //use instanceof to check the class    the instance created from
    if (v instanceof Car) {
        v.printWalkedDistance(1000);
    }
    else {
        v.metres(3464);
    }
}
vehicleWalkedDistance(v1);
function speed(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log(speed);
}
speed({ type: 'horse', runningSpeed: 10.5 });
///optional chaning
const person = {
    name: 'saad',
    age: 23,
    job: { title: 'developer' },
};
console.log(((_a = person === null || person === void 0 ? void 0 : person.job) === null || _a === void 0 ? void 0 : _a.experience) ? 'exist' : 'not exist');
//nullish coalsering
const input = ''; // undefined null
console.log(input !== null && input !== void 0 ? input : 'Default');
