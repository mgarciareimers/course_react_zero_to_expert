import heroes from '../data/heroes';

export default (name = '') => {
    if (name.trim().length === 0) {
        return [];
    }

    return heroes.filter(hero => hero.superhero.trim().toLowerCase().includes(name.trim().toLowerCase()));
}