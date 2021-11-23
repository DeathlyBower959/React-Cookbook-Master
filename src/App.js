import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import LocalStorage from './hooks/localStorage'

import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Home from './components/Home/Home';

const App = () => {
  const [recipes, setRecipes] = LocalStorage("recipes", []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/create" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} />} />
      </Routes>
    </Router>
  )
}

export default App
