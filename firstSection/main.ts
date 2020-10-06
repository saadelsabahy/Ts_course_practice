console.log(
   '================ hello in first section of typescript============'
);

const add = (
   n1: number,
   n2: number,
   showResult: boolean,
   resultSentance: string
) => {
   if (showResult) {
      console.log(`${resultSentance} ${n1 + n2}`);
   }
   return n1 + n2;
};

const number1 = 5;
const number2 = 3;
const printResult = true;
const resultPhrase = 'Result is : -';

add(number1, number2, printResult, resultPhrase);

/*
js is dynamic types but typescript is static types 
 */

/* type inferance */
let x = 5; // by default typescript infered the type of x to number because we assign 5 of type number to it
let y = 'hello'; // by default typescript infered the type of y to string because we assign hello of type string to it

/* objects */

const person: { name: string; age: number } = {
   name: 'saad',
   age: 22,
};
console.log(person.name);

/* arrays */

let hoppies: string[] = ['sport', 'reading'];

//tuples

let anotherPerson: { name: string; age: number; role: [number, string] } = {
   name: 'ahmed',
   age: 20,
   role: [2, 'admin'], //fixed length and types
};

/* enum */

enum Role {
   ADMIN,
   AUTHOR,
   READ_ONLY,
}

const user = {
   type: Role.AUTHOR,
   name: 'usualUser',
};

console.log('type..', user.type);

/* union types.. */
type unionType = string | number;
const testUnionTypes = (
   inp1: unionType,
   inp2: unionType,
   literalType: 'mixed' | 'same'
) => {
   if (
      typeof inp1 == 'number' &&
      typeof inp2 == 'number' &&
      literalType == 'same'
   ) {
      return +inp1 + inp2;
   } else {
      return `${inp1}${inp2}`;
   }
};

let output = testUnionTypes(1, 'sentence', 'mixed');
let output2 = testUnionTypes(1, 1, 'same');
console.log(output);
///////////////functions
const testVoidFunction = (n1: number, n2: number): void => {
   console.log('printResult----->', n1 + n2);
};
testVoidFunction(1, 5);

let functionType: (x: number, y: number, cb: (res: number) => void) => void;
functionType = (x, y, cb) => {
   const result = x + y;
   cb(result);
   return result; // we return result despite we declare function type that is normal cuz void mean ignore any result you might return here
};

functionType(2, 9, (res) => {
   console.log(res);
});
