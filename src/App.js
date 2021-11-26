import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LocalStorage from './hooks/localStorage'

import Home from './components/Home/Home';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import Recipe from './components/Recipe/Recipe';
import ShopHome from './components/ShoppingList/ShopHome/ShopHome';

import convert from 'convert-units';
import { evalFrac } from './utils/fractions';

const App = () => {
  const [recipes, setRecipes] = LocalStorage("recipes", []);
  const [shopping, setShopping] = LocalStorage("shopping_list", []);

  const [isCrushed, setIsCrushed] = useState(false)
  const [toasts, setToasts] = useState([]);

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

  const updateToasts = (title, errMsg) => {
    let id;
    setToasts(prev => {
      id = prev.length + 1;
      return [...prev, { title, errMsg, id }]
    })

    setTimeout(() => {
      setToasts(prev => {
        return prev.filter(x => x.id !== id)
      })
    }, 9000)
  }

  const updateShopping = (itemToAdd) => {

    const itemToAddName = itemToAdd.name.toLowerCase().split(' ').filter(item => {
      return item.trim()
    }).join(' ')

    const itemFound = shopping.find(item => item.name.toLowerCase().split(' ').join(' ') === itemToAddName)

    if (itemFound !== undefined) {
      try {

        let formatted = Number(convert(evalFrac(itemToAdd.amount)).from(itemToAdd.unit).to(itemFound.unit)) + Number(evalFrac(itemFound.amount))

        if (itemFound.unit !== itemToAdd.unit) formatted = convert(formatted).from(itemFound.unit).toBest()

        itemFound.amount = formatted.val || formatted
        itemFound.unit = formatted.unit || itemFound.unit

        setShopping(prevItems => {
          const newItems = prevItems.filter(item => item.name.toLowerCase().split(' ').join(' ') !== itemToAddName)
          return [...newItems, itemFound]
        })
      }
      catch (err) {
        console.log(err)
        updateToasts('Hmm... There was an error!', err.message)
      }
      return
    }

    setShopping(prevItems => {
      return [...prevItems, itemToAdd]
    })
  }

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home recipes={recipes} setRecipes={setRecipes} isCrushed={isCrushed} />} />

        <Route path="/shopping" element={<ShopHome shopping={shopping} updateShopping={updateShopping} toasts={toasts} setToasts={setToasts} setShopping={setShopping} isCrushed={isCrushed} />} />

        <Route path="/create" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} isCrushed={isCrushed} />} />
        <Route path="/edit/:id" element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} isCrushed={isCrushed} />} />

        <Route path="/recipe" exact element={<Recipe recipes={recipes} isCrushed={isCrushed} />} />
        <Route path="/recipe/:id" element={<Recipe recipes={recipes} updateShopping={updateShopping} isCrushed={isCrushed} />} />
      </Routes>
    </Router>
  )
}

export default App
