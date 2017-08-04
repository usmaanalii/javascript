function forEach (array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

// 1.9
var paragraphs = RECLUSEFILE.split('\n\n');
console.log(paragraph.length);

// 2.0
function processParagraph (paragraph) {
    var header = 0;
    while (paragraph.charAt(header) == '&') {
        header++;
    }
    if (header > 0) {
        return {type: 'h' + header, content: paragraph.slice(header + 1)};
    }
    else {
        return {type: 'p', content: paragraph};
    }
}

map(processParagraph, RECLUSEFILE.split('\n\n'));

// 2.1
function splitParagraph (text) {
    function split (pos) {
        if (pos == text.length) {
            return [];
        }
        else if (text.charAt(pos) == '*') {
            var end = findClosing('*', pos + 1),
                frag = {type: 'emphasized', content: text.slice(pos + 1, end)};
            return [frag].concat(split(end + 1));
        }
        else {
            var end = findOpeningOrEnd(pos),
                frag = {type: 'normal', content: text.slice(pos, end)};
            return [frag].concat(split(end));
        }
    }

    function findClosing (character, from) {
        var end = text.indexOf(character, from);
        if (end == -1) {
            throw new Error('Missing closing "' + character + '"');
        }
        else {
            return end;
        }
    }

    function findOpeningOrEnd (from) {
        function indexOrEnd (character) {
            var index = text.indexOf(character, from);
            return index == -1 ? text.length: index;
        }
        return Math.min(indexOrEnd('*'), indexOrEnd('{'));
    }
    return split(0);
}

// 2.2 - Javascript version
function split () {
    var pos = 0, fragments = [];
    while (pos < text.length) {
        if (text.charAt(pos) == '*') {
            var end = findClosing('*', pos + 1);
            fragments.push({type: 'emphasized', content: text.slice(pos + 1, end)});
            pos = end + 1;
        }
        else if (text.charAt(pos) == '(') {
            var end = findClosing('}', pos + 1);
            fragments.push({type: 'footnote', content: text.slice(pos + 1, end)});
            pos = end + 1;
        }
        else {
            var end = findOpeningOrEnd(pos);
            fragments.push({type: 'normal', content: text.slice(pos, end)});
            pos = end;
        }
    }
    return fragments;
}

// 2.3
function processParagraph (paragraph) {
    var header = 0;
    while (paragraph.charAt(header) == '%') {
        header++;
    }
    if (header > 0) {
        return {type: 'h' + header, content: splitParagraph(paragraph.slice(header + 1))};
    }
    else {
        return {type: 'p', content: splitParagraph(paragraph)};
    }
}

// 2.4
function extractFootnotes (paragraphs) {
    var footnotes = [];
    var currentNote = 0;

    function replaceFootNote (fragment) {
        if (fragment.type == 'footnote') {
            currentNote++;
            footnotes.push(fragment);
            fragment.number = currentNote;
            return {type: 'reference', number: currentNote};
        }
        else {
            return fragment;
        }
    }

    forEach(paragraphs, function (paragraph) {
        paragraph.content = map(replaceFootNote, paragraph.content);
    });

    return footnotes;
}

// 2.5 - Generating HTML
var linkObject = {
    name: 'a',
    attributes: {href: 'http://www.gokgs.com/'},
    content: ['Play Go!']
};

function tag (name, content, attributes) {
    return {name: name, attributes: attributes, content: content};
}

// 2.6
function link (target, text) {
    return tag('a', [text], {href: target});
}

function htmlDoc (title, bodyContent) {
    return tag('html', [tag('head', [tag('title', [title])]), tag('body', bodyContent)]);
}

// 2.7
function escapeHTML (text) {
    var replacements = [[/&/g, "&amp;"], [/"/g, "&quot;"],
[/</g, "&lt;"], [/>/g, "&gt;"]];

    forEach(replacements, function(replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}

// 2.8
function renderAttributes (attributes) {
    if (attributes === null) {
        return "";
    }
    var result = [];
    for (var name in attributes) {
        result.push(" " + name + "=\"" + escapeHTML(attributes[name]) + "\"");
    }
    return result.join("");
}

// 2.9
function renderHTML (element) {
    var pieces = [];

    function render (element) {
        // Text node
        if (typeof element == 'string') {
            pieces.push(escapeHTML(element));
        }
        // Empty tag
        else if (!element.content || element.content.length === 0) {
            pieces.push("<" + element.name + renderAttributes(element.attribtues) + ">");
        }
        // Tag with content
        else {
            pieces.push("<" + element.name + renderAttributes(element.attributes) + ">");

            forEach(element.content, render);
            pieces.push('</' + element.name + ">");
        }
    }
    render(element);
    return pieces.join("");
}

var test = renderHTML(link("http://www.nedroid.com", "Drawings!"));

console.log(test);

// 3.0
function renderFragment (fragment) {
    if (fragment.type == 'reference') {
        return tag('sup', [link('#footnote' + number, String(number))]);
    }
    else if (fragment.type == 'emphasised') {
        return tag('em', [fragment.content]);
    }
    else if (fragment.type == 'normal') {
        return fragment.content;
    }
}

function renderParagraph (paragraph) {
    return tag(paragraph.type, map(renderFragment, paragraph.content));
}

// 3.1
function renderFootnote (footnote) {
    var anchor = tag('a', [], {name: 'footnote' + footnote.number});
    var number = "[" + footnote.number + "]";
    return tag("p", [tag("small", [anchor, number, footnote.content])]);
}

// 3.2
function renderFile (file, title) {
    var paragraphs = map(processParagraph, file.split('\n\n'));
    var footnotes = map(renderFootnote, extractFootnotes(paragraphs));
    var body = map(renderParagraph, paragraphs).concat(footnotes);

    return renderHTML(htmlDoc(title, body));
}
