abstract class Departments {
   /*  name: string;
   private employees: string[] = []; */
   constructor(
      protected employees: string[], //protected is like private but also applay in extended classes also but private restrict for the same class only
      public name: string,
      protected readonly id: string
   ) {}
   abstract descripe(/* this: Departments */): void;
   addEmployee(name: string) {
      this.employees.push(name);
   }
   getEmployeesInformations() {
      console.log(this.employees.length);
      console.log(this.employees);
   }
}
/* const accounting = new Departments(['saad', 'ahmed'], 'Accounting', 'a1');
console.log(accounting);
accounting.descripe();
accounting.addEmployee('saad');
accounting.addEmployee('ahmed'); */
//accounting.employees[2] = 'reda';// Property 'employees' is private and only accessible within class 'Departments'
// accounting.getEmployeesInformations();
/* const accountingCopy = {name:'dummy' descripe: accounting.descripe };
accountingCopy.descripe(); */
/////////////////////inhertance

class Specialized extends Departments {
   static createdOn = new Date();
   static addCreationDate(correctDate: Date) {
      console.log('createdOn', this.createdOn);
      console.log('correctDate', correctDate);
   }
   descripe() {
      console.log('depart ment name and id', this.name, this.id);
   }
   constructor() {
      super([], 'it', 'i1');
   }
   get allEmployees() {
      return this.employees;
   }
   set employeesNames(name: string) {
      this.employees.push(name);
   }
}
const it = new Specialized();
/* console.log(it);

it.getEmployeesInformations();
it.descripe(); */
it.employeesNames = 'saad';
console.log(it.allEmployees);
console.log(Specialized.addCreationDate(new Date('2020/5/25')));
it.descripe();
/////////////interface

interface Person {
   name: string;
   age: number;
   info(phrase: string): void;
}

const emp: Person = {
   name: 'saad',
   age: 23,
   info(phrase) {
      console.log(phrase + this.name);
   },
};
emp.info('hello');
interface Named {
   name: string;
}
interface Greetings extends Named {
   greeting(phrase: string): void;
}

class Sayhello implements Greetings {
   constructor(public name: string) {}
   greeting(phrase: string) {
      console.log(phrase + this.name);
   }
}
const firstGreeting = new Sayhello('saad');
firstGreeting.greeting('hello=====>');
////////////
// type AddFn = (n1: number, n2: number) => number;
//interface as function type
interface AddFn {
   (n1: number, n2: number): number;
}
let addition: AddFn = (n1, n2) => {
   return n1 + n2;
};
console.log(addition(1, 2));
///optional parametars and properties
interface TestOptional {
   tall?: number;
   printTall?: (n: number) => void;
}
class TestTall implements TestOptional {
   constructor(public tall?: number) {}
   printTall() {
      if (this.tall) {
         console.log(this.tall);
      } else {
         console.log('no tall passed');
      }
   }
}

const t1 = new TestTall();
t1.printTall();
