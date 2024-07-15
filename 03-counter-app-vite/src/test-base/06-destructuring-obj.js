// Destructuring.
const returnPerson1 = (user) => {
    const { nameSurname, age, key } = person;
    console.log(nameSurname, age, key);
}

const returnPerson2 = ({ nameSurname, age, key }) => {
    console.log(nameSurname, age, key);
}

const returnPerson3 = ({ nameSurname, age, key, role = 'Soldier' }) => {
    console.log(nameSurname, age, key, role);
}

const returnPerson4 = ({ nameSurname, age, key, role = 'Soldier' }) => {
    return {
        'k': key,
        'years': age,
        'latlng': {
            'lat': 12.32314,
            'lng': -3.1289
        }
    }
}

const person = {
    'nameSurname': 'Tony',
    'age': 45,
    'key': 'Ironman',
    'role': 'Millionaire',
}

returnPerson1(person);
returnPerson2(person);
returnPerson3(person);

const { k, years, latlng: { lat, lng } } = returnPerson4(person);
console.log(k, years, lat, lng);