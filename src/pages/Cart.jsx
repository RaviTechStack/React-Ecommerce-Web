import React, { useEffect } from 'react'
import "./cart.css"
import CartItem from '../components/CartItem/CartItem'
import { useCartContext } from '../context/CartContext'
import Nav from '../components/navbar/Nav'
import Footer from '../components/footer/Footer'

const Cart = () => {
  const { cart, cartAmount, deliveryFees, Discount, clearCart} = useCartContext()
  if (cart.length === 0) {
    return (
      
      <div className="noData center">
        <h1>No Data in Cart</h1>
      </div>
    )
  }
  else {
    return (
      <>
      <Nav />
      <div className="cartContainer">
        <div className="grid-five-column cart-heading-container">
          <p>item</p>
          <p>price</p>
          <p>quantity</p>
          <p>subtotal</p>
          <p>remove</p>
        </div>
        <hr className='underline' />
        <div className="cartshown">
          {cart && cart.map((curEle, index) => {
            return (<CartItem key={index} value={{ ...curEle }} />)
          })}
        </div>
        <hr className='underline' />
        <div className="clearButton">
          <button onClick={clearCart} className='clrCartBtn'>Clear Cart</button>
        </div>
        <div className="TotalAomountContainer flex-col">
          <div className="cartTotalPrice flex-col">
            <div className="subTotal flex">
              <p>Sub Total</p>
              <p>{cartAmount}</p>
            </div>
            <div className="shipping flex">
              <p>Shipping Fees</p>
              <p>{deliveryFees}</p>
            </div>
            <div className="discount flex">
              <p>Discount</p>
              <p>{Discount}</p>
            </div>
            <hr />
            <div className="TotalCartAmount flex">
              <p>Total Amount</p>
              <p>{cartAmount + deliveryFees + Discount}</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />
      </>
    )
  }
}


export default Cart
