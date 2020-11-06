import React from 'react';
import { NavLink } from 'react-router-dom';

import './Home.scss';
const Home = () => {
    return (
        <section >
            <div className="container">
                <div className="welcome">
                    <h1>Welcome to the Store</h1>
                    <NavLink to="/"><span>Look for...</span></NavLink>
                </div>
            </div>
        </section>
    )
}

export default Home;