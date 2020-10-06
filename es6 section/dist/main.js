"use strict";
class Departments {
    /*  name: string;
    private employees: string[] = []; */
    constructor(employees, //protected is like private but also applay in extended classes also but private restrict for the same class only
    name, id) {
        this.employees = employees;
        this.name = name;
        this.id = id;
    }
    addEmployee(name) {
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
    constructor() {
        super([], 'it', 'i1');
    }
    static addCreationDate(correctDate) {
        console.log('createdOn', this.createdOn);
        console.log('correctDate', correctDate);
    }
    descripe() {
        console.log('depart ment name and id', this.name, this.id);
    }
    get allEmployees() {
        return this.employees;
    }
    set employeesNames(name) {
        this.employees.push(name);
    }
}
Specialized.createdOn = new Date();
const it = new Specialized();
/* console.log(it);

it.getEmployeesInformations();
it.descripe(); */
it.employeesNames = 'saad';
console.log(it.allEmployees);
console.log(Specialized.addCreationDate(new Date('2020/5/25')));
it.descripe();
const emp = {
    name: 'saad',
    age: 23,
    info(phrase) {
        console.log(phrase + this.name);
    },
};
emp.info('hello');
class Sayhello {
    constructor(name) {
        this.name = name;
    }
    greeting(phrase) {
        console.log(phrase + this.name);
    }
}
const firstGreeting = new Sayhello('saad');
firstGreeting.greeting('hello=====>');
let addition = (n1, n2) => {
    return n1 + n2;
};
console.log(addition(1, 2));
class TestTall {
    constructor(tall) {
        this.tall = tall;
    }
    printTall() {
        if (this.tall) {
            console.log(this.tall);
        }
        else {
            console.log('no tall passed');
        }
    }
}
const t1 = new TestTall();
t1.printTall();
