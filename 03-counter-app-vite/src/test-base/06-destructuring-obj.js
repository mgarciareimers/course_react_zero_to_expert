// Destructuring.
const returnPerson = ({ nameSurname, age, key, role = 'Soldier' }) => {
    return {
        'k': key,
        'role': role,
        'years': age,
        'latlng': {
            'lat': 12.32314,
            'lng': -3.1289
        }
    }
}

export {
    returnPerson
}