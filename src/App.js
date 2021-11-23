import { useEffect, useState } from 'react'
import Base64 from 'Base64'
import { v4 as uuidv4 } from 'uuid';

import LocalStorage from './hooks/localStorage'

import Search from './components/Search';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function App() {
  const [recipes, setRecipes] = LocalStorage("recipes", []);

  const createRecipe = (name, image, description, tags) => {
    const id = uuidv4();
    setRecipes([...recipes, { name, image, description, tags, id }])
  }

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id != id))
  }

  const noRecipe = (
    <div
      style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
      <Alert variant="danger">
        <Alert.Heading>Hmm...</Alert.Heading>
        Seems like you have no recipes! Try creating one below...
      </Alert>
      <Button onClick={createRecipe}>New Recipe</Button>
    </div >
  )

  const recipeList = (
    <Search deleteRecipe={deleteRecipe} createRecipe={createRecipe} recipes={recipes}></Search>
  )

  return (
    recipes.length === 0 ? noRecipe : recipeList
  );
}

export default App;
