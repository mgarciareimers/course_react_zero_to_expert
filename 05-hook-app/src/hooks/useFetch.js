import { useEffect, useState } from 'react';

const localCache = {};

export default (url) => {
    const [ state, setState ] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [ url ]);

    const initState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }
    
    const getFetch = async () => {
        // Load data from cache.
        if (localCache[url] !== undefined && localCache[url] !== null) {
            setState({
                data: localCache[url], 
                isLoading: false,
                hasError: false,
                error: null
            });
            
            return;
        }

        // Load data from API.
        initState();

        const response = await fetch(url);

        // Sleep 2 seconds.
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (!response.ok) {
            setState({
                data: null, 
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            });

            return;
        }

        const data  = await response.json();

        setState({
            data: data, 
            isLoading: false,
            hasError: false,
            error: null
        });

        // Save data into cache.
        localCache[url] = data;
    };

    return state;
}
