import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { listProducts } from '../../redux/actions/productActions';
import { addCart } from '../../redux/actions/cartActions';
import './Products.scss';



const Products = () => {

    const prodList = useSelector(state => state.product.product);

    useEffect(() => { listProducts(); }, []);

    return (
        <div className="Container" key="product" id="product">
            { prodList?.map((p) => (

                <div className="card" key={p._id} id={p._id}>
                    <Link to={`/products/${p._id}`}>
                        {p.InStock > 0 ? (<div className="buy" onClick={() => addCart(p)} ><ShoppingCartOutlined /></div>) : ''}
                        <img src={`/${p.imgURL}`} alt={p.name}></img>
                        <h3>{p.name}</h3>
                        <span className="price">{p.price}€</span>
                        <h4>{p.category}</h4>
                        <div>{p.InStock > 0 ? (<span>In Stock: {p.InStock} </span>) : 'Out of Stock'}</div>

                    </Link>
                </div>)
            )}

        </div>
    )
}
export default Products;


