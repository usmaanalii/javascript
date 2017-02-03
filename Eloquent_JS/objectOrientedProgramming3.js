function forEachIn (object, action) {
    for (var property in object) {
        action(property, object[property]);
    }
}

function clone (object) {
    function OneShotConstructor() {}
    OneShotConstructor.prototype = object;

    return new OneShotConstructor();
}

// 4.5
Object.prototype.inherit = function (baseConstructor) {
    this.prototype = clone(baseConstructor.prototype);
    this.prototype.consturctor = this;
};

Object.prototype.method = function (name, func) {
    this.prototype[name] = func;
};

// 4.6
function StrangeArray() {}

StrangeArray.inherit(Array);
StrangeArray.method('push', function (value) {
    Array.prototype.push.call(this, value);
    Array.prototype.push.call(this, value);
});

var strange = new StrangeArray();
strange.push(4);
console.log(strange);

// 4.7
Object.prototype.create = function () {
    var object = clone(this);

    if (object.construct !== undefined) {
        object.construct.apply(object, arguments);
    }
    return object;
};

Object.prototype.extend = function (properties) {
    var result = clone(this);

    forEachIn (properties, function(name, value) {
        result[name] = value;
    });
    return result;
};

// 4.3 - Adventure Game
var Item = {
    construct: function (name) {
        this.name = name;
    },
    inspect: function () {
        console.log("it is ", this.name, ".");
    },
    kick: function () {
        console.log("klunk!");
    },
    take: function () {
        console.log("you cannot lift ", this.name, ".");
    }
};

var lantern = Item.create('the brass lantern');
lantern.kick();

// 4.4
var DetailedItem = Item.extend ({
    construct: function (name, details) {
        Item.construct.call(this, name);
        this.details = details;
    },
    inspect: function () {
        console.log("you see ", this.name, ", ", this.details, ".");
    }
});

var giantSloth = DetailedItem.create('the giant sloth', 'it is quietly hanging from a tree, munching leaves');

giantSloth.inspect();

// 4.5
var SmallItem = Item.extend ({
    kick: function () {
        console.log(this.name, " flies across the room.");
    },
    take: function () {
        // imagine some code that moves the item to your pocket here
        console.log("you take ", this.name, ".");
    }
});

var pencil = SmallItem.create("the red pencil");
pencil.take();

// 4.6
Object.prototype.isA = function (prototype) {
    function DummyConstructor() {}
    DummyConstructor.prototype = prototype;

    return this instanceof DummyConstructor;
};

console.log(pencil.isA(Item)); // true
console.log(pencil.isA(DetailedItem)); // false

// 4.7 - Multiple Inheritance
function mixInto (object, mixIn) {
    forEachIn(mixIn, function(name, value) {
        object[name] = value;
    });
}

var SmallDetailedItem = clone(DetailedItem);
mixInto(SmallDetailedItem, SmallItem);

var deadMouse = SmallDetailedItem.create("Fred the mouse", "he is dead");
deadMouse.inspect();
deadMouse.kick();

// 4.8
var Monster = Item.extend ({
    construct: function (name, dangerous) {
        Item.construct.call(this, name);
        this.dangerous = dangerous;
    },
    kick: function () {
        if (this.dangerous) {
            console.log(this.name, " bites your head off.");
        }
        else {
            console.log(this.name, " squeaks and runs away.");
        }
    }
});

var DetailedMonster = DetailedItem.extend({
    construct: function (name, description, dangerous) {
        DetailedItem.construct.call(this, name, description);
        Monster.construct.call(this, name, dangerous);
    },
    kick: Monster.kick
});

var giantSloth = DetailedMonster.create(
    "the giant sloth",
    "it is quitely hanging from a tree, munching leaves",
    true
);

console.log(giantSloth.kick());
