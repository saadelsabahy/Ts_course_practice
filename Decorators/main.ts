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
@testDecorator('for class')
class Department {
	@testDecorator('for field')
	name = 'It';
	constructor() {
		console.log('constractor');
	}
	@testDecorator('for get accessor ')
	get department(): string {
		return this.name;
	}
	@testDecorator('for PrintName function')
	printName() {
		console.log('departName:' + this.name);
	}
}

function testDecorator(sentence: string) {
	console.log(sentence);

	return (target: any, key?: string, desc?: object) => {
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
