import React from 'react';
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage, PokemonCard } from '../03-examples';

const Layout = () => {
    const { counter, add, subtract } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${ counter }`);

    return (
        <>
            <h1>Pokemon Information</h1>
            <hr/>

            {
                isLoading
                    ? <LoadingMessage />
                    : (
                        <PokemonCard 
                            id={ data.id }
                            name={ data.name }
                            sprites={ [
                                data.sprites.front_default,
                                data.sprites.front_shiny,
                                data.sprites.back_default,
                                data.sprites.back_shiny,
                            ] }
                        />
                    )
            }

            <br />

            <button className='btn btn-primary mt-2' onClick={ (event) => counter <= 1 ? null : subtract() }>Previous</button>
            <button className='btn btn-primary mt-2' onClick={ (event) => add() }>Next</button>
        </>
    );
}

export default Layout;
