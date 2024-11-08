import React, { useState } from 'react'
import "./proddetail.css"
import Color from '../colors/Color'
import { useCartContext } from '../../context/CartContext'

const ProdDetail = ({data}) => {
  console.log(data)
  const {addData} = useCartContext()
  const {name, colors, price, stock} = data
  // console.log(name, colors)
  const [culur, setCulur] = useState(colors && colors[0])
  const [count, setCount] = useState(1)
  return (
    <div className='prod-detail flex'>
      <h2 className="heading">{name}</h2>
      <div className="stars">
      <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
      </div>
      <h3 className="mrp flex"><h3 className='prod-titles'>MRP :</h3><span className="line" style={{textDecoration: "line-through"}}>60000</span><span className="deal">{price}</span></h3>
      <p className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptatum, nostrum sunt quidem distinctio nemo perspiciatis beatae alias est, ullam officia blanditiis praesentium repellendus esse odit repudiandae quas cumque quae.

      </p>
      <div className="colors flex">
        <h4 className='prod-titles'>colors :</h4>
        <div className="clrs flex">
          {
           colors && colors.map((curr, inde)=>{
              return(
                <button key={inde} style={{backgroundColor: curr }} className={culur===curr? "active-color clr" :"clr" } onClick={()=>(setCulur(colors[inde]))}>
                </button>
              )
            })
          }
        </div>
      </div>
      <div className="counter flex">
        <button onClick={()=>(
          setCount(count==1? 1 : count-1)
        )}>-</button>
        <p>{count}</p>
        <button onClick={()=>(
          setCount(count==stock? stock : count+1)
        )}>+</button>
      </div>
      <div className="Act-btn">
        <button  onClick={()=>(addData(data, culur, count))}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProdDetail
