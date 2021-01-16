import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

import {useDispatch} from 'react-redux'
import {updateCategory} from '../actions/newsObjects'

const Categories = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

// USE DISPATCH HERE 


const handleClick = (cat) => (e) => {
  e.preventDefault();
  setCategory(cat)
  dispatch(updateCategory(category))
}

  return (
    <div className="margin">
      {/* FOOD */}
      <Link
        to={{
          pathname: '/category'  
        }} >
      <button onClick={handleClick('fooood')} onMouseEnter={() => console.log("HOVER")}>FOOD</button>
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