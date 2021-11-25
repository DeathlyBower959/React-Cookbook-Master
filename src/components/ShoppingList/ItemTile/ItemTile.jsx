import React from 'react'

import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

import defaultImage from '../../../assets/logo1024.png'
import deleteLogo from '../../../assets/remove.svg'
import minusLogo from '../../../assets/minus.svg'
import plusLogo from '../../../assets/plus.svg'

import './itemTile.css'

const ItemTile = ({ item, addItem, deleteItem }) => {

    const { name, amount, id } = item;

    return (
        <div className="grow">
            <div id={id} className="card" style={{ marginTop: "15px", borderRadius: '15px' }}>
                <div className="row no-gutters">
                    <div className="col-sm-3" style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px', paddingRight: '0px', maxWidth: '100px' }}>
                        <img src={defaultImage} style={{ borderRadius: '10px' }} alt='Not found... :(' width='100%' />
                    </div>
                    <div className="col-sm-10" style={{ paddingLeft: '0px', paddingTop: '3px' }}>
                        <div className="card-body" style={{ paddingBottom: '0px' }}>
                            <div style={{ display: 'flex' }}>
                                <h5 className="card-title" style={{ marginBottom: '10px', marginLeft: '10px' }}>{amount}</h5>
                                <p className="card-text" style={{ marginBottom: '10px', marginLeft: '10px' }}> | {name}</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img width='40px' style={{ cursor: 'pointer', margin: '0px 0px 0px 5px' }} src={plusLogo} onClick={() => addItem(1, name)} />
                                <img width='40px' style={{ cursor: 'pointer', margin: '0px' }} src={amount <= 1 ? deleteLogo : minusLogo} onClick={() => deleteItem(id)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ItemTile;

