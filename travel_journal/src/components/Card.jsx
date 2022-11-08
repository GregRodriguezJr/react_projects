import React from 'react'

const Card = (props) => {
  return (
    <div className='card-container'>
        <img 
            src={props.trip.imageUrl} 
            alt="travel images" 
            className='image'
        />
        <div>
            <div className='location-details'>
                <img src="" alt="location dot" />
                <p>{props.trip.location}</p>
                <a href={props.trip.googleMapsUrl} target="_blank">View on google maps</a>
            </div>
        </div>
    </div>
  )
}

export default Card