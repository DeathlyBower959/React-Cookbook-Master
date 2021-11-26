import React from 'react'
import { Alert } from 'react-bootstrap';
import RecipeTile from './RecipeTile'

const RecipeList = ({ filteredRecipes, deleteRecipe }) => {
    const filtered = filteredRecipes.map((recipe) => <RecipeTile recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} />);
    return (
        <div>
            {filtered.length > 0 ? filtered : (
                <Alert style={{ marginTop: '15px' }} variant="danger">
                    <Alert.Heading>Hmm...</Alert.Heading>
                    <p>Seems like there are no recipes with that name/tag!</p>
                </Alert>
            )}
            <div style={{ marginTop: '20px' }} />

        </div>
    );
}

export default RecipeList;
