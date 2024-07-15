// Destructuring arrays.
const returnArray1 = () => {
    return [
        'ABC',
        123
    ];
}

const returnArray2 = (value) => {
    return [
        value,
        () => console.log('Hello World')
    ];
}


const people = [
    'Miguel',
    'Carlos',
    'Javier'
];

// People.
const [ p1, , p3, ] = people;
console.log(p1, p3);

// Return.
const [ letters, numbers ] = returnArray1();
console.log(letters, numbers);

// Return function.
const [ userName, setUserName ] = returnArray2('Let\'s go');
console.log(userName, setUserName);
setUserName();