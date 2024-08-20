import heroes from '../data/heroes';

export default (id) => {
    return heroes.find(hero => hero.id === id);
}