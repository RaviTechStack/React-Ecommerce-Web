import React, { useState } from 'react'
import "./cartitem.css"
import { useCartContext } from '../../context/CartContext'
const CartItem = ({value}) => {
    const {id , culur, cartCount, name, price, image, stock} = value
    const [count, setCount] = useState(cartCount)
    const {deleteItem, decrement, increment} = useCartContext()
  return (
    <div className="grid-five-column cart-item">
        <div className="prod flex">
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className="name-color flex-col">
                <p className="name">{name}</p>
                <p className="color flex">Color : <button style={{backgroundColor: culur}} className='clr sml'></button></p>
            </div>
        </div>
        <div className="cartPrice">
            <p>{price}</p>
        </div>
        <div className="cartQuantity flex">
        <button onClick={()=>{decrement(id)}}>-</button>
        <p>{cartCount}</p>
        <button onClick={()=>{increment(id)}}>+</button>
        </div>
        <div className="cartPrice">
            <p>{price * cartCount}</p>
        </div>
        <div className="remove">
        <i className="fa-solid fa-trash" onClick={()=>(deleteItem(id))}></i>
        </div>
    </div>
  )
}

export default CartItem
