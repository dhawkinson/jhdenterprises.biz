// Graphic.js
// ********************************************************
// ***** client side - src/components/Graphic.js  *****
// ***** This is the Graphic for the App         *****
// ********************************************************

// node modules
import React from 'react';
import NetworkImage from '../../assets/images/network-3152677_1920.jpg';

const Graphic = () => {
  
  return (
    <div className='graphic'>
      <img src={NetworkImage} alt="network" className='network-img'/>
      <h3 class="centered">Click on an area of interest below! See where it leads!</h3>
    </div>
  )
}

export default Graphic;