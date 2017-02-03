// 1.0
test = 'doubledare'.search(/le/);
console.log(test);

var slash = /\//;
console.log('AC/DC'.search(slash));

var asterikOrBrace = /[\{\*]/;
var story = 'We noticed the *giant sloth*, hanging from a giant branch.';

console.log(story.search(asterikOrBrace));

// 1.1
var digitSurroundedBySpace = /\s\d\s/;
console.log('1a 2 3d'.search(digitSurroundedBySpace));

var notABC = /[^ABC]/;
console.log('ABCABCABCBBDADABC'.search(notABC));

var datePattern = /\d\d\/\d\d\/\d\d\d\d/;
test = 'born 15/11/2003 (mother Spot): White Fang';
console.log(test.search(datePattern));

// 1.2
console.log(/a/.test('blah')); // true (any string containing a)
console.log(/^a$/.test('blah')); // false

console.log(/cat/.test('concatenate')); // true
console.log(/\bcat\b/.test('concatenate')); // false

// 1.3 - Repeating Patterns
var parentheticText = /\(.*\)/;
var test = 'Its (the sloth\'s) claws were gigantic!';
console.log(test.search(parentheticText));

var datePattern = /\d{1,2}\/\d\d?\/\d{4}/;
var test = 'born 15/11/2003 (mother Spot): White Fang';
console.log(test.search(datePattern));

// 1.4 - Groupong subexpressions
var cartoonCrying = /boo(hoo+)+/i;
console.log(cartoonCrying.test('Boohoooohooohoo')); // true

// 1.5 - Choosing between alternatives
var holyCow = /\b(sacred|holy) (cow|bovine|bull|taurus)\b/i;
console.log(holyCow.test('Sacred bovine')); // true

// 1.6 - match
console.log('No'.match(/yes/i)); // null
console.log('... yes'.match(/yes/i)); // [...]
console.log('Giant Ape'.match(/giant (\w+)/i)); // [...]

// 1.7
function extractDate (string) {
    var found = string.match(/\b(\d\d?)\/(\d\d?)\/(\d{4})\b/);
    if (found === null) {
        throw new Error('No date found in \'' + string + '\'');
    }
    return new Date(Number(found[3]), Number(found[2]), Number(found[3]));
}

// 1.8
console.log('Borobudur'.replace(/[ou]/g, 'a'));

var names = "Piccaso, Pablo\nGauguin, Paul\nVan Gogh, Vincent";

var test = names.replace(/([\w ]+), ([\w ]+)/g, '$2, $1');
console.log(test);

// 1.9
var text = 'the cia and fbi';
var test = text.replace(/\b(fbi|cia)\b/g, function (str) {
    return str.toUpperCase();
});

console.log(test);

// 2.0
var stock = '1 lemon, 2 cabbages, and 101 eggs';

function minusOne (match, amount, unit) {
    amount = Number(amount) - 1;
    // only one left, remove the 's'
    if (amount == 1) {
        unit = unit.slice(0, unit.length - 1);
    }
    else if (amount === 0) {
        amount = 'no';
    }
    return amount + ' ' + unit;
}

var test = stock.replace(/(\d+) (\w+)/g, minusOne);
console.log(test);

// 2.1
function escapeHTML (text) {
    var replacements = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;'
    };
    return text.replace(/[<>&"]/g, function(character) {
        return replacements[character];
    });
}

// 2.2
var badWords = ['ape', 'monkey', 'simian', 'gorilla', 'evolution'];
var pattern = new RegExp(badWords.join('|'), 'i');

function isAcceptable (text) {
    return !pattern.test(text);
}

console.log(isAcceptable('The quick brown fox...')); // true
console.log(isAcceptable('Cut that monkeybusiness out')); // false
console.log(isAcceptable('Mmmm, grapes')); // false
