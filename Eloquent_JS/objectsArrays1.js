// 1.1
var text = 'purple haze';
console.log(text['length']); // bracket notation
console.log(text.length);

// 1.2
var cat = {color: 'gray', name: 'spot', size: 46};
cat.size = 47;
console.log(cat.size);

delete cat.size;
console.log(cat.size); // undefined

// 1.3
var empty = {};
empty.notReally = 1000;
console.log(empty);

// 1.4
var thing = {'gabba gabba': 'hey', 5: 10};
console.log(thing['5']);
console.log(thing[2 + 3]);

delete thing['gabba gabba'];

// 1.5
var propertyName = 'length';
var text = 'coco';
console.log(text[propertyName]); // equivalent to text.length

// 1.6
var chineseBox = {};
chineseBox.content = chineseBox;
console.log('content' in chineseBox);
console.log('content' in chineseBox.content);

// 1.7
var set = {'Spot': true};
set['White Fang'] = true;
delete set['Spot'];
console.log('Asoka' in set);

// 1.8
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2); // true
console.log(object1 == object3); // false

object1.value = 15;
console.log(object2.value); // returns 15 (same reference)
console.log(object3.value); // 10

// 1.9
var mailArchive = {
    0: 'Dear nephew, ... (mail number 1)',
    1: 'Dear nephew, ... (mail number 2)',
    2: 'Dear nephew, ... (mail number 3)'
};

for (var current = 0; current in mailArchive; current++) {
    console.log('Processing email #', current, ': ', mailArchive[current]);
}

// 2.0 - Arrays instead
var mailArchive = ['mail one', 'mail two', 'mail three'];

for (var current = 0; current < mailArchive.length; current++) {
    console.log('Processing email #', current, ': ', mailArchive[current]);
}

// 2.1
function range(upto) {
    var result = [];
    for (var i = 0; i <= upto; i++) {
        result[i] = i;
    }
    return result;
}

console.log(range(4));

// 2.2
var doh = 'Doh';
console.log(typeof doh.toUpperCase());
console.log(doh.toUpperCase());

// 2.3
var mack = [];
mack.push('Mack');
mack.push('the');
mack.push('knife');
console.log(mack);
console.log(mack.join(' '));
console.log(mack.pop()); // knife, push is the opposite
console.log(mack); // 'knife' removed

// 2.4
var words = 'Cities of the Interior';
console.log(words.split(' '));

// 2.5
var paragraph = 'born in 15-11-2003 (mother Spot): White Fang';
var condition = paragraph.charAt(0) == 'b' && paragraph.charAt(1) == 'o' && paragraph.charAt(2) == 'r' && paragraph.charAt(3) == 'n';

console.log(condition);

// 2.6
console.log(paragraph.slice(0, 4)); // born

function startsWith (string, pattern) {
    return string.slice(0, pattern.length) == pattern;
}

console.log(startsWith('rotation', 'rot'));
