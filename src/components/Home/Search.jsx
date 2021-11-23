import React, { useState } from 'react';
import RecipeList from './RecipeList';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'


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
                marginTop: "15px"
            }}>

            <div style={{
                width: '100%',
                margin: `10px auto 10px auto`,
                display: 'flex'
            }}>

                <FormControl
                    placeholder="Search Recipes"
                    aria-label="Search Recipes"
                    onChange={handleChange}
                />
                <Link to='/create'>
                    <Button style={{ marginLeft: '10px' }}>New</Button>
                </Link>
            </div>


            <div
                style={{
                    position: 'absolute', left: '50%',
                    transform: 'translate(-50%)',
                    width: "75%",
                    marginTop: '10px'
                }}>
                <RecipeList filteredRecipes={filteredRecipes} deleteRecipe={deleteRecipe} />
            </div>
        </div>
    );
}

export default Search;