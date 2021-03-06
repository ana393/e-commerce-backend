import React from 'react';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">

                <article className="info" >
                    <h3 className="hInfo">HOME</h3>
                    <hr className="hrInfo" />
                    <div className="text">
                        <strong >You find us here</strong>
                        <p>20040, Spain, Madrid Gran Via Street, 23</p>
                    </div>
                </article>
                <article className="follow" >
                    <h3 className="hFollow">FOLLOW US</h3>
                    <hr className="hrFollow" />
                    <ul>
                        <li>
                            <InstagramOutlined />
                        </li>
                        <li>
                            <FacebookOutlined />
                        </li>
                        <li>
                            <TwitterOutlined />
                        </li>
                    </ul>
                </article>
                <article className="contact"  >
                    <h3 className="hContact">KEEP IN TOUCH</h3>
                    <hr className="hrContact" />
                    <div className="send">
                        <h3><PhoneOutlined /> +34  915522334</h3>
                        <strong><MailOutlined /> MIMO@ecommerce.com</strong>
                    </div>
                </article>

            </div>
            <article className="allRights">
                <strong>
                    {(new Date().getFullYear())} &copy; MIMO .All Rights Reserved
                    </strong>
            </article>
        </footer>
    )
}

export default Footer
