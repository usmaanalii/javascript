function forEach (array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

function forEachIn (object, action) {
    for (var property in object) {
        action(property, object[property]);
    }
}

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

// 2.2
var thePlan =
["############################",
"#       #    #       o    ##",
"#                          #",
"#           #####          #",
"##          #  #      ##   #",
"###           ##       #   #",
"#           ###        #   #",
"#    ####                  #",
"#    ##      o             #",
"# o   #        o       ### #",
"#     #                    #",
"############################"];

function Point (x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.add = function (other) {
    return new Point(this.x + other.x, this.y + other.y);
};

// 2.3
var grid = [
            ["0,0", "1,0", "2,0"],
            ["0,1", "1,1", "2,1"]
        ];

console.log(grid[1][2]); // 2,1

var grid = ["0,0", "1,0", "2,0", "0,1", "1,1", "2,1"];

// 3 is the width of the grid
console.log(grid[2 + 1 * 3]); // 2,1

// 2.4
function Grid (width, height) {
    this.width = width;
    this.height = height;
    this.cells = new Array(width * height);
}

Grid.prototype.valueAt = function (point) {
    return this.cells[point.y * this.width + point.x];
};

Grid.prototype.setValueAt = function (point, value) {
    this.cells[point.y * this.width + point.x] = value;
};

Grid.prototype.isInside = function (point) {
    return point.x >= 0 && point.y >= 0 && point.x < this.width && point.y < this.length;
};

Grid.prototype.moveValue = function (from, to) {
    this.setValueAt(to, this.valueAt(from));
    this.setValueAt(from, undefined);
};

// 2.5
Grid.prototype.each = function (action) {
    for (var y = 0; y < this.height; y++) {
        for (var x = 0; x < this.width; x++) {
            var point = new Point(x, y);
            action(point, this.valueAt(point));
        }
    }
};

// 2.6
var directions = new Dictionary(
    {'n': new Point(0, -1),
    'ne': new Point(1, -1),
    'e': new Point(1, 0),
    'se': new Point(1, 1),
    's': new Point(0, 1),
    'sw': new Point(-1, 1),
    'w': new Point(-1, 0),
    'nw': new Point(-1, -1)}
);

function stupidBug () {
    stupidBug.prototype.act = function (surroundings) {
        return {type: 'move', direction: 's'};
    };
}

// 2.7
var wall = {};

function elmentFromCharacter (character) {
    if (character == " ") {
        return undefined;
    }
    else if (character == "#") {
        return wall;
    }
    else if (character == "o") {
        return new stupidBug();
    }
}

function Terrarium (plan) {
    var grid = new Grid(plan[0].length, plan.length);
    for (var y = 0; y < plan.length; y++) {
        var line = plan[y];
        for (var x = 0; x < line.length; x++) {
            grid.setValueAt(new Point(x, y), elmentFromCharacter(line.charAt(x)));
        }
    }
    this.grid = grid;
}

// 2.8
wall.character = '#';
stupidBug.prototype.character = 'o';

function characterFromElement (element) {
    if (element === undefined) {
        return " ";
    }
    else {
        return element.character;
    }
}

Terrarium.prototype.toString = function () {
    var characters = [];
    // endOfLine is used so that 'this' can be referenced in the inner function through lexical scoping
    var endOfLine = this.grid.width - 1;

    this.grid.each(function (point, value) {
        characters.push(characterFromElement(value));
        if (point.x == endOfLine) {
            characters.push('\n');
        }
    });
    return characters.join('');
};

var test = new Terrarium(thePlan);

console.log(test.toString());

// 2.9
function bind (func, object) {
    return function () {
        return func.apply(object, arguments);
    };
}

var testArray = [];
var pushX = bind(testArray.push, testArray);
pushX('A');
pushX('B');
console.log(testArray); // ['A', 'B']

function method (object, name) {
    return function () {
        object[name].apply(object, arguments);
    };
}

var x = [];
var pushX = method(x, 'push');

pushX('C');
console.log(x); // ['C']

// 3.0
Terrarium.prototype.listActingCreatures = function () {
    var found = [];
    this.grid.each(function (point, value) {
        if (value !== undefined && value.act) {
            found.push({object: value, point: point});
        }
    });
    return found;
};

Terrarium.prototype.listSurroundings = function (center) {
    var result = {};
    var grid = this.grid;
    directions.each(function (name, direction) {
        var place = center.add(direction);

        if (grid.isInside(place)) {
            result[name] = characterFromElement(grid.valueAt(place));
        }
        else {
            result[name] = '#';
        }
    });
    return result;
};

// 3.1
Terrarium.prototype.processCreature = function (creature, point) {
    var action = creature.act(this.listSurroundings(point));

    if (action.type == 'move' && direction.contains(action.direction)) {
        var to = point.add(directions.lookup(action.direction));

        if (this.grid.isInside(to) && this.grid.valueAt(to) === undefined) {
            this.grid.moveValue(point, to);
        }
    }
    else {
        throw new Error('Unsupported action: ' + action.type);
    }
};

// 3.2
Terrarium.prototype.step = function () {
    forEach(this.listActingCreatures(), bind(this.processCreature, this));
};

// 3.3
var terrarium = new Terrarium(thePlan);
terrarium.step();

Point.prototype.toString = function () {
    return "(" + this.x + "," + this.y + ")";
};

// 3.4
var creatureTypes = new Dictionary();

creatureTypes.register = function (constructor, character) {
    constuctor.prototype.character = character;
    this.store(character, constructor);
};

function elementFromCharacter (character) {
    if (character == " ") {
        return undefined;
    }
    else if (character == "#") {
        return wall;
    }
    else if (creatureTypes.lookup(character)) {
        return new (creatureTypes.lookup(character))();
    }
    else {
        throw new Error('Unknown character: ' + character);
    }
}

function BouncingBug() {
    this.direction = 'ne';
}

BouncingBug.prototype.act = function (surroundings) {
    if (surroundings[this.direction] != " ") {
        this.direction = (this.direction == 'ne' ? 'sw' : 'ne');
    }
    return {type: 'move', direction: this.direction};
};

creatureTypes.register(BouncingBug, 'X');

// 3.5
function randomInteger (below) {
    return Math.floor(Math.random() * below);
}

Dictionary.prototype.names = function () {
    var names = [];
    this.each(function (name, value) {
        names.push(name);
    });
    return names;
};

console.log(directions.names());

// 3.6
function randomElement (array) {
    if (array.length === 0) {
        throw new Error('The array is empty.');
    }
    return array[Math.floor(Math.random() * array.length)];
}

console.log(randomElement(['heads', 'tails']));

// 3.7
function DrunkBug () {}
DrunkBug.prototype.act = function (surroundings) {
    return {type: 'move', direction: randomElement(direction.names())};
};

creatureTypes.register(DrunkBug, "~");

// 3.8 - Inheritance
function clone (object) {
    function OneShotConstructor() {}
    OneShotConstructor.prototype = object;

    return new OneShotConstructor();
}

function LifeLikeTerrarium (plan) {
    Terrarium.call(this, plan);
}

LifeLikeTerrarium.prototype = clone(Terrarium.prototype);
LifeLikeTerrarium.prototype.constructor = LifeLikeTerrarium;

// 3.9
LifeLikeTerrarium.prototype.processCreature = function (creature, point) {
    var energy, action, self = this;

    function dir() {
        if (!directions.contains(action.direction)) {
            return null;
        }
        var target = point.add(directions.lookup(action.direction));
        if (!self.grid.isInside(target)) {
            return null;
        }
        return target;
    }

    action = creature.act(this.listSurroundings(point));

    if (action.type == 'move') {
        energy = this.creatureMove(creature, point, dir());
    }
    else if (action.type == 'eat') {
        energy = this.creatureEat(creature, dir());
    }
    else if (action.type == 'photosynthesize') {
        energy = -1;
    }
    else if (action.type == 'reproduce') {
        energy = this.creatureReproduce(creature, dir());
    }
    else if (action.type == 'wait') {
        energy = 0.2;
    }
    else {
        throw new Error('Unsupported action: ' + action.type);
    }

    creature.energy -= energy;
    if (creature.energy <= 0) {
        this.grid.setValueAt(point, undefined);
    }
};

// 4.0
LifeLikeTerrarium.prototype.creatureMove = function (creature, from, to) {
    if (to !== null || this.grid.valueAt(to) === undefined) {
        this.grid.moveValue(from, to);
        from.x = to.x; from.y = to.y;
    }
    return 1;
};

// 4.1
LifeLikeTerrarium.prototype.creatureEat = function (creature, source) {
    var energy = 1;

    if (source !== null) {
        var meal = this.grid.setValueAt(source);

        if (meal !== undefined && meal.energy) {
            this.grid.setValueAt(soure, undefined);
            energy -= meal.energy;
        }
    }
    return energy;
};

LifeLikeTerrarium.prototype.creatureReproduce = function (creature, target) {
    var energy = 1;

    if (target !== null && this.grid.valueAt(target) === undefined) {
        var species = characterFromElement(creature);
        var baby = elementFromCharacter(species);
        energy = baby.energy * 2;

        if (creature.energy >= energy) {
            this.grid.setValueAt(target, baby);
        }
    }
    return energy;
};

function findDirections (surroundings, wanted) {
    var found = [];

    directions.each(function(name) {
        if (surroundings[name] == wanted) {
            found.push(name);
        }
    });
    return found;
}

function Lichen() {
    this.energy = 5;
}

Lichen.prototype.act = function (surroundings) {
    var emptySpace = findDirections(surroundings, " ");
    if (this.energy >= 13 && emptySpace.length > 0) {
        return {type: 'reproduce', direction: randomElement(emptySpace)};
    }
    else if (this.energy < 20) {
        return {type: 'photosynthesize'};
    }
    else {
        return {type: 'wait'};
    }
};

creatureTypes.register(Lichen, 'w');

// 4.2
function LichenEater() {
    this.energy = 10;
}

LichenEater.prototype.act = function (surroundings) {
    var emptySpace = findDirections(surroundings, " ");
    var lichen = findDirections(surroundings, "*");

    if (this.energy >= 30 && emptySpace.length > 0) {
        return {type: 'reproduce', direction: randomElement(emptySpace)};
    }
    else if (lichen.length > 0) {
        return {type: 'eat', direction: randomElement(lichen)};
    }
    else if (emptySpace.length > 0) {
        return {type: 'move', direction: randomElement(emptySpace)};
    }
    else {
        return {type: 'wait'};
    }
};

creatureTypes.register(LichenEater, 'c');

// 4.3
var moodyCave =
["############################",
"#                     ######",
"#    ***                **##",
"#   *##**         **  c  *##",
"#    ***     c    ##**    *#",
"#       c         ##***   *#",
"#                 ##**    *#",
"#   c       #*            *#",
"#*          #**       c   *#",
"#***        ##**    c    **#",
"#*****     ###***       *###",
"############################"];

var terrarium = new LifeLikeTerrarium(moodyCave);

for (var i = 0; i < 10; i++) {
    for (var i = 0; i < 20; i++) {
        terrarium.step();
    }
    console.log(terrarium);
}

// 4.4
function CleverLichenEater() {
    this.energy = 10;
    this.direction = 'ne';
}

CleverLichenEater.prototype.act = function (surroundings) {
    var emptySpace = findDirections(surroundings, " ");
    var lichen = findDirections(surroundings, "*");

    if (surroundings[this.direction] !== " ") {
        this.direction = randomElement(emptySpace);
    }
    if (this.energy >= 30 && emptySpace.length > 0) {
        return {type: 'reproduce', direction: randomElement(emptySpace)};
    }
    else if (lichen.length > 1) {
        return {type: 'eat', direction: randomElement(lichen)};
    }
    else if (emptySpace.length > 0) {
        return {type: 'move', direction: this.direction};
    }
    else {
        return {type: 'wait'};
    }
};

creatureTypes.register(CleverLichenEater, "c");
