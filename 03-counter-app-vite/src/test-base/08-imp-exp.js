// Import/export + Arrays.
// import { heroes } from '../data/heroes-const';
import { heroes, owners } from '../data/heroes-default';

const getHeroeById = (id) => {
    return heroes.find((element) => element.id === id);
}

const getHeroesByOwner = (owner) => {
    if (owner.trim() === '') {
        return heroes;
    }

    return heroes.filter((element) => element.owner === owner);
}

// console.log(heroes, owners);
// console.log(getHeroeById(1));
// console.log(getHeroesByOwner('DC'));

export {
    getHeroeById,
    getHeroesByOwner
}