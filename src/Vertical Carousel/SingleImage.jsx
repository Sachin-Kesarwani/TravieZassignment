import React from 'react'
import "../Style/carousel.css"
const SingleImage = ({imageUrl,index}) => {
  return (
    <div key={index} className="carousel-item">
    <img src={imageUrl} alt={`Product ${index + 1}`}  />
  </div>
  )
}

export default SingleImage
