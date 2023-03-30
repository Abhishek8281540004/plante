import React from 'react'
import './contents.css'
import Cards from '../cards/Cards'

function Contents() {
  return (
    <div className='main'>
      <div className="grid">
    <div className="nav"><h1 className='wel'>Welcome to Plante</h1>
    
    </div>
    <div className="cont">
      <div className="banner">
        
      <h2 className='head'>Create and sell Plants</h2>
      
       
      
        <button className='btn'>Explore</button>
        <button className='btn2'>Sell</button>
      
      </div>
      <div className="trend">
     
      <img className='trendimg' src="https://images.pexels.com/photos/2922353/pexels-photo-2922353.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <h1 className="trendheading">Trends</h1>
      <h2 className="tre">check out this..</h2>
      </div>
      </div>
      <div className="plant">
        <h1 className='pla'>plants</h1>
        <Cards/>
      </div>
      </div>
    </div>
  )
}

export default Contents

