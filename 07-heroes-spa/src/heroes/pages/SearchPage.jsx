import React from 'react';
import queryString from 'query-string';

import useForm from '../../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../helpers';

import { HeroListItem } from '../components';

const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const { searchText, onInputChanged } = useForm({
        searchText: q
    });

    const heroes = getHeroesByName(q);

    const onSearchClicked = (event) => {
        event.preventDefault();

        navigate(`?q=${ searchText.trim().toLowerCase() }`);
    }

    return (
        <>
            <h1>SearchPage</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search</h4>
                    <hr />

                    <form onSubmit={ onSearchClicked }>
                        <input 
                            type='text'
                            placeholder='Search a hero'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={ searchText }
                            onChange={ onInputChanged }
                        />

                        <button className='btn btn-outline-primary mt-4'>
                            Search
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4>Results</h4>
                    <hr />

                    {
                        q.length <= 0
                            ? (
                                <div className='alert alert-primary animate__animated animate__fadeIn'>
                                    Search a hero
                                </div>
                            )
                            : heroes.length <= 0
                                ? (
                                    <div className='alert alert-danger animate__animated animate__fadeIn'>
                                        No hero with <b>{ q.length <= 0 ? '\"\"' : q }</b>
                                    </div>
                                )
                                : <></>
                    }

                    { /* <HeroListItem /> */ }
                    {
                        heroes.map((hero) => <HeroListItem key={ hero.id } hero={ hero } />)
                    }
                </div>
            </div>
        </>
    );
}

export default SearchPage;
