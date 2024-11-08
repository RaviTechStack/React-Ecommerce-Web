import React from 'react'
import "./listProd.css"

const ListProd = ({productData}) => {
  return (
    <div className="grid-two-column listView">
        <figure className='center'>
            <img src={productData.image} alt="" />
        </figure>
        <div className="prod-details">
          <h3>{productData.name}</h3>
          <p className='price'>{productData.price}</p>
           <p>{productData.description.slice(0, 100)}</p> 
            
            
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default ListProd
