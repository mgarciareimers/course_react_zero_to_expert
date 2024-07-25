import React, { useEffect, useState } from 'react';

import getGifs from '../services/getGifs';

export default (category) => {
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const [ images, setImages ] = useState([]);
    const [ error, setError ] = useState(null);
    
    const getData = async () => {
        const response = await getGifs(category);

        setHasLoaded(true);

        if (response.statusCode !== 200) {
            setImages([]);
            setError(`${ response.title } - ${ response.text }`);
            return;
        }

        setImages(response.data.images);
        setError(null);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        hasLoaded: hasLoaded,
        images: images,
        error: error,
    };
}
