import React, { useRef, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Button, Form, Toast } from 'react-bootstrap'

import red from '../../../assets/red.svg'

import { v4 as uuidv4 } from 'uuid'

import './shopHome.css'
import { Link } from 'react-router-dom'

import convert from 'convert-units';

const ShopHome = ({ shopping, setShopping, isCrushed }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        addItem()
    }

    const amountRef = useRef()
    const unitRef = useRef()
    const nameRef = useRef()


    const [toasts, setToasts] = useState([]);

    const updateShopping = (itemToAdd) => {

        const itemToAddName = itemToAdd.name.toLowerCase().split(' ').filter(item => {
            return item.trim()
        }).join(' ')

        const itemFound = shopping.find(item => item.name.toLowerCase().split(' ').join(' ') === itemToAddName)

        if (itemFound !== undefined) {
            try {
                let formatted = Number(convert(itemToAdd.amount).from(itemToAdd.unit).to(itemFound.unit)) + Number(itemFound.amount)

                if (itemFound.unit !== itemToAdd.unit) formatted = convert(formatted).from(itemFound.unit).toBest()

                itemFound.amount = formatted.val || formatted
                itemFound.unit = formatted.unit || itemFound.unit

                setShopping(prevItems => {
                    const newItems = prevItems.filter(item => item.name.toLowerCase().split(' ').join(' ') !== itemToAddName)
                    return [...newItems, itemFound]
                })
            }
            catch (err) {
                console.log(err)
                updateToasts('Hmm... There was an error!', err.message)
            }
            return
        }

        setShopping(prevItems => {
            return [...prevItems, itemToAdd]
        })
    }

    const updateToasts = (title, errMsg) => {
        let id;
        setToasts(prev => {
            id = prev.length + 1;
            return [...prev, { title, errMsg, id }]
        })

        setTimeout(() => {
            setToasts(prev => {
                return prev.filter(x => x.id != id)
            })
        }, 9000)
    }

    const addItem = (_amount, _name, _unit) => {
        const amount = amountRef.current.value || (_amount ?? '')
        const unit = unitRef.current.value == 'none' ? (_unit ?? '') : unitRef.current.value
        const name = nameRef.current.value || (_name ?? '')

        if (amount === '' || name === '' || unit === '') return

        updateShopping({ name, amount, unit, id: uuidv4() })

        amountRef.current.value = ''
        nameRef.current.value = ''
    }

    const deleteItem = (id) => {
        let itemFound = shopping.find(item => item.id === id)

        if (itemFound !== undefined) {
            if (itemFound.amount > 1) {
                itemFound.amount -= 1
                setShopping(prevItems => {
                    const index = prevItems.indexOf(itemFound)

                    let newItems = prevItems

                    newItems[index] = itemFound
                    return [...newItems]
                })
            } else if (itemFound.amount >= 0.1) {
                itemFound.amount -= 0.1
                setShopping(prevItems => {
                    const index = prevItems.indexOf(itemFound)

                    let newItems = prevItems

                    newItems[index] = itemFound
                    return [...newItems]
                })
            } else {
                setShopping(prevItems => {
                    return prevItems.filter(item => item.id !== id)
                })
            }
        }
    }

    return (
        <>
            <div className='centerDiv'>
                <h1 style={{ margin: '20px' }}>My Shopping List</h1>
                <hr />
                <div style={{ display: 'flex' }}>
                    <div className='addItemDiv'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group style={{ margin: '10px' }}>
                                <div style={{ display: (isCrushed ? 'block' : 'flex') }}>
                                    <Form.Control ref={amountRef} style={{ margin: (isCrushed ? 'auto auto 5px auto' : 'auto 5px auto auto') }} placeholder="Amount" />
                                    <Form.Select ref={unitRef} style={{ marginRight: '5px' }} >
                                        <option value='none'>Choose...</option>
                                        <hr />
                                        <hr />
                                        <option value='tsp'>tsp</option>
                                        <option value='Tbs'>tbsp</option>
                                        <option value='fl-oz'>fl-oz</option>
                                        <option value='cup'>cup</option>
                                        <option value='pnt'>pint</option>
                                        <option value='qt'>quart</option>
                                        <option value='gal'>gallon</option>
                                        <option value='ml'>ml</option>
                                        <option value='l'>L</option>
                                        <option value='dl'>dl</option>
                                        <hr />
                                        <hr />
                                        <option value='lb'>lb</option>
                                        <option value='oz'>oz</option>
                                        <option value='mg'>mg</option>
                                        <option value='g'>g</option>
                                        <option value='kg'>kg</option>
                                    </Form.Select>
                                </div>
                                <div style={{ display: (isCrushed ? 'block' : 'flex') }}>
                                    <Form.Control ref={nameRef} style={{ margin: '5px 0 0 0' }} placeholder="Ingredient Name" />
                                    <Button type='submit' style={{ margin: (isCrushed ? '5px auto auto auto' : '5px auto auto 5px') }}>Add</Button>
                                </div>
                            </Form.Group>
                        </Form>

                        <Link to="/">
                            <Button style={{ position: 'absolute', bottom: '10px', left: '10px' }} variant="secondary">Back</Button>
                        </Link>
                    </div>

                    <div className='separator' />

                    <div className='itemListDiv'>
                        <ItemList items={shopping} isCrushed={isCrushed} addItem={addItem} deleteItem={deleteItem}></ItemList>
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: '0', right: '0', margin: '0px 15px 15px 0px' }}>
                {
                    toasts.map(toast => {
                        return (
                            <Toast show={true} style={{ marginTop: '10px' }} onClose={() => setToasts(prev => prev.filter(x => x.id != toast.id))}>
                                <Toast.Header>
                                    <img
                                        src={red}
                                        width='15px'
                                        className="rounded me-2"
                                        alt=""
                                    />
                                    <strong className="me-auto">{toast.title}</strong>
                                </Toast.Header>
                                <Toast.Body>{toast.errMsg}</Toast.Body>
                            </Toast>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopHome
