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
                        <span><Link to="/products/:_id">Take a look...</Link></span>
                    </div>
                </div>
            </section>

        </div >
    )
}

export default Home;
