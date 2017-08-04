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

// 1.0 - Types of nodes
function isTextNode (node) {
    return node.nodeType == 3;
}

isTextNode(document.body);

// 1.1
function isImage (node) {
    return !isTextNode(node) && node.nodeName == "IMG";
}

// 1.2 - Accessing nodes by giving them Id's
var picture = document.getElementById('picture');

// 1.3 - Creating elements
var secondHeader = document.createElement("H1");
var secondTitle = document.createTextNode('Chapter 2: Deep magic');

secondHeader.appendChild(secondTitle);
document.body.appendChild(secondHeader);

// 1.4 - Setting attributes
var newImage = document.createElement("IMG");
newImage.setAttribute('src', "img/yinyang.png");
document.body.appendChild(newImage);
newImage.getAttribute('src');

// 1.5
function dom (name, attributes /*, children...*/) {
    var node = document.createElement(name);

    if (attributes) {
        forEachIn(attributes, function(name, value) {
            node.setAttribute(name, value);
        });

    for (var i = 2; i < arguments.length; i++) {
        var child = arguments[i];
        if (typeof child == "string") {
            child = document.createTextNode(child);
        }
        node.appendChild(child);
    }
    }
    return node;
}

// 1.6
var output = dom("DIV", {id: "printOutput"}, dom("H1", null, "Print output:"));
document.appendChild(output);

function printIt () {
    var result = [];
    forEach(arguments, function(args) {result.push(String(arg));});
    output.appendChild(dom("PRE", null, result.join("")));
}

// 1.7
picture.style.position = "absolute";
var angle = 0;
setInterval(function() {
    angle += 0.1;
    picture.style.left = (100 + 100 + Math.cos(angle)) + "px";
    picture.style.top = (100 + 100 + Math.sin(angle)) + "px";
}, 100);
