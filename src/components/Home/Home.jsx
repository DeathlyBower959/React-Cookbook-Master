import { useState } from 'react';
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

import logo from '../../assets/logo1024.png'

function Home({ recipes, setRecipes, isCrushed }) {

    const [editName, setEditName] = useState(false)
    const [name, setName] = useLocalStorage('cookbook_name', 'The Cookbook')

    const [modalTitle, setModalTitle] = useState('Hmm...')

    const [show, setShow] = useState(false)
    const [globalID, setGlobalID] = useState()

    let recipeInfo;
    const deleteRecipe = (id) => {
        setGlobalID(id)
        recipeInfo = recipes.find(recipe => recipe.id === globalID)
        setModalTitle(recipeInfo?.name || 'Hmm...')
        setShow(true)
    }



    const renderTooltip = props => (
        <Tooltip {...props}>Double click me to rename!</Tooltip>
    );

    const noRecipeView = (
        <div style={{ backgroundColor: 'white', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', overflow: 'auto' }}>
            <div className="absolute-center">
                <Alert variant="danger">
                    <Alert.Heading>Hmm...</Alert.Heading>
                    Seems like you have no recipes! Try creating one below...
                </Alert>
                <Link to="/create">
                    <Button>New Recipe</Button>
                </Link>
            </div >
        </div>
    )

    const recipeList = (
        <div style={{ backgroundColor: 'white', position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', overflow: 'auto' }}>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{`Are you sure you want to discard ${globalID === null || globalID === undefined ? 'this recipe' : 'your changes'}?`}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setRecipes(prev => {
                        setShow(false)
                        return prev.filter(recipe => recipe.id !== globalID
                        )
                    })}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <div
                style={{
                    width: '75%',
                    margin: `0px auto 10px auto`,
                    display: 'block'
                }}>

                <div style={{ display: 'flex', paddingTop: "30px", justifyContent: 'center', alignItems: 'center' }}>
                    <img src={logo} width='64px' height='64px' style={{ transform: 'rotate(-20deg)' }} alt='Not found... :(' />
                    <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                        <h1 hidden={editName} style={{ textAlign: 'center' }} onDoubleClick={() => {
                            setEditName(true)
                        }}>{name}</h1>
                    </OverlayTrigger>

                    <Form.Control hidden={!editName} placeholder="Recipe Name" style={{ width: '40%' }} onChange={(e) => setName(e.target.value?.length > 0 ? e.target.value : 'The Cookbook')} onBlur={() => {
                        setEditName(false)
                    }} />
                    <img src={logo} width='64px' height='64px' style={{ transform: 'rotate(20deg)' }} alt='Not found... :(' />
                </div>
            </div>

            <Search deleteRecipe={deleteRecipe} recipes={recipes} isCrushed={isCrushed}></Search>

            <Link to="/shopping">
                <Button style={{ position: 'fixed', bottom: '10px', left: '10px' }} variant="primary">Shopping List</Button>
            </Link>

        </div>
    )

    return (
        recipes.length === 0 ? noRecipeView : recipeList
    );
}

export default Home
