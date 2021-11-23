import React, { useState } from 'react';
import RecipeList from './RecipeList';
import FormControl from 'react-bootstrap/FormControl';

function Search({ recipes, deleteRecipe }) {

    const [searchField, setSearchField] = useState("");

    const filteredRecipes = recipes.filter(
        recipe => {
            return (
                recipe
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            );
        }
    );

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    return (
        <div
            style={{
                position: 'absolute', left: '50%',
                transform: 'translate(-50%)',
                width: "75%",
                marginTop: "30px"
            }}>
            <h1 style={{ textAlign: 'center' }}>The Cookbook</h1>
            <FormControl
                placeholder="Search Recipes"
                aria-label="Search Recipes"
                onChange={handleChange}
            />
            <div
                style={{
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%)',
                    width: "75%"
                }}>
                <RecipeList filteredRecipes={filteredRecipes} deleteRecipe={deleteRecipe}/>
            </div>
        </div>
    );
}

export default Search;