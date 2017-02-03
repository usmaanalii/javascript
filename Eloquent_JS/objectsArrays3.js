
// 4.0 - The argument's object
function argumentCounter () {
    return 'You gave me ' + arguments.length + ' arguments.';
}

console.log(argumentCounter('One', 'Two', 'Three'));

// 4.1 - default arguments
function add (number, howmuch) {
    if (arguments.length < 2) {
        howmuch = 1;
    }
    return number + howmuch;
}

console.log(add(6));
console.log(add(6, 4));

// 4.2
function range (start, end) {
    if (arguments.length < 2) {
        end = start;
        start = 0;
    }
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(4));
console.log(range(2, 4));

// 4.3
function sum (numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

console.log(sum(range(1, 10)));

// 4.4 - Enumerable properties
for (var name in Math) {
    console.log(name); // nothing printed
}

for (var name in ['Huey', 'Duwey', 'Louie']) {
    console.log(name); // 0, 1, 2 - not enumerable
}
