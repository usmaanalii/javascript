// 3.3
function forEach (array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function reduce (combine, base, array) {
    forEach(array, function (element) {
        base = combine(base, element);
    });
    return base;
}

function map (func, array) {
    var result = [];
    forEach(array, function (element) {
        result.push(func(element));
    });
    return result;
}

var op = {
    '+': function (a, b) {return a + b;},
    '==': function (a, b) {return a == b;},
    '===': function (a, b) {return a === b;},
    '!': function (a, b) {return !a;}
    // and so on
};

console.log(reduce(op['+'], 0, [1, 2, 3, 4, 5]));

// 3.4 - Partial Application
function partial (func) {
    var knownArgs = arguments;
    return function () {
        var realArgs = [];

        for (var i = 1; i < knownArgs.length; i++) {
            realArgs.push(knownArgs[i]);
        }
        for (var i = 0; i < arguments.length; i++) {
            realArgs.push(arguments[i]);
        }
        return func.apply(null, realArgs);
    };
}

console.log(map(partial(op['+'], 1), [0, 2, 4, 6, 8]));

// 3.5
function square (x) {
    return x * x;
}

console.log(map(partial(map, square), [[10], [0, 1], [3]]));

var sum = partial(reduce, op['+'], 0);

// 3.6 - Composition
function negate (func) {
    return function () {
        return !func.apply(null, arguments);
    };
}

function compose (f1, f2) {
    return function () {
        return f1(f2.apply(null, arguments));
    };
}

var isNotNan = compose(op['!'], isNaN);
console.log(isNotNan(5));
