import axios from 'axios';
import { startLoadingList, setList } from '../pokemonSlice';
import { pokemonApi } from '../../../../api/pokemonAPI';

export default function getPokemons(page = 1, addPage = true, limit = 10) {
    return async (dispatch, getState) => {
        dispatch(startLoadingList());

        // Get pokemons.
        const response = await pokemonApi.get(`/pokemon?limit=${ limit }&offset=${ (page - 1) * limit }`);
        const { data } = response;

        // Set list.
        dispatch(setList({ 
            page: page, 
            count: data.count, 
            list: data.results 
        }));
    };
}