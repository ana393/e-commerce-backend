import React from 'react'

const PurchaseItem = ({ item }) => {
    return (
        <div className="item" key={item._id}>
            <img src="" alt=""></img>
            <p> {item.product.name} ({item.product.category}): {item.quantity} X {item.product.price}€</p>

        </div>
    )
}
export default PurchaseItem;