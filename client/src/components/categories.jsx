import React from 'react'
import './categories.scoped.scss'

const Categories = () => {
  return(
      <div className="margin">
        <button onClick={() => console.log("CLICK")} onMouseEnter={() => console.log("HOVER")}>health</button>
        <button>food</button>
        <button>game</button>
      </div>
  )
}

export default Categories