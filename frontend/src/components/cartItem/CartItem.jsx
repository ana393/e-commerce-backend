import React from 'react';
import { addAnItemCart, removeAnItemCart, removeItemCart } from '../../redux/actions/cartActions';
import { DeleteFilled } from '@ant-design/icons';
import './cartItem.scss';

const CartItem = ({ item }) => {
    return (
        <div className="cart-item" key={item._id}>
            <img src={`/${item.imgURL}`} alt={item.name}></img>
            <span className="name" >{item.name}</span>
            <h4 className="price" > {item.price} €</h4>
            <span className="up-btn" onClick={() => addAnItemCart(item)} >+</span>
            <span className="amount">{item.count}</span>
            <span className="down-btn" onClick={() => removeAnItemCart(item)} >-</span>
            <span className="totalPrice" >{(item.price * item.count).toFixed(2)}</span>
            <button className="remove-btn" onClick={() => removeItemCart(item)}><DeleteFilled /></button>

        </div>
    )
}
export default CartItem;
