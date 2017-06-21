const dogs = [
    {
        name: 'Snickers',
        age: 2
    }, {
        name: 'Hugo',
        age: 8
    }
];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('This is %s text', 'interpolated');

// Styled
console.log('%c This is blue by using percent c', 'color: blue');

// warning!
console.warn('Warning');

// Error :|
console.error('ERROR!');

// Info
console.info('Crocodiles eat 3-4 people per year!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Usy');
console.count('Wes');
console.count('Usy');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/usyyy')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    })
