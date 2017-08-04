// 1.0
var encoded = encodeURIComponent("aztec empire");
console.log(encoded);

// 1.1
function validInfo (form) {
    return form.elements.name.value !== "" && /^.+@.+\.\w{2, 4}$/.test(form.elements.email.value);
}

spamForm.elements.send.onlick = function() {
    if (validInfo(spamForm)) {
        spamForm.submit();
    }
    else {
        alert('Give us a name and a valid email address!');
    }
};
