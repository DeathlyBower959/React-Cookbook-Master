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
        <Route path="/create/:id" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} edit={true} />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </Router>
  )
}

export default App
