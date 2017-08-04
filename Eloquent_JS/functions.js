// 1.1
function square(x) {
    return x * x;
}

console.log(square(12));

// 1.2
function power(base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 10));

// 1.3 - Functions are not part of the same timeline
console.log('The future says: ', future());

function future() {
    return 'We STILL have no flying cars';
}

// 1.4 - var keyword
var x = 'A';

function setVarToB() {
    x = 'B';
}

setVarToB();
console.log(x); // B

function setVarToC() {
    var x;
    x = 'C';
}

setVarToC();
console.log(x); // B due to var declaration in setVarToC

// 1.5 - Nested Scope
function multiplyAbsolute(number, factor) {
    function multiply(number) {
        return number * factor; // this number is local to multiply
    }
    if (number < 0) {
        return multiply(-number);
    }
    else {
        return multiply(number);
    }
}

console.log(multiplyAbsolute(2, 6));

// 1.6
var something = 1;
{
    var something = 2;
    // Do stuff with the variable something
}
// Outside of the block again...

// 1.7 - Too many scopes(on the stack)
function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + ' come first'); // Maximum call stack size exceeded

// 1.8
var a = null;
function b() {
    return 'B';
}
console.log((a || b)()); // a || b will call a if it is not false(which it is)

console.log((a || function() {return 'B';})()); // like a lambda function

// 1.9 - Closure
function createFunction() {
    var local = 100;
    return function(){return local;};
}

console.log(createFunction()());

// 2.0
function makeAdder(amount) {
    return function(number) {
        return number + amount;
    };
}

var addTwo = makeAdder(2);
console.log(addTwo(2));

// 2.1 - Optional Arguments(Can be called without exponent arg)
function power(number, exponent) {
    var result = 1;
    if (exponent === undefined) {
        exponent = 2; // so the for loop has a ceiling(1)
    }
    for (var count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(2);

// 2.2
var number = 5;
if (number < 10) {
    console.log('0' + number);
}
else {
    console.log(number);
}

function zeroPad(number, width) {
    var string = String(Math.round(number));
    while(string.length < width) {
        string = '0' + string;
    }
    return string;
}

console.log(zeroPad(2.222, 4));

// 2.3 - Recursion
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    else {
        return base * power(base, exponent - 1);
    }
}

console.log(power(2, 4));

// 2.4
function findSequence (goal) {
    function find (start, history) {
        if (start === goal) {
            return history;
        }
        else if (start > goal) {
            return null;
        }
        else {
            return find(start + 5, '(' + history + ' + 5)') ||
                   find(start * 3, '(' + history + ' * 3)');
        }
    }
    return find(1, '1');
}

console.log(findSequence(24));
