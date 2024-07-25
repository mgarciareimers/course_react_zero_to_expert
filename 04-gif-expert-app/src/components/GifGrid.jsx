import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';

export default ({ category }) => {
    const { hasLoaded, images, error } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>


            { 
                !hasLoaded 
                ? (
                    <p>
                        Cargando...
                    </p>
                )
                : (
                    error === null
                    ? (
                        <div className='card-grid'>
                            { 
                                images.map((image) => (
                                    <GifGridItem
                                        key={ image.id }
                                        { ...image } 
                                    />
                                ))
                            }
                        </div>
                    )
                    : (
                        <p>
                            { error }
                        </p>
                    )
                )
            }
        </>
    );
};
