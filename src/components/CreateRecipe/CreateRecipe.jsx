import React from 'react'
import { FormText, InputGroup, Form, Button } from 'react-bootstrap'
import { NumericInput } from 'react-numeric-input'
const CreateRecipe = ({ recipes, setRecipes }) => {
    return (
        <Form>
            <Form.Control placeholder="Recipe Name" />
            <Form.Control as="textarea" placeholder="Recipe Description" rows={3} />
            <Form.Control type="file" />
            <Form.Control placeholder='Tags separated by ";"' />
            <Form.Control placeholder='Prep Time (1m, 8h, etc.)' />
            <Form.Control placeholder='Total Time (1m, 8h, etc.)' />
            <Form.Control placeholder='Serving Size (1, 8, etc)' />
            <NumericInput />
        </Form>
    )
}

export default CreateRecipe
