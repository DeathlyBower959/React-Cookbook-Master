import React from 'react'
import RecipeTile from './RecipeTile'

const RecipeList = ({ filteredRecipes, deleteRecipe }) => {
    const filtered = filteredRecipes.map((recipe) => <RecipeTile recipe={recipe} key={recipe.id} deleteRecipe={deleteRecipe} />);
    return (
        <div>
            {filtered}
        </div>
    );
}

export default RecipeList;
