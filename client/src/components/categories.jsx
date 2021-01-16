import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

const Categories = () => {

// USE DISPATCH HERE 


  return (
    <div className="margin">
      {/* FOOD */}
      <Link
        to={{
          pathname: '/category'  
        }} >
      <button onClick={() => console.log("CLICK")} onMouseEnter={() => console.log("HOVER")}>FOOD</button>
        </Link>
        {/* FINANCE */}
        <Link
        to={{
          pathname: '/category'  
        }} >
      <button onClick={() => console.log("CLICK")} onMouseEnter={() => console.log("HOVER")}>FINANCE</button>
        </Link>

      <button>Publication</button>
      <button>Search</button>
    </div>
  )
}

export default Categories