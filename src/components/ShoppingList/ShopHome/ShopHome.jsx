import React, { useRef } from 'react'
import ItemList from '../ItemList/ItemList'
import { Button, Form } from 'react-bootstrap'

import { v4 as uuidv4 } from 'uuid'

import './shopHome.css'

const ShopHome = ({ shopping, setShopping, isCrushed }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const amountRef = useRef()
    const nameRef = useRef()

    const updateShopping = (itemToAdd) => {

        const itemToAddName = itemToAdd.name.toLowerCase().split(' ').filter(item => {
            return item.trim()
        }).join(' ')

        const itemFound = shopping.find(item => item.name.toLowerCase().split(' ').join(' ') === itemToAddName)

        if (itemFound !== undefined) {
            itemFound.amount = Number(itemFound.amount) + Number(itemToAdd.amount)

            setShopping(prevItems => {
                const newItems = prevItems.filter(item => item.name.toLowerCase().split(' ').join(' ') !== itemToAddName)
                return [...newItems, itemFound]
            })
            return
        }

        setShopping(prevItems => {
            return [...prevItems, itemToAdd]
        })
    }

    const addItem = (_amount, _name) => {
        const amount = amountRef.current.value || (_amount ?? '')
        const name = nameRef.current.value || (_name ?? '')

        if (amount === '' || name === '') return

        updateShopping({ name, amount, id: uuidv4() })

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
            } else {
                setShopping(prevItems => {
                    return prevItems.filter(item => item.id !== id)
                })
            }
        }
    }

    return (
        <div className='centerDiv'>
            <h1 style={{ margin: '20px' }}>My Shopping List</h1>
            <hr />
            <div style={{ display: 'flex' }}>
                <div className='addItemDiv'>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group style={{ display: (isCrushed ? 'block' : 'flex'), margin: '10px' }}>
                            <Form.Control ref={amountRef} style={{ margin: (isCrushed ? 'auto auto 5px auto' : 'auto 5px auto auto') }} placeholder="Amount" />
                            <Form.Control ref={nameRef} placeholder="Ingredient Name" />
                            <Button style={{ margin: (isCrushed ? '8px auto auto auto' : 'auto auto auto 8px') }} onClick={addItem}>Add</Button>
                        </Form.Group>
                    </Form>
                </div>

                <div className='separator' />

                <div className='itemListDiv'>
                    <ItemList items={shopping} isCrushed={isCrushed} addItem={addItem} deleteItem={deleteItem}></ItemList>
                </div>
            </div>
        </div>
    )
}

export default ShopHome
