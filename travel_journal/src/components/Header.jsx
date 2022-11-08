import React from 'react'
import globe from '../assets/globe.png'

export const Header = () => {
  return (
    <div className='header'>
      <img src={globe} alt="earth globe" />
      <h3>my travel journal</h3>
    </div>
  )
}

export default Header;