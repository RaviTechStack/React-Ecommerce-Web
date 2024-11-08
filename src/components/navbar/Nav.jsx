import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
const Nav = () => {
  const {CartValue} = useCartContext()
  return (
    <nav className='flex'>
        <h1 className='logo'>myCart.com</h1>
        {/* <div className="search">
          <input type="text" /><button><i className="fa-solid fa-magnifying-glass"></i></button>
        </div> */}
        <ul className='flex'>
                <Link to={"/"} className='links'> <li>Home</li></Link>
                <Link to={"/about"} className='links'> <li>About</li></Link>
                <Link to={"/allprod"} className='links'> <li>Products</li></Link>
                <Link to={"/cart"} className='links'> <li>Cart</li></Link>
            
        </ul>
        <div className="buttons">
          <div className="cart-btn"><span>{CartValue}</span><Link to={"/cart"} className='links'><i className="fa-solid fa-cart-shopping"></i></Link></div>
          <div className="user-btn"><i className="fa-solid fa-user"></i></div>
        
        
        </div>
    </nav>
  )
}

export default Nav
