import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export default () => {
    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    // Add a category to the list.
    const addCategory = (category) => {
        if (categories.filter((item) => item.trim().toLowerCase() === category.trim().toLowerCase()).length > 0) {
            return;
        }

        setCategories([ category, ...categories ]);
    };

    return (
        <>
            { /* Title */ }
            <h1>GifExpertApp</h1>

            { /* Input */ }
            <AddCategory 
                addCategory={ addCategory }
            />

            { /* List */ }
            { 
                categories.map((category) => (
                    <GifGrid 
                        key={ category }
                        category={ category }
                    />
                ))
            } 
        </>
    );
}
