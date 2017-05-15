// 1.0
function printArray (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

function forEach (array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

console.log(forEach(['Wampeter', 'Foma', 'Granfalloon'], console.log));

// 1.2 - Anonymous functions
function sum (numbers) {
    var total = 0;
    forEach(numbers, function (number) {
        // lexical scoping means total is visible in the anonymous function
        total += number;
    }); // the anonmyous function is the 'action' parameter
    return total;
}

// 1.3
function negate (func) {
    return function(x) {
        return !func(x);
    };
}

var isNotNan = negate(isNaN);
console.log(isNotNan(NaN));

// 1.4
function negate (func) {
    return function () {
        return !func.apply(null, arguments);
    };
}

// 1.5 - Reduce
function reduce (combine, base, array) {
    forEach(array, function (element) {
        base = combine(base, element);
    });
    return base;
}

function add (a, b) {
    return a + b;
}

function sum (numbers) {
    return reduce(add, 0, numbers);
}

// 1.6
function countZeroes (array) {
    function counter (total, element) {
        return total + (element === 0 ? 1 : 0);
    }
    return reduce(counter, 0, array);
}

// 1.7
function count (test, array) {
    var counted = 0;
    forEach(array, function (element) {
        if (test(element)) {
            counted++;
        }
    });
    return counted;
}

function countZeroes (array) {
    function isZero (x) {
        return x === 0;
    }
    return count(isZero, array);
}

// 1.8 - Map
function map (func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}

var mapTest = map(Math.round, [0.01, 2, 9.89, Math.PI]);
console.log(mapTest);
