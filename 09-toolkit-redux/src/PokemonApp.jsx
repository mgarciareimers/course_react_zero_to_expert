import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';

const PokemonApp = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr/>

            <ul>
                <li>Hello</li>
                <li>Hello</li>
                <li>Hello</li>
            </ul>
        </>
    );
}

export default PokemonApp;