import React from 'react';
import { Link } from 'react-router-dom';

const HeroListItem = ({ hero }) => {
    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img src={ `/assets/heroes/${ hero.id }.jpg` } className='card-img' alt={ hero.superhero } />
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{ hero.superhero }</h5>
                            <p className='card-text'>{ hero.alter_ego }</p>
                            
                            {
                                hero.characters !== hero.alter_ego && (
                                    <p className='card-text'>{ hero.characters }</p>
                                )
                            }

                            <p className='card-text'>
                                <small className='text-muted'>{ hero.first_appearance }</small>
                            </p>

                            <Link
                                to={ `/hero/${ hero.id }` }
                            >
                                More...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroListItem;