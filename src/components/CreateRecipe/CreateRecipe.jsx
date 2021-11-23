import React, { useState, useRef } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useParams, Link } from "react-router-dom";
import useUnsavedChangesWarning from '../useUnsavedChangesWarning';

import { v4 as uuidv4 } from 'uuid'


const CreateRecipe = ({ recipes, setRecipes }) => {
    const { id } = useParams()
    const [recipeInfo, setRecipeInfo] = useState(id === null ? { id: uuidv4() } : recipes.find(recipe => recipe.id === id) || { id: uuidv4() })
    const [DismissableAlerts, setDismissableAlerts] = useState({
        name: false,
        description: false,
        prep: false,
        total: false,
        servSize: false,
        ingredients: false,
        steps: false
    })

    const ingredientAmount = useRef()
    const ingredientName = useRef()

    const stepDescription = useRef()

    const [setDirty, setPristine] = useUnsavedChangesWarning()

    const validateForm = () => {

        let validated = {
            name: false,
            description: false,
            prep: false,
            total: false,
            servSize: false,
            ingredients: false,
            steps: false
        }

        let all = false

        if (recipeInfo.name && recipeInfo.name !== '') validated.name = true
        if (recipeInfo.description && recipeInfo.description !== '') validated.description = true
        if (recipeInfo.prep && recipeInfo.prep !== '') validated.prep = true
        if (recipeInfo.total && recipeInfo.total !== '') validated.total = true
        if (recipeInfo.servSize && recipeInfo.servSize !== '') validated.servSize = true
        if (recipeInfo.ingredients && recipeInfo.ingredients !== []) validated.ingredients = true
        if (recipeInfo.steps && recipeInfo.steps !== []) validated.steps = true

        if (validated.name && validated.description && validated.prep && validated.total && validated.servSize && validated.ingredients && validated.steps) all = true

        setDismissableAlerts({
            name: !validated.name,
            description: !validated.description,
            prep: !validated.prep,
            namtotale: !validated.total,
            servSize: !validated.servSize,
            ingredients: !validated.ingredients,
            steps: !validated.steps
        })

        return all
    }

    const handleChange = (event, itemName) => {
        if (itemName === "name")
            setRecipeInfo({ ...recipeInfo, name: event.target.value })

        if (itemName === "desc")
            setRecipeInfo({ ...recipeInfo, description: event.target.value })

        if (itemName === "image") {
            if (event.target.files && event.target.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    setRecipeInfo({ ...recipeInfo, image: e.target.result })
                };
                reader.readAsDataURL(event.target.files[0]);
            }
        }

        if (itemName === "tags")
            setRecipeInfo({ ...recipeInfo, tags: event.target.value.split(', ') })

        if (itemName === "prep")
            setRecipeInfo({ ...recipeInfo, prep: event.target.value })

        if (itemName === "total")
            setRecipeInfo({ ...recipeInfo, total: event.target.value })

        if (itemName === "serv")
            setRecipeInfo({ ...recipeInfo, servSize: event.target.value })

        setDirty()
    }

    const addIngredient = () => {
        if (ingredientAmount.current.value === '' ||
            ingredientName.current.value === '') return

        const ingredientToAdd = { amount: ingredientAmount.current.value, name: ingredientName.current.value, id: uuidv4() }
        ingredientAmount.current.value = ''
        ingredientName.current.value = ''


        setRecipeInfo(prevRecipe => {
            if (prevRecipe.ingredients?.some(x => x.id === ingredientToAdd.id)) return prevRecipe

            return {
                ...prevRecipe,
                ingredients: recipeInfo.ingredients?.concat(ingredientToAdd) ?? [ingredientToAdd]
            }
        })

        setDirty()
    }

    const removeIngredient = (event) => {
        setRecipeInfo(prevRecipe => {
            return {
                ...prevRecipe,
                ingredients: prevRecipe.ingredients.filter(ingredient => ingredient.id != event.target.id)
            }
        })

        setDirty()
    }

    const addStep = () => {
        if (stepDescription.current.value === '') return

        const stepToAdd = { description: stepDescription.current.value, id: uuidv4() }
        stepDescription.current.value = ''


        setRecipeInfo(prevRecipe => {
            if (prevRecipe.steps?.some(x => x.id === stepToAdd.id)) return prevRecipe

            return {
                ...prevRecipe,
                steps: recipeInfo.steps?.concat(stepToAdd) ?? [stepToAdd]
            }
        })

        setDirty()
    }

    const removeStep = (event) => {
        setRecipeInfo(prevRecipe => {
            return {
                ...prevRecipe,
                steps: prevRecipe.steps.filter(step => step.id != event.target.id)
            }
        })

        setDirty()
    }


    const handleSubmit = (e) => {
        setPristine()

        const isValidated = validateForm();
        if (!isValidated)
            e.preventDefault()

        if (isValidated) {
            if (id !== null) {
                setRecipes(prevRecipes => {
                    let newRecipes = prevRecipes.filter(recipe => recipe.id !== id)
                    return [
                        ...newRecipes,
                        recipeInfo
                    ]
                })
            } else {

                setRecipes(prevRecipes => {
                    return [
                        ...prevRecipes,
                        recipeInfo
                    ]
                })
            }
        } else {

        }
    }

    const calcStyle = (width = '75%', topMargin = '10px', bottomMargin = '0px', moreStyles = {}) => {
        return {
            ...moreStyles,
            width,
            margin: `${topMargin} auto ${bottomMargin} auto`,
            display: 'block'
        }
    }

    return (
        <Form action='/'>
            <h1 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>{recipeInfo.name || "Recipe Name"}</h1>
            <Form.Control style={calcStyle("30%")} placeholder="Recipe Name" value={recipeInfo.name} onChange={(e) => handleChange(e, 'name')} />
            {DismissableAlerts.name ?
                <div style={calcStyle('50%', '10px', '0px')}>
                    <Alert variant="danger" onClose={() => setDismissableAlerts(prev => {
                        return { ...prev, name: false }
                    })} dismissible>
                        <p>You didn't give this recipe a name!</p>
                    </Alert>
                </div>
                :
                <></>
            }

            <Form.Control style={calcStyle("60%")} as="textarea" placeholder="Recipe Description" rows={3} value={recipeInfo.description} onChange={(e) => handleChange(e, 'desc')} />
            {DismissableAlerts.description ?
                <div style={calcStyle('50%', '10px', '0px')}>
                    <Alert variant="danger" onClose={() => setDismissableAlerts(prev => {
                        return { ...prev, description: false }
                    })} dismissible>
                        <p>Seems like you didn't give this recipe a description!</p>
                    </Alert>
                </div>
                :
                <></>
            }

            <Form.Group style={calcStyle('30%', '10px', '0px')}>
                <div style={{ display: 'flex' }}>
                    {recipeInfo.image == null || recipeInfo.image == undefined ? '' :
                        <button type="button" onClick={(e) => {
                            setRecipeInfo(prevRecipe => {
                                return {
                                    ...prevRecipe,
                                    image: null
                                }
                            })
                        }} style={{ color: 'red', width: '20px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px', marginRight: '5px' }}>X</button>
                    }
                    <Form.Control type="file" accept="image/*" onChange={(e) => handleChange(e, 'image')} />
                    <Form.Control style={{ marginLeft: '10px' }} placeholder='Tags separated by ","' value={recipeInfo.tags?.join(', ') || ''} onChange={(e) => handleChange(e, 'tags')} />
                </div>
            </Form.Group>

            <Form.Group style={calcStyle('45%', '10px', '0px')}>
                <div style={{ display: 'flex' }}>
                    <Form.Control style={{ marginRight: '10px' }} placeholder='Prep Time (1m, 8h, etc.)' value={recipeInfo.prep} onChange={(e) => handleChange(e, 'prep')} />
                    <Form.Control placeholder='Total Time (1m, 8h, etc.)' value={recipeInfo.total} onChange={(e) => handleChange(e, 'total')} />
                    <Form.Control style={{ marginLeft: '10px' }} placeholder='Serving Size (1, 8, etc)' value={recipeInfo.servSize} onChange={(e) => handleChange(e, 'serv')} />
                </div>
                <div style={{ display: 'flex' }}>
                    {DismissableAlerts.prep || DismissableAlerts.total ?
                        <div style={calcStyle('50%', '10px', '0px')}>
                            <Alert style={{ marginRight: '10px' }} variant="danger" onClose={() => setDismissableAlerts(prev => {
                                return { ...prev, prep: false, total: false }
                            })} dismissible>
                                <p>You didn't give this recipe any prep/total time!</p>
                            </Alert>
                        </div>
                        :
                        <></>
                    }
                    {DismissableAlerts.servSize ?
                        <div style={calcStyle('50%', '10px', '0px')}>
                            <Alert style={{ marginLeft: '10px' }} variant="danger" onClose={() => setDismissableAlerts(prev => {
                                return { ...prev, servSize: false }
                            })} dismissible>
                                <p>You didn't give this recipe an serving size!</p>
                            </Alert>
                        </div>
                        :
                        <></>
                    }
                </div>
            </Form.Group>

            <br />

            <Form.Group style={calcStyle('45%', '10px', '0px')}>
                <h2>Ingredients: </h2>
                <div>
                    {
                        recipeInfo.ingredients?.map((ingredient, index) => {
                            return (
                                <div key={index + "ingDiv"} style={{ display: 'flex', marginTop: '20px' }}>
                                    <button type="button" key={index + "ingBut"} onClick={(e) => removeIngredient(e)} id={ingredient.id} variant='danger' style={{ color: 'red', width: '20px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px' }}>X</button>
                                    <p key={index + "ingPar"} style={{ color: 'gray', border: '1px solid #ced4da', padding: '.435em', borderRadius: '.25rem', fontSize: '1rem', margin: '0px auto 0px 10px', display: 'block' }}>{ingredient.amount} | {ingredient.name}</p>
                                </div>
                            )
                        })
                    }

                </div>

                <div style={{ display: 'flex', marginTop: '20px', marginLeft: '20px' }}>
                    <Form.Control ref={ingredientAmount} placeholder='1 Cup' style={{ width: 'auto', maxWidth: '125px', marginRight: '5px' }} />
                    <Form.Control ref={ingredientName} placeholder='Ingredient Name' />
                    <Button variant="success" onClick={addIngredient} style={{ margin: '5px auto 5px 10px', display: 'block' }}>Add</Button>
                </div>
                {DismissableAlerts.ingredients ?
                    <div style={calcStyle('50%', '10px', '0px')}>
                        <Alert style={{ marginLeft: '10px' }} variant="danger" onClose={() => setDismissableAlerts(prev => {
                            return { ...prev, ingredients: false }
                        })} dismissible>
                            <p>You didn't give this recipe any ingredients! These are important you know...</p>
                        </Alert>
                    </div>
                    :
                    <></>
                }
            </Form.Group>

            <Form.Group style={calcStyle('45%', '30px', '0px')}>
                <h2>Steps: </h2>
                <div>
                    {
                        recipeInfo.steps?.map((step, index) => {
                            return (
                                <div key={index + "stepDiv"} style={{ display: 'flex', marginTop: '20px' }}>
                                    <button type="button" key={index + "stepBut"} onClick={(e) => removeStep(e)} id={step.id} variant='danger' style={{ color: 'red', width: '20px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px' }}>X</button>
                                    <div key={index + "stepDiv2"} style={{ color: 'gray', border: '1px solid #ced4da', padding: '.435em', borderRadius: '.25rem', fontSize: '1rem', margin: '0px auto 0px 10px', display: 'block' }}>
                                        <h6 key={index + "stepDivh6"} style={{ marginBottom: '0px' }}>Step {index + 1}</h6>
                                        <p key={index + "stepDivPar"} style={{ margin: '5px 0px 0px 10px' }}>{step.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>


                <div style={{ display: 'flex', marginTop: '20px', marginLeft: '20px' }}>
                    <Form.Control ref={stepDescription} as="textarea" rows={3} placeholder='Combine the flour, salt....' />
                    <Button onClick={addStep} variant="success" style={{ margin: '5px auto 5px 10px', display: 'block' }}>Add</Button>
                </div>
                {DismissableAlerts.steps ?
                    <div style={calcStyle('50%', '10px', '0px')}>
                        <Alert style={{ marginLeft: '10px' }} variant="danger" onClose={() => setDismissableAlerts(prev => {
                            return { ...prev, steps: false }
                        })} dismissible>
                            <p>You didn't give this recipe any steps! This is important too...</p>
                        </Alert>
                    </div>
                    :
                    <></>
                }
            </Form.Group>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ marginTop: '10px' }}>
                    <Button type='submit' style={{ marginRight: '5px' }} variant="primary" onClick={(e) => handleSubmit(e)}>{id === null || id === undefined ? "Create" : "Edit"}</Button>
                    <Link to="/">
                        <Button variant="danger" style={{ marginLeft: '5px' }}>Cancel</Button>
                    </Link>
                </div>
            </div>
        </Form>
    )

}

export default CreateRecipe
