import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Products.scss';
import { listProducts } from '../../redux/actions/productActions';
import { addCart } from '../../redux/actions/cartActions';

const Products = () => {
    const product = useSelector(state => state.product.product);
    const cartItems = useSelector(state => state.cart.cart);
    const totalItems = cartItems.reduce((a, c) => a + c.count, 0);
    useEffect(() => { listProducts(); }, []);
    return (
        <div className="Container" key="product" id="product">
            { product.map((p) => (

                <div className="card" key={p._id} id={p._id}>
                    <Link to={`/products/${p._id}`}>
                        <img src="" alt=""></img>
                        <h4>{p.name}</h4>
                        <span>{p.price}€</span>
                        <div>{p.InStock > 0 ? (<span>In Stock: {p.InStock} </span>) : 'Out of Stock'}</div>
                        <button onClick={() => addCart(p)} className="add" disabled={p.InStock === 0}> Add To Cart</button>

                    </Link>
                </div>)
            )}
            <span>{totalItems}</span>
        </div>
    )
}

export default Products;

