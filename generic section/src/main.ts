console.log('======hello in generic=====');

const getArray = <T>(items: T[]): T[] => new Array<T>().concat(items);
let myNumArr = getArray<number>([100, 200, 300]);

myNumArr.push(1);
console.log(myNumArr);

const myStringArr = getArray<string>(['hello', 'world']);
myStringArr.push('this is type script');
//myStringArr.push(1); Error becuse  Argument of type '1' is not assignable to parameter of type 'string'
console.log(myStringArr);

/////////////////
function mergeObjects<T extends object, U extends object, S extends object>(
	obj1: T,
	obj2: U,
	obj3: S
) {
	console.log(Object.assign(obj1, obj2, obj3));
}

interface FirstType {
	name: string;
	hoppies?: string[];
}

interface SecondType {
	age: number;
}
mergeObjects<FirstType, SecondType, object>(
	{ name: 'student1' },
	{ age: 15 },
	{ a: 3000 }
);
///////////
function testKeyOf<T extends object, U extends keyof T>(obj: T, key: U) {
	console.log(obj[key]);
}
testKeyOf({ vlue: 1 }, 'vlue');
//////////

class DataStorage<T> {
	constructor(private data: T[]) {}
	addItem(item: T) {
		this.data.push(item);
		console.log(this.data);
	}
	removeItem(item: T) {
		this.data.splice(this.data.indexOf(item), 1);
		console.log(this.data);
	}
	getItems() {
		console.log(this.data);
	}
}
const numbersObj = new DataStorage<number>([1, 2, 3, 4]);
numbersObj.addItem(5);
numbersObj.removeItem(3);
////////////////////utility types

interface Starship {
	name: string;
	arrived: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {
	console.log(starship);
};
// updateStarship(1,{name:'explorer',arrived:true}) error must supply arrived
updateStarship(1, { name: 'explorer' }); //work

const starships: Record<string, Starship> = {
	explorer1: {
		name: 'exp1',
		arrived: true,
	},
	explorer2: {
		name: 'exp2',
		arrived: false,
	},
};

type testPick = Pick<Starship, 'name'>;
type starShipWithoutOmit = Omit<Starship, 'name'>;
