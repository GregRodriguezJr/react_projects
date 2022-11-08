import React from 'react'
import pin from '../assets/pin.png'

const Card = (props) => {
  return (
    <div className='card-container'>
        <img 
            src={props.trip.imageUrl} 
            alt="travel images" 
            className='image'
        />
        <div className='card-content'>
            <div className='location-details'>
                <img src={pin} alt="location dot" />
                <p>{props.trip.location.toUpperCase()}</p>
                <a href={props.trip.googleMapsUrl} target="_blank">View on google maps</a>
            </div>
            <h2>{props.trip.title}</h2>
            <p>
                <strong>
                    {`${props.trip.startDate} - ${props.trip.endDate}`}
                </strong>
            </p>
            <p className='description'>{props.trip.description}</p>
        </div>
    </div>
  )
}

export default Card