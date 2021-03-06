import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
    return (
        <section >
            <div className="container">
                <div className="welcome">
                    <h1>Welcome to the Store</h1>
                    <Link to="/products/:_id"> <div className="look">Look</div></Link>
                </div>
            </div>
        </section>
    )
}

export default Home;
