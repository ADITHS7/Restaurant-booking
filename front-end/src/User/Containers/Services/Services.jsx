import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div className='services' >
      <div className='heading'>
      <h1>Our services</h1>
      </div>
      <div className='service_containors'>
      <div className='service'>
      <i class="fa-solid fa-percent"></i>
      <p>Discount System</p>
      </div>

      <div className='service'>
      
      <i class="fa-solid fa-truck-fast"></i>
      <p>Express Delivery</p>
      </div>

      <div className='service'>
      <i class="fa-solid fa-store"></i>
      <p>30+ Restaurants</p>
      </div>

      <div className='service'>
      <i class="fa-solid fa-hand-peace"></i>
      <p>Best Quality</p>
      </div>
      </div>
      </div>
  )
}

export default Services