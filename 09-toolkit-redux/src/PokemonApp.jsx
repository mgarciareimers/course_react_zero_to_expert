import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
    const limit = 10;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons(1, true, limit));
    }, []);

    const { isLoading, list, count, page } = useSelector((state) => state.pokemon);

    const onBackButtonClicked = () => {
        if (page <= 1) {
            return;
        }

        dispatch(getPokemons(page - 1, false, limit));
    }

    const onNextButtonClicked = () => {
        if (page >= Math.ceil(count / limit)) {
            return;
        }

        dispatch(getPokemons(page + 1, true, limit));
    }

    return (
        <>
            <h1>PokemonApp</h1>
            <hr/>

            <span>Loading: { isLoading ? 'True' : 'False' }</span>
            <span>Page: { page }/{ Math.ceil(count / limit) }</span>

            <ul>
                { list.map((element) => {
                    return (
                        <li key={ element.name }>{ element.name }</li>
                    );
                })}
            </ul>

            <button disabled={ isLoading } onClick={ onBackButtonClicked }>Back</button>
            <button disabled={ isLoading } onClick={ onNextButtonClicked }>Next</button>
        </>
    );
}

export default PokemonApp;