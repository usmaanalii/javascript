// 1.0

function between (string, start, end) {
    var startAt = string.indexOf(start) + start.length;
    var endAt = string.indexOf(end, startAt);
    return string.slice(startAt, endAt);
}

console.log(between("Louis 'Pops' Armstrong", "'", "'"));

// 1.1
function between (string, start, end) {
    var startAt = string.indexOf(start);
    if (start == -1) {
        return undefined;
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        return undefined;
    }
    return string.slice(startAt, endAt);
}

// 1.2 --> ambiguous 'error' return
function lastElement (array) {
    if (array.length > 0) {
        return array[array.length - 1];
    }
    else {
        return undefined;
    }
}

console.log(lastElement([1, 2, undefined]));

// 1.3 = Exception Handling
function lastElement (array) {
    if (array.length > 0) {
        return array[array.length - 1];
    }
    else {
        throw 'Cannot take the last element of an empty array';
    }
}

function lastElementPlusTen (array) {
    return lastElement(array) + 10;
}

try {
    console.log(lastElementPlusTen([]));
} catch (e) {
    console.log('something went wrong: ', e);
}

// 1.4
var currentThing = null;
// process global variable, then restore it back to its global state
function processThing (thing) {
    var prevThing = currentThing;
    currentThing = thing;
    /* do complicated processing...*/
    currentThing = prevThing;
}

function processThing (thing) {
    var prevThing = currentThing;
    currentThing = thing;
    try {
        // complicated processing...
    } finally {
        currentThing = prevThing;
    }
}

// 1.5
try {
    console.log(Sasquatch);
} catch (e) {
    console.log('Caught: ', e);
}

throw new Error('wolf');

// 1.6
var InvalidInputError = new Error('invalid numberic input');

function inputNumber () {
    var input = Number(prompt)
}

// 1.7
function testBetween () {
    function assert (name, x) {
        if (!x) {
            throw 'Assertion failed: ' + name;
        }
    }
}

assert("identical delimiters", between("a |b| c", "|", "|") == "b");
assert("whole string", between("[[n]]", "[[", "]]") == "n");
assert("reversed", between("]x[", "[", "]") === undefined);
assert("missing end", between(" -->d ", "-->", "<--") === undefined);
/* and so on */
