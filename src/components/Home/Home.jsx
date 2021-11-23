import { useEffect, useState } from 'react'
import Base64 from 'Base64'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'



import Search from './Search';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Home({ recipes, setRecipes }) {

    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id != id))
    }

    const noRecipeView = (
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
            <Alert variant="danger">
                <Alert.Heading>Hmm...</Alert.Heading>
                Seems like you have no recipes! Try creating one below...
            </Alert>
            <Link to="/create">

                <Button>New Recipe</Button>
            </Link>
        </div >
    )

    const recipeList = (
        <Search deleteRecipe={deleteRecipe} recipes={recipes}></Search>
    )

    return (
        recipes.length === 0 ? noRecipeView : recipeList
    );
}

export default Home
