import { useState } from 'react';
import { Link } from 'react-router-dom'

import '../../css/Globals.css'

import Search from './Search';

import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import useLocalStorage from '../../hooks/localStorage';

function Home({ recipes, setRecipes }) {

    const [editName, setEditName] = useState(false)
    const [name, setName] = useLocalStorage('cookbook_name', 'The Cookbook')

    const deleteRecipe = (id) => {
        if (window.confirm("Are you sure you want to delete this recipe?"))
            setRecipes(recipes.filter(recipe => recipe.id !== id))
    }

      
    const renderTooltip = props => (
        <Tooltip {...props}>Double click me to rename!</Tooltip>
    );

    const noRecipeView = (
        <div className="absolute-center">
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
        <>
            <div
                style={{
                    width: '75%',
                    margin: `10px auto 10px auto`,
                    display: 'block'
                }}>

                <div style={{ display: 'flex', marginTop: "30px", justifyContent: 'center', alignItems: 'center' }}>
                    <img src='./logo1024.png' width='64px' height='64px' style={{ transform: 'rotate(-20deg)' }} alt='Not found... :(' />
                    <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                        <h1 hidden={editName} style={{ textAlign: 'center' }} onDoubleClick={() => {
                            setEditName(true)
                        }}>{name}</h1>
                    </OverlayTrigger>

                    <Form.Control hidden={!editName} placeholder="Recipe Name" style={{ width: '40%' }} onChange={(e) => setName(e.target.value?.length > 0 ? e.target.value : 'The Cookbook')} onBlur={() => {
                        setEditName(false)
                    }} />
                    <img src='./logo1024.png' width='64px' height='64px' style={{ transform: 'rotate(20deg)' }} alt='Not found... :(' />
                </div>
            </div>

            <Search deleteRecipe={deleteRecipe} recipes={recipes}></Search>

        </>
    )

    return (
        recipes.length === 0 ? noRecipeView : recipeList
    );
}

export default Home
