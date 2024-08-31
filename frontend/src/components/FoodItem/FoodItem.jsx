import React from 'react'
import './FoodItem.css'
const FoodItem = ({id,name,price,description,image}) => {

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={} alt="" />
        </div>
      </div>
    </div>
  )
}

export default FoodItem
