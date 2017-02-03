// Introduction

// 1.1
var total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

console.log("This is the first line\nAnd this is the second");
console.log("A newline character is written like \"\\n\".");

console.log(Math.max(2, 4));

// 1.2
var num = 2;

if (num < 10) {
    console.log("Small");
}
else if (num < 100) {
    console.log("Medium");
}
else {
    console.log("Large");
}

// 1.3
var currentNumber = 0;
while (currentNumber <= 12) {
    console.log(currentNumber);
    currentNumber = currentNumber + 2;
}

// 1.4
var result = 1;
var counter = 0;

while (counter < 10) { // 'do' loops ensure the body is run at least once
    result = result * 2;
    counter = counter + 1;
}
console.log(result);

// 1.5 (for loop alternative to ^)
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);

// 1.6 - Break
for (var current = 20; ;current++) {
    if (current % 7 === 0) {
        break;
    }
}
console.log(current);

// 1.7
var result = 1;
for (var counter = 0; counter < 10; counter++) {
    result *= 2;
}
console.log(result);

// 1.8
switch(2) {
    case 2:
        console.log("two");
        break;
    case 1:
        console.log("one");
        break;
    default:
        console.log("unknown");
        break;
}

// 1.9
var mysteryVariable;
console.log(mysteryVariable); // undefined

// 2.0 - Type Conversions (=== removes this)
console.log(false == 0); // True
console.log("" == 0); // True
console.log('5' == 5); // True

// 2.1
var maybeNull = null;
// .., mystery code that might put a string into maybeNull ...
if (maybeNull) {
    console.log("maybeNull has a value");
}

// 2.2
console.log("Apollo" + 5); // Apollo5
console.log(null + 'ify'); // nullify
console.log('5' * 5); // 25
console.log('strawberry' * 5); // NaN

console.log((Number('5') * 5)); // good practice (string -> number)
