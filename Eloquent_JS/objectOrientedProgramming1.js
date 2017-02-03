// 1.0
var rabbit = {};
rabbit.speak = function (line) {
    console.log("The rabbit says '", line, "'");
};

rabbit.speak("I'm alive");

// 1.1
function speak (line) {
    console.log("The ", this.adjective, " rabbit says '", line, "'");
}

var whiteRabbit = {adjective: "white", speak: speak};
var fatRabbit = {adjective: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");

fatRabbit.speak("I could sure use a carrot right now.");

// 1.2
speak.apply(fatRabbit, ["Yum."]);
speak.call(fatRabbit, "Burp.");

function run (from, to) {
    console.log("The ", this.adjective, " rabbit runs from ", from, " to ", to, ".");
}

run.apply(whiteRabbit, ["A", "B"]);
run.call(fatRabbit, "the cupboard", "the fridge");

// 1.3
function Rabbit (adjective) {
    this.adjective = adjective;
    this.speak = function (line) {
        console.log("The ", this.adjective, " rabbit says '", line, "'");
    };
}

var killerRabbit = new Rabbit('killer');


// 1.4
Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth); // small

killerRabbit.teeth = 'long, sharp and bloody';
console.log(killerRabbit.teeth);

console.log(Rabbit.prototype.teeth); // small

// 1.5
Rabbit.prototype.dance = function () {
    console.log("The ", this.adjective, " rabbit dances a jig.");
};

function Rabbit (adjective) {
    this.adjective = adjective;
}

Rabbit.prototype.speak = function (line) {
    console.log("The ", this.adjective, " rabbit says '", line, "'");
};

// 1.6
var noCatsAtAll = {};
if ('constructor' in noCatsAtAll) {
    console.log("Yes, there definitely is a cat called 'constructor'");
}

Object.prototype.properties = function () {
    var result = [];
    for (var property in this) {
        result.push(property);
    }
    return result;
};

var test = {x: 10, y: 3};
console.log(test.properties()); // x, y, properties

// 1.7
Object.prototype.properties = function () {
    var result = [];
    for (var property in this) {
        if (this.hasOwnProperty(property)) {
            result.push(property);
        }
    }
    return result;
};

var test = {'Fat Igor': true, 'Fireball': true};
console.log(test.properties());

// 1.8
function forEachIn (object, action) {
    for (var property in object) {
        action(property, object[property]);
    }
}

// 1.9 - object has property hasOwnProperty already
function forEachIn (object, action) {
    for (var property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property)) {
            action(property, object[property]);
        }
    }
}

// 2.0
var object = {foo: 'bar'};
console.log(Object.propertyIsEnumerable.call(object, 'foo'));

// 2.1 - Dictionary
function Dictionary (startValues) {
    this.values = startValues || {};
}

Dictionary.prototype.store = function (name, value) {
    this.values[name] = value;
};

Dictionary.prototype.lookup = function (name) {
    return this.values[name];
};

Dictionary.prototype.contains = function (name) {
    return Object.prototype.propertyIsEnumerable.call(this.values, name);
};

Dictionary.prototype.each = function (action) {
    forEachIn(this.values, action);
};

// 2.1 - Dictionary test
var colors = new Dictionary({
    Grover: 'blue',
    Elmo: 'red',
    Bert: 'yellow'
});

var test1 = colors.contains('Grover');
var test2 = colors.contains('constructor');

console.log(test1); // true
console.log(test2); // false

colors.store('Ernie', 'orange');
colors.each(function(name, color) {
    console.log(name, " is ", color);
});
