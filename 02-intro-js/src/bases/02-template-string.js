// Functions.
const greeting = (nameSurname) => {
    return `Hi, ${ nameSurname }`;
}

// Variables and constants.
const nameVal = 'Mike';
const surname = 'García';

// Template string.
const nameSurname = `${ nameVal } ${ surname }`;

console.log(greeting(nameSurname));