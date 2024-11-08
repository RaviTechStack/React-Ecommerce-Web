import React from 'react'
import Nav from '../navbar/Nav'
import "./Hero.css"
import { useProdContext } from '../../context/ProductContext'
import { Link } from 'react-router-dom'
const Hero = () => {
  const { initialState } = useProdContext()
  return (
    <main className='header'>
      <div className="heroContainer flex">
        <div className="heroImg">
        <img src="./shopping.png" alt="" />
        </div>
        <div className="hero-details">
        <h3>Stay Designer</h3>
        <h2>Choose Designer</h2>
        <div className="btns flex">
          <Link to={"/allprod"}> <button>Shop</button></Link>
          <button>Learn More</button>
        </div>
      </div>
      </div>
      
    </main>
  )
}

export default Hero
