import React from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

const Categories = () => {
  return (
    <div className="margin">
      <Link
        to={{
          pathname: '/food'  
        }} >
      <button onClick={() => console.log("CLICK")} onMouseEnter={() => console.log("HOVER")}>FOOD</button>
        </Link>

      <button>hello</button>
      <button>game</button>
    </div>
  )
}

export default Categories