import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

    // Add a category to the list.
    const addCategory = (category) => {
        setCategories([ category, ...categories ]);
    };

    return (
        <>
            { /* Title */ }
            <h1>GifExpertApp</h1>

            { /* Input */ }
            <AddCategory 
                addCategory= { addCategory }
            />

            { /* List */ }
            <ol>
               { categories.map((category) => {
                return <li key={ category }>{ category }</li>
               })} 
            </ol>
        </>
    );
}

export default GifExpertApp;