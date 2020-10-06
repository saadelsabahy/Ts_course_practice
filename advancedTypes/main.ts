///intersection types
type Admin = {
   name: string;
   privilages: string[];
};
type Employee = {
   name: string;
   startDate: Date;
};

type compinedUser = Admin & Employee;
const e1: compinedUser = {
   name: 'saad',
   privilages: ['all-access'],
   startDate: new Date(),
};
console.log(e1);
////////////////type gaurds
type mixed = Admin | Employee;
function printMixedPrivillage(emp: mixed) {
   /// use in to check if property exist in object
   if ('privilages' in emp) {
      console.log(emp.privilages);
   } else {
      console.log('has no privilades');
   }
}
printMixedPrivillage({ name: 'saad', startDate: new Date() });

class Car {
   drive() {
      console.log('driving car');
   }
   printWalkedDistance(n: number) {
      console.log('car walked' + n);
   }
}

class Truck {
   drive() {
      console.log('driving Truck');
   }
   metres(n: number) {
      console.log('Truck walked' + n);
   }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function vehicleWalkedDistance(v: Vehicle) {
   //use instanceof to check the class    the instance created from
   if (v instanceof Car) {
      v.printWalkedDistance(1000);
   } else {
      v.metres(3464);
   }
}

vehicleWalkedDistance(v1);

/// type gaurd with discriminated union
//one common property in interface
interface Bird {
   type: 'bird';
   flyingSpeed: number;
}

interface Horse {
   type: 'horse';
   runningSpeed: number;
}

type Animal = Bird | Horse;

function speed(animal: Animal) {
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

console.log(person?.job?.experience ? 'exist' : 'not exist');
//nullish coalsering
const input = ''; // undefined null
console.log(input ?? 'Default');
