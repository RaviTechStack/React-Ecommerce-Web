import React from 'react'
import "./FeatureCard.css"

const FeatureCard = ({icon, heading, para}) => {
  return (
    <div className='card center'>
      <div className="icon"><i className={`fa-solid ${icon}`}></i></div>
      {/* <i class="fa-solid "></i>
      <i class="fa-solid "></i>
      <i class="fa-solid "></i> */}
      <h3>{heading}</h3>
      <p>{para}</p>
    </div>
  )
}

export default FeatureCard
