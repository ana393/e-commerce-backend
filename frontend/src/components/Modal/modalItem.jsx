import React from 'react';
import './modalItem.scss';
const PurchaseItem = ({ item }) => {
    return (
        <div className="purchaseItem" key={item._id}>
            <img src={`/${item.imgURL}`} alt=""></img>
            <span> {item.product.name} ({item.product.category}): {item.quantity} X {item.product.price}€</span>

        </div>
    )
}
export default PurchaseItem;