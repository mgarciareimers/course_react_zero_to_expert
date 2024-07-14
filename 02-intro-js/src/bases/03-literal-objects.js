// Literal objects.
const person1 = {
    name: 'Tony',
    surname: 'Stark',
    date: 45,
    address: {
        city: 'New York',
        zipCode: 11111,
        lat: 14.3232,
        lng: 34.923321,
    },
};

const person2 = { ...person1 };
person2.name = 'Peter';
person2.surname = 'Parker';

console.log(person1);
console.log(person2);