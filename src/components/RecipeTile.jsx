import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import defaultImage from '../logo1024.png'

const RecipeTile = ({ recipe, deleteRecipe }) => {

    const { name = "No Name", image, description = "No Description", tags, id } = recipe;

    let formattedImage = image;

    const formatted = tags?.join(', ')

    return (
        <div id={id} className="card" style={{ marginTop: "15px", borderRadius: '15px', transition: 'height 1s ease-in-out' }}>
            <div className="row no-gutters">
                <div className="col-sm-3" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px', paddingRight: '0px', width: '200px' }}>
                    <img src={formattedImage ?? defaultImage} style={{ borderRadius: '10px' }} className="card-img-top h-100" />
                </div>
                <div className="col-sm-7" style={{ paddingLeft: '0px', paddingTop: '3px' }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ marginBottom: '0px' }}>{name}</h5>
                        {tags == null ? '' : (<p style={{ color: '#808080', marginBottom: '0px' }}>{formatted.substring(0, formatted.length - 1)}</p>)}
                        <p className="card-text" style={{ marginTop: '5px' }}>{description}</p>
                        <Button style={{ position: 'absolute', bottom: '0', right: '0', margin: '10px' }} variant="danger" onClick={() => deleteRecipe(id)}>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeTile;

