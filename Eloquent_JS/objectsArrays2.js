// 2.7
function catNames (paragraph) {
    var colon = paragraph.indexOf(':');
    return paragraph.slice(colon + 2).split(', ');
}

var test = 'born 20/09/2004 (mother Yellow Bess): Doctor Hobbles the 2nd, Noog';

console.log(catNames(test));
console.log('-------------');

// 2.8 - Full Algorithm
var livingCats = {'Spot': true};

for (var mail = 0; mail < ARCHIVE.length; mail++) {
    var paragraphs = ARCHIVE[mail].split('\n');
    for (var i = 0; i < paragraph.length; i++) {
        var paragraph = paragraph[i];
        if (startsWith(paragraph, 'born')) {
            var names = catNames(paragraph);
            for (var name = 0; names.length; name++) {
                livingCats[names[name]] = true;
            }
        }
            else if (startsWith(paragraph, 'died')) {
                var names = catNames(paragraph);
                for (var name = 0; names.length; name++) {
                    delete livingCats[names[name]];
            }
        }
    }
}

// test
if ('Spot' in livingCats) {
    console.log('Spot lives!');
}
else {
    console.log('Good old Spot, may she rest in peace.');
}

// 2.9
function addToSet (set, values) {
    for (var i = 0; i < values.length; i++) {
        set[values[i]] = true;
    }
}

function removeFromSet (set, values) {
    for (var i = 0; i < values.length; i++) {
        delete set[values[i]];
    }
}

var livingCats = {'Spot': true};

for (var mail = 0; mail < ARCHIVE.length; mail++) {
    var paragraphs = ARCHIVE[mail].split('\n');
    for (var i = 0; i < paragraph.length; i++) {
        var paragraph = paragraph[i];
        if (startsWith(paragraph, 'born')) {
            addToSet(livingCats, catNames(paragraph));
        }
            else if (startsWith(paragraph, 'died')) {
                removeFromSet(livingCats, catNames(paragraph));
        }
    }
}

// 3.0
function findLivingCats () {
    var livingCats = {'Spot': true};

    function handleParagraph (paragraph) {
        if (startsWith(paragraph, 'born')) {
            addToSet(livingCats, catNames(paragraph));
        }
        else if (startsWith(paragraph, 'died')) {
            removeFromSet(livingCats, catNames(paragraph));
    }

    for (var mail = 0; mail < ARCHIVE.length; mail++) {
        var paragraphs = ARCHIVE[mail].split('\n');

        for (var i = 0; i < paragraph.length; i++) {
            handleParagraph(paragraphs[i]);
            }
        }
    }
    return livingCats;
}

// 3.1
var howMany = 0;
for (var cat in findLivingCats()) {
    howMany++;
}
console.log('There are currently ', howMany, ' cats alive.');

// 3.2
var when = {
    year: 1980,
    month: 2,
    day: 1
};

var when = new Date(1980, 1, 1);

console.log(new Date());
console.log(when);

var example = new Date(2007, 2, 30, 8, 20, 30);
console.log(example); // 2007-03*-30T07*:20:30.00z

// 3.3
var today = new Date();

console.log('Year: ', today.getFullYear(), ', month: ', today.getMonth(), ', day: ', today.getDay());

console.log('Hour: ', today.getHours(), ', minutes: ', today.getMinutes(), ', seconds: ', today.getSeconds());

console.log('Day of week: ', today.getDay());

console.log(today.getTime()); // seconds since 01/01/1970

// 3.4 - Comparing dates
var wende = new Date(1989, 10, 9);
var gulfWarOne = new Date(1990, 6, 2);
console.log(wende < gulfWarOne);
console.log(wende == wende);

// be careful
console.log(wende == new Date(1989, 10, 9)); // false

var wende1 = new Date(1989, 10, 9),
    wende2 = new Date(1989, 10, 9);
console.log(wende1.getTime() == wende2.getTime()); // true

// 3.5 - Timezones
console.log(new Date().getTimezoneOffset()); // 0

// 3.6
function extractDate (paragraph) {
    function numberAt (start, length) {
        return Number(paragraph.slice(start, start + length));
    }
    return new Date(numberAt(11, 4), numberAt(8, 2) - 1, numberAt(5, 2));
}

// 3.7
function catRecord (name, birthdate, mother) {
    return {name: name, birth: birthdate, mother: mother};
}

function addCats (set, names, birthdate, mother) {
    for (var i = 0; i < names.length; i++) {
        set[names[i]] = catRecord(names[i], birthdate, mother);
    }
}

function deadCats (set, names, deathdate) {
    for (var i = 0; i < names.length; i++) {
        set[names[i]].death = deathdate;
    }
}

// 3.8
function extractMother (paragraph) {
    var start = paragraph.indexOf('(mother ') + '(mother '.length;
    var end = paragraph.indexOf((')'));
    return paragraph.slice(start, end);
}

var test = extractMother('born 15/11/2003 (mother Spot): White Fang');

console.log(test);

// 3.7 - Algorithm (Updated)
function findCats () {
    var cats = {'Spot': catRecord('Spot', new Date(1997, 2, 5), 'unknown')};

    function handleParagraph (paragraph) {
        if (startsWith(paragraph, 'born')) {
            addCats(cats, catNames(paragraph), extractDate(paragraph), extractMother(paragraph));
        }
        else if (startsWith(paragraph, 'died')) {
            deadCats(cats, catNames(paragraph), extractDate(paragraph));
    }

    for (var mail = 0; mail < ARCHIVE.length; mail++) {
        var paragraphs = ARCHIVE[mail].split('\n');

        for (var i = 0; i < paragraph.length; i++) {
            handleParagraph(paragraphs[i]);
            }
        }
    }
    return cats;
}

// 3.8
function formatDate (date) {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

function catInfo (data, name) {
    var cat = data[name];
    if (cat === undefined) {
        return 'No cat by the name of ' + name + ' is known';
    }

    var message = name + ', born' + formatDate(cat.birth) + ' from mother ' + cat.mother;

    if ('death' in cat) {
        message += ', died' + formatDate(cat.death);
    }
    return message + '.';
}

catInfo(catData, 'Fat Igor');

// 3.9
function oldestCat (data) {
    var oldest = null;

    for (var name in data) {
        var cat = data[name];
        if(!('death' in cat) && (oldest === null || oldest.birth > cat.birth)) {
            oldest = cat;
        }

        if (oldest === null) {
            return null;
        }
        else {
            return oldest.name;
        }
    }
}
