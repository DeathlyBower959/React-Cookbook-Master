import React, { useState } from 'react'

import './Recipe.css'
import '../../css/Globals.css'

import { Alert, Button } from 'react-bootstrap';

import { Link, useParams } from "react-router-dom";

import defaultImage from '../../assets/logo1024.png'

import { parseFormat } from '../../utils/time';


const Recipe = ({ recipes, isCrushed, updateShopping }) => {
    const { id } = useParams()

    const recipeInfo = recipes.find(recipe => recipe.id === id)

    const [ingredients, setIngredients] = useState([])

    if (recipeInfo === null || recipeInfo === undefined) {
        return (
            <div className="absolute-center">
                <Alert variant="danger">
                    <Alert.Heading>Sorry!</Alert.Heading>
                    <p>Im sorry, I can't find that recipe... <br />Head back to the homepage and try again!</p>
                </Alert>
                <Link to="/">
                    <Button>Go Home</Button>
                </Link>
            </div>
        )
    }

    const ingredientSelected = (event, ingredient) => {
        if (event.target.checked) {
            setIngredients(prev => {
                return [...prev, ingredient]
            })
        } else {
            setIngredients(prev => {
                return prev.filter(x => x !== ingredient)
            })
        }
    }

    const addAllIngredientsToList = () => {
        if (ingredients.length === 0) {
            recipeInfo.ingredients.forEach(ing => updateShopping(ing))
        } else {
            ingredients.forEach(ing => updateShopping(ing))
        }
    }



    return (
        <div>
            <h1 style={{ textAlign: 'left', margin: '20px 20px auto 20px' }}>{recipeInfo.name || "Recipe Name"}</h1>
            <p style={{ textAlign: 'left', margin: '0px 20px 20px 20px' }}>{recipeInfo.description}</p>

            <div style={{ display: 'inline-block' }}>
                <img width='300px' src={recipeInfo.image ?? defaultImage} style={{ border: '2px solid #ced4da', borderRadius: '20px', margin: ' auto 15px 20px 20px' }} alt='Not found... :(' />
                <div style={{
                    border: '2px solid #ced4da', borderRadius: '15px', padding: '20px',
                    display: 'inline-block'
                }}>
                    <p><strong>Prep Time:</strong> {parseFormat(recipeInfo.prep.days, recipeInfo.prep.hours, recipeInfo.prep.minutes)}</p>
                    <p><strong>Cook Time:</strong> {parseFormat(recipeInfo.cook.days, recipeInfo.cook.hours, recipeInfo.cook.minutes)}</p>
                    <p><strong>Total Time:</strong> {parseFormat(recipeInfo.prep.days + recipeInfo.cook.days, recipeInfo.prep.hours + recipeInfo.cook.hours, recipeInfo.prep.minutes + recipeInfo.cook.minutes)}</p>
                    <p><strong>Yields:</strong> {recipeInfo.servSize} servings</p>
                </div>
            </div>



            <div style={{
                margin: `20px auto 20px 30px`,
            }}>
                <h2>Ingredients: </h2>
                <div style={{ marginLeft: '20px' }}>
                    {
                        recipeInfo.ingredients?.map((ingredient, index) => {
                            return (
                                <div key={index + "ingDiv"} style={{ display: 'flex', marginTop: '20px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                        <input type="checkbox" className="form-check-input" style={{ padding: '0px' }} onChange={(e) => ingredientSelected(e, ingredient)} />
                                    </span>
                                    <p key={index + "ingPar"} className="gray-border" style={{ fontSize: '1rem', margin: '0px auto 0px 10px', display: 'block' }}>{ingredient.amount} {ingredient.unit} | {ingredient.name}</p>
                                </div>
                            )
                        })
                    }

                    <Button variant="outline-primary" style={{ margin: '15px' }} onClick={addAllIngredientsToList}>Add {ingredients.length === 0 ? 'All' : `${ingredients.length} `}Ingredient{ingredients.length === 0 || ingredients.length > 1 ? 's' : ''} To Shopping List</Button>

                </div>

            </div>

            <div style={{
                margin: `20px auto 20px 30px`,
            }}>
                <h2>Steps: </h2>
                <div style={{ marginLeft: '20px' }}>
                    {
                        recipeInfo.steps?.map((step, index) => {
                            return (
                                <div key={index + "stepDiv"} style={{ display: 'flex', marginTop: '15px', maxWidth: '50%' }}>
                                    <div key={index + "stepDiv2"} className="gray-border" style={{ fontSize: '1rem', margin: '0px auto 0px 10px', display: 'block' }}>
                                        <h6 key={index + "stepDivh6"} style={{ color: "#6a7076", marginBottom: '0px' }}>Step {index + 1}</h6>
                                        <p key={index + "stepDivPar"} style={{ margin: '5px 0px 0px 10px' }}>{step.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
            <Link to='/'>
                <Button variant='secondary' style={{ marginLeft: '10px' }}>Back</Button>
            </Link>
            <br />
            <br />
        </div>
    )
}

export default Recipe
