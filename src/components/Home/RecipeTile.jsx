import React from 'react'

import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

import './RecipeTile.css'

import defaultImage from '../../assets/logo1024.png'

const RecipeTile = ({ recipe, deleteRecipe}) => {

    const { name = "No Name", image, description = "No Description", tags, id } = recipe;

    const formatted = tags?.join(', ')

    return (
        <div className="grow">

            <div id={id} className="card" style={{ marginTop: "15px", borderRadius: '15px', transition: 'height 1s ease-in-out' }}>
                <div className="row no-gutters">
                    <div className="col-sm-3" style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px', paddingRight: '0px', width: '200px' }}>
                        <NavLink to={`/recipe/${id}`}>
                            <img src={image ?? defaultImage} style={{ borderRadius: '10px' }} className="card-img-top h-100" alt='Not found... :(' />
                        </NavLink>
                    </div>
                    <div className="col-sm-7" style={{ paddingLeft: '0px', paddingTop: '3px' }}>
                        <div className="card-body">
                            <NavLink style={{ color: "#000", textDecoration: 'none' }} to={`/recipe/${id}`}>
                                <h5 className="card-title" style={{ marginBottom: '0px', marginLeft: '10px' }}>{name}</h5>
                            </NavLink>
                            {tags == null ? '' : (<p style={{ color: '#808080', margin: '2px auto 0px 18px' }}>{formatted}</p>)}
                            <hr style={{ margin: '10px auto 10px 10px' }} />
                            <p className="card-text" style={{ marginTop: '5px', marginLeft: '10px' }}>{description}</p>
                            <div>
                                <NavLink to={"/edit/" + id}>
                                    <Button style={{ margin: '5px 5px 0px 5px' }}>Edit</Button>
                                </NavLink>
                                <Button style={{ margin: '5px 5px 0px 5px' }} variant="danger" onClick={() => deleteRecipe(id)}>Delete</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RecipeTile;

