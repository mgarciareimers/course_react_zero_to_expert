import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

const HeroPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [ id ]);

    const onBackButtonClicked = () => {
        navigate(-1);
    }

    if (hero === undefined) {
        return <Navigate to='/marvel' />;
    }

    return (
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className='col-4'>
                <img 
                    src={ `/assets/heroes/${ hero.id }.jpg` } 
                    className='img-thumbnail' 
                    alt={ hero.superhero } 
                />
            </div>

            <div className='col-8'>
                <h3>{ hero.superhero }</h3>

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: </b>{ hero.alter_ego }</li>
                    <li className='list-group-item'><b>Publisher: </b>{ hero.publisher }</li>
                    <li className='list-group-item'><b>First appearance: </b>{ hero.first_appearance }</li>
                </ul>

                <h5 className='mt-3'>Characters:</h5>
                <p>{ hero.characters }</p>

                <button 
                    className='btn btn-outline-primary'
                    onClick={ onBackButtonClicked }
                >
                    Back
                </button>
            </div>
        </div>
    );
}

export default HeroPage;
