import React from 'react';
import { Link } from 'react-router-dom'

import './Home.scss';

const Home = () => {
    return (
        <div>
            <section >
                <div className="container">
                    <div className="welcome">
                        <h1>Welcome to the Store</h1>
                        <Link to="products/newProduct"> <div className="look">Look</div></Link>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Home;
