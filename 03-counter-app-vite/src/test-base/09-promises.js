// Promises.
import { getHeroeById } from './08-imp-exp';

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroeById(id);
    
            if (hero === undefined) {
                return reject({ data: null, error: 'Hero not found' });
            }
    
            resolve({ data: { hero: hero }, error: null });
        }, 1000);
    });
}

export {
    getHeroesByIdAsync,
}