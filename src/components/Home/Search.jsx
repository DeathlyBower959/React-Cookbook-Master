import React, { useEffect, useState } from 'react';
import RecipeList from './RecipeList';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom'
import { FloatingLabel, Form } from 'react-bootstrap';


function Search({ recipes, deleteRecipe, isCrushed }) {

    const [searchField, setSearchField] = useState("");
    const [tagField, setTagField] = useState("none");


    const filteredRecipes = recipes.filter(
        recipe => {
            return (
                recipe
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase()) &&
                (tagField === 'none' ? true : recipe.tags.includes(tagField))
            );
        }
    );

    const handleChange = (e, type) => {
        if (type === 'search')
            setSearchField(e.target.value);
        else if (type === 'tag')
            setTagField(e.target.value)
    };

    const getTags = () => {
        let tags = []
        recipes.forEach(recipe => {
            recipe.tags.forEach(tag => {
                if (!tags.includes(tag)) tags.push(tag)
            })
        })

        return tags;
    }

    const tags = getTags();
    const tagOptions = tags.map((tag, index) => <option key={index} value={tag}>{tag}</option>)

    return (
        <div className="absolute-center-75">

            <div style={{
                width: '100%',
                margin: `10px auto 10px auto`,
                display: 'flex'
            }}>

                <FormControl
                    placeholder="Search Recipes"
                    aria-label="Search Recipes"
                    onChange={(e) => handleChange(e, 'search')}
                />
                {isCrushed ? '' : (
                    <Form.Select value={tagField} onChange={(e) => handleChange(e, 'tag')} style={{ marginLeft: '10px', width: '20%' }}>
                        <option value={"none"}>Choose...</option>
                        {tagOptions}
                    </Form.Select>
                )}
                <Link to='/create'>
                    <Button style={{ marginLeft: '10px' }}>New</Button>
                </Link>
            </div>
            {!isCrushed ? '' : (
                <div style={{
                    width: '100%',
                    margin: `10px auto 10px auto`,
                    display: 'flex'
                }}>
                    <Form.Select value={tagField} onChange={(e) => handleChange(e, 'tag')} style={{ width: '40%' }}>
                        <option value={"none"}>Choose...</option>
                        {tagOptions}
                    </Form.Select>
                </div>

            )}


            <div className="absolute-center-75">
                <RecipeList filteredRecipes={filteredRecipes} deleteRecipe={deleteRecipe} isCrushed={isCrushed}/>
            </div>
        </div>
    );
}

export default Search;