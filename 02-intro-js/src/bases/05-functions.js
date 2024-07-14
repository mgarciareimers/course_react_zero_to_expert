// Functions.
function greeting0(nameSurname) {
    return `Hi, ${ nameSurname }`;
}

const greeting1 = function (nameSurname) {
    return `Hi, ${ nameSurname }`;
}

const greeting2 = (nameSurname) => {
    return `Hi, ${ nameSurname }`;
}

const greeting3 = (nameSurname) => `Hi, ${ nameSurname }`; // In case there is 1 line.

const getUser = () => ({
    'uid': '1234mnE32',
    'name': 'Mike',
    'surname': 'García'
});

const getActiveUser = (name) => ({
    'uid': '1234mnE32',
    'name': name,
});

console.log(greeting1('Mike'));
console.log(greeting2('Mike'));
console.log(greeting3('Mike'));

// User.
const user = getUser();
console.log(greeting3(`${ user.name } ${ user.surname }`));

// Active user.
const activeUser = getActiveUser('Mike M');
console.log(greeting3(`${ activeUser.name }`));