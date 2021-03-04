import React from 'react'
import './Footer.scss'
const Footer = () => {
    return (
        <footer>
            <div className="containter">
                <div className="info" >
                    <h3>HOME</h3>
                    <p> Our Story.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui illum nesciunt corporis, dicta laudantium commodi inventore dolorem error tempore cupiditate est quasi ea nemo. Rerum ex voluptatem alias eligendi!</p>

                </div>
                <div className="contact"  >
                    <h3>KEEP IN TOUCH</h3>

                </div>
            </div>
            <hr />
            <strong>
                {(new Date().getFullYear())}
            </strong>

        </footer>
    )
}

export default Footer
