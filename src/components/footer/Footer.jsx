import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className="grid-four-column">
                <div className="logo-about">
                    <h2>MyCart.com</h2>
                </div>
                <div className="contactUs">
                    <h5 className="heading">Contact Us</h5>
                    <div className="contact-detail flex-col">
                        <p>+91 548545855</p>
                        <p>Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit. Qui voluptatibus facilis
                        </p>
                        <p>mycartsupport@gamil.com</p>
                    </div>
                </div>
                <div className="links-menu">
                    <h5 className="heading">Links</h5>
                    <ul className='flex-col'>
                    <Link to={"/"} className="links"> <li>Home</li></Link>
                    <Link to={"/about"} className="links"> <li>About</li></Link>
                    <Link to={"/allprod"} className="links"> <li>Products</li></Link>
                        
                    <Link to={"/cart"} className="links"> <li>Cart</li></Link>
                    </ul>
                </div>
                <div className="newsLetter flex-col">
                    <div className="inputLetter flex">
                        <input type="text" placeholder='Subscribe for Newsletter' />
                        <button>&#8594;</button>
                    </div>

                    <div className="icons flex">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-github"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
