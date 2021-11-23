import React from 'react'

import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import defaultImage from '../../logo1024.png'

const RecipeTile = ({ recipe, deleteRecipe }) => {

    const { name = "No Name", image, description = "No Description", tags, id } = recipe;

    const formatted = tags?.join(', ')

    console.log(image)

    return (
        <div id={id} className="card" style={{ marginTop: "15px", borderRadius: '15px', transition: 'height 1s ease-in-out' }}>
            <div className="row no-gutters">
                <div className="col-sm-3" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px', paddingRight: '0px', width: '200px' }}>
                    <img src={image ?? defaultImage} style={{ borderRadius: '10px' }} className="card-img-top h-100" alt='Not found... :(' />
                </div>
                <div className="col-sm-7" style={{ paddingLeft: '0px', paddingTop: '3px' }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ marginBottom: '0px' }}>{name}</h5>
                        {tags == null ? '' : (<p style={{ color: '#808080', marginBottom: '0px' }}>{formatted}</p>)}
                        <p className="card-text" style={{ marginTop: '5px' }}>{description}</p>
                        <Link to={"/create/" + id}>
                            <Button style={{ position: 'absolute', bottom: '0', right: '80px', margin: '10px' }}>Edit</Button>
                        </Link>
                        <Button style={{ position: 'absolute', bottom: '0', right: '0', margin: '10px' }} variant="danger" onClick={() => deleteRecipe(id)}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeTile;

