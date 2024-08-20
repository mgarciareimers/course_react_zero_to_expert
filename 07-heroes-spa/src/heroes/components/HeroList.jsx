import React, { useMemo } from 'react';

import HeroListItem from './HeroListItem';

import { getHeroesByPublisher } from '../helpers';

const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [ publisher ]);

    return (
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            { 
                heroes.map((hero) => (
                        <HeroListItem 
                            key={ hero.id } 
                            hero={ hero } 
                        />
                    )
                ) 
            }
        </div>
    );
}

export default HeroList;