import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

import '../../css/Globals.css'

import Search from './Search';

import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import useLocalStorage from '../../hooks/localStorage';

function Home({ recipes, setRecipes }) {

    const [editName, setEditName] = useState(false)
    const [name, setName] = useLocalStorage('cookbook_name', 'The Cookbook')

    const [modalTitle, setModalTitle] = useState('Hmm...')

    const [show, setShow] = useState(false)

    let gId = null;
    let recipeInfo;
    const deleteRecipe = (id) => {
        gId = id
        recipeInfo = recipes.find(recipe => recipe.id == gId)
        setModalTitle(recipeInfo?.name || 'Hmm...')
        setShow(true)
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
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Are you sure you want to discard ${gId == null || gId == undefined ? 'this recipe' : 'your changes'}?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setRecipes(recipes.filter(recipe => recipe.id !== gId))}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

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
