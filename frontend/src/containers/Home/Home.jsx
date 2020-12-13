import React, { useEffect, useRef } from 'react';

import Products from '../../components/AllProducts/Products';
import './Home.scss';

const Home = () => {
    const myRef = useRef(null);
    const onScroll = () => myRef.current.scrollIntoView();
    useEffect(() => {
        onScroll();
    }, [])

    return (
        <div>
            <section >

                <div className="container">
                    <div className="welcome">
                        <h1>Welcome to the Store</h1>
                        <span onClick={onScroll}>Take a look...</span>
                    </div>
                </div>
            </section>
            <div ref={myRef}>
                <Products />
            </div>
        </div >
    )
}

export default Home;
