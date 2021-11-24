import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LocalStorage from './hooks/localStorage'

import Home from './components/Home/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Recipe from './components/Recipe/Recipe';

const App = () => {
  const [recipes, setRecipes] = LocalStorage("recipes", []);


  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home recipes={recipes} setRecipes={setRecipes} />} />

        <Route path="/create" exact element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/edit/:id" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} />} />

        <Route path="/recipe" exact element={<Recipe recipes={recipes}/>} />
        <Route path="/recipe/:id" element={<Recipe recipes={recipes}/>} />
      </Routes>
    </Router>
  )
}

export default App
