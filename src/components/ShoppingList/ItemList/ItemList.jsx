import React from 'react'
import { Alert } from 'react-bootstrap';
import ItemTile from '../ItemTile/ItemTile'

import './itemList.css'

const ItemList = ({ items, addItem, deleteItem }) => {
    const mapped = items.map(item => <ItemTile item={item} key={item.id} addItem={addItem} deleteItem={deleteItem} />);
    return (
        <div>
            {mapped.length > 0 ? mapped : (
                <Alert style={{ margin: '0px 15px' }} variant="danger">
                    <Alert.Heading>Hmm...</Alert.Heading>
                    <p>Seems like there you have no items in your shopping list!</p>
                </Alert>
            )}
        </div>
    );
}

export default ItemList;
