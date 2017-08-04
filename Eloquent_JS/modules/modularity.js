function forEachIn (object, action) {
    for (var property in object) {
        action(property, object[property]);
    }
}

// 1.1
var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getMonthName (number) {
    return names[number];
}

function getMonthNumber (name) {
    for (var number = 0; number < names.length; number++) {
        if (names[number] == name) {
            return number;
        }
    }
}

console.log(getMonthNumber('February')); // 1

// 1.2
function buildMonthNameModule () {
    var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function getMonthName (number) {
        return names[number];
    }

    function getMonthNumber (name) {
        for (var number = 0; number < names.length; number++) {
            if (names[number] == name) {
                return number;
            }
        }
    }

    window.getMonthName = getMonthName;
    window.getMonthNumber = getMonthNumber;
}

buildMonthNameModule();

// 1.3
function provide (values) {
    forEachIn(values, function(name, value) {
        windows[name] = value;
    });
}

// 1.4
(function () {
    var names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    provide({
        getMonthName: function (number) {
            return names[number];
        },
        getMonthNumber: function (name) {

            for (var number = 0; number < names.length; number++) {
                if (names[number] == name) {
                    return number;
                }
            }
        }
    });
})();

// 1.5 - Module Objects
var HTML = {
    tag: function (name, content, properties) {
        return {name: name, properties: properties, content: content};
    },
    link: function (target, index) {
        return HTML.tag('a', [text], {href: target});
    }
    // ....
};

// 1.6
var days = (function () {
    var names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return {
        getDayName: function (number) {
            return names[number];
        },
        getDayNumber: function (name) {
            for (var number = 0; names.length; number++) {
                if (names[number] == name) {
                    return number;
                }
            }
        }
    };
})();

console.log(days.getDayNumber('Wednesday'));

// 1.7
function positionOf (element, array, compare, start, end) {
    if (start === null) {
        start = 0;
    }
    if (end === null) {
        end = array.length;
    }
    for (; start < end; start ++) {
        var current = array[start];
        if (compare ? compare(element, current) : element == current) {
            return start;
        }
    }
}

console.log(positionOf(2, [1, 2, 3, 4, 3, 2, 1], null, 3, 6));

// 1.8 - optional arguments in args: {compare, start, end}
function positionOf (element, array, args) {
    args = args || {};
    var start = (args.start === null ? 0 : args.start),
        end = (args.end === null ? array.length : args.end),
        compare = args.compare;

    for (; start < end; start++) {
        var current = array[start];
        if (compare ? compare(element, current) : element === current) {
            return start;
        }
    }
}

console.log(positionOf(2, [1, 2, 3, 4, 3, 2, 1], {start: 3, end: 6}));
