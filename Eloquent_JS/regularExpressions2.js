function forEach (array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

// 2.3
var ini =
'searchengine=http://www.google.com/search?q=$1\nspitefulness=9.7\n; comments are preceded by a semicolon...\n; these are\nsections, concerning individual enemies\n[larry]\nfullname=Larry Doe\ntype=kindergarten bully\nwebsite=http://www.geocities.com/CapeCanaveral/11451\n[gargamel]\nfullname=Gargamel\ntype=evil sorcerer\noutputdir=/home/marijn/enemies/gargamel';

function splitLines (string) {
    return string.split(/\r?\n/);
}

function parseINI (string) {
    var lines = splitLines(string);
    var categories = [];

    function newCategory (name) {
        var cat = {name: name, fields: []};
        categories.push(cat);
        return cat;
    }

    var currentCategory = newCategory("TOP");

    forEach(lines, function(line) {
        var match;
        if (/^\s*(;.*)?$/.test(line)) {
            return;
        }
        else if (match = line.match(/^\[(.*)\]$/)) {
            currentCategory = newCategory(match[1]);
        }
        else if (match = line.match(/^(\w+)=(.*)$/) ) {
            currentCategory.fields.push({name: match[1], value: match[2]});
        }
        else {
            throw new Error("Line '" + line + "' is invalid.");
        }
    });
}
