import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LocalStorage from './hooks/localStorage'

import Home from './components/Home/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Recipe from './components/Recipe/Recipe';
import ShopHome from './components/ShoppingList/ShopHome/ShopHome';

const App = () => {
  const [recipes, setRecipes] = LocalStorage("recipes", []);
  const [shopping, setShopping] = LocalStorage("shopping_list", []);

  const [isCrushed, setIsCrushed] = useState(false)

  useEffect(() => {
    window.addEventListener("resize", resize.bind(this));
  }, [])

  const resize = () => {
    if (window.innerWidth < 927) {
      setIsCrushed(true)
    } else {
      setIsCrushed(false)
    }
  }

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home recipes={recipes} setRecipes={setRecipes} isCrushed={isCrushed} />} />

        <Route path="/shopping" element={<ShopHome shopping={shopping} setShopping={setShopping} isCrushed={isCrushed} />} />

        <Route path="/create" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} isCrushed={isCrushed} />} />
        <Route path="/edit/:id" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} isCrushed={isCrushed} />} />

        <Route path="/recipe" exact element={<Recipe recipes={recipes} isCrushed={isCrushed} />} />
        <Route path="/recipe/:id" element={<Recipe recipes={recipes} isCrushed={isCrushed} />} />
      </Routes>
    </Router>
  )
}

export default App
