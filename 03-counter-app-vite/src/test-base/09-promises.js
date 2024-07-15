// Promises.
import { getHeroeById } from './bases/08-imp-exp';

const id = 4;

/*
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeById(id);

        if (heroe === undefined) {
            return reject({ data: null, error: 'Heroe not found' });
        }

        resolve({ data: { heroe: heroe }, error: null });
    }, 2000);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.warn(error);
});
*/

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);
    
            if (heroe === undefined) {
                return reject({ data: null, error: 'Heroe not found' });
            }
    
            resolve({ data: { heroe: heroe }, error: null });
        }, 2000);
    });
}

getHeroesByIdAsync(id)
    .then((result) => {
        console.log(result);
    }).catch((error) => {
        console.warn(error);
    });