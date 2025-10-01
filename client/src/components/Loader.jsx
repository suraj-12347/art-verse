import React from 'react'
import './loader.css'
import mandalaImg from '../assets/mandala2.png'

const Loader = () => {
  return (
    <div
      className="loader mt-10"
      style={{
        backgroundImage: `url(${mandalaImg})`,
        width: "100px",
        height: "100px",
        
        backgroundSize: "cover",
      }}
    ></div>
  )
}

export default Loader
