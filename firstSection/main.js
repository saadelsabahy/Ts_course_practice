console.log('================ hello in first section of typescript============');
var add = function (n1, n2, showResult, resultSentance) {
    if (showResult) {
        console.log(resultSentance + " " + (n1 + n2));
    }
    return n1 + n2;
};
var number1 = 5;
var number2 = 3;
var printResult = true;
var resultPhrase = 'Result is : -';
add(number1, number2, printResult, resultPhrase);
/*
js is dynamic types but typescript is static types
 */
/* type inferance */
var x = 5; // by default typescript infered the type of x to number because we assign 5 of type number to it
var y = 'hello'; // by default typescript infered the type of y to string because we assign hello of type string to it
/* objects */
var person = {
    name: 'saad',
    age: 22
};
console.log(person.name);
/* arrays */
var hoppies = ['sport', 'reading'];
//tuples
var anotherPerson = {
    name: 'ahmed',
    age: 20,
    role: [2, 'admin']
};
/* enum */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
var user = {
    type: Role.AUTHOR,
    name: 'usualUser'
};
console.log('type..', user.type);
var testUnionTypes = function (inp1, inp2, literalType) {
    if (typeof inp1 == 'number' &&
        typeof inp2 == 'number' &&
        literalType == 'same') {
        return +inp1 + inp2;
    }
    else {
        return "" + inp1 + inp2;
    }
};
var output = testUnionTypes(1, 'sentence', 'mixed');
var output2 = testUnionTypes(1, 1, 'same');
console.log(output);
///////////////functions
var testVoidFunction = function (n1, n2) {
    console.log('printResult----->', n1 + n2);
};
testVoidFunction(1, 5);
var functionType;
functionType = function (x, y, cb) {
    var result = x + y;
    cb(result);
    return result; // we return result despite we declare function type that is normal cuz void mean ignore any result you might return here
};
functionType(2, 9, function (res) {
    console.log(res);
});
