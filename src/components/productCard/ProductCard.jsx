import React from 'react'
import "./ProductCard.css"
const ProductCard = ({img, name, price}) => {
  return (
    <div className='productCard'>
      <div className="overlay center">
        <h3>{name}</h3>
      </div>
        <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>₹{price}</h3>
    </div>
  )
}

export default ProductCard
