import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

import { useDispatch } from 'react-redux'
import { updateCategory } from '../actions/newsObjects'

const Categories = () => {
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()

  // USE DISPATCH HERE 

  // useEffect(() => {
  // }, [setCategory])


  const mouseEnter = (arg) => () => {
    console.log("HOVER")
          setCategory(arg)
          dispatch(updateCategory(category))
          console.log(category)
  }

  const handleClick = (e) => {
  
    dispatch(updateCategory(category))
  }

  return (
    <div className="margin">
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('food')}>FOOD</button></Link>
      <Link to={{pathname: '/topic'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('programming')}>PROGRAMMING</button></Link>

      <button>PublicationTEST</button>
      <button>Search</button>
    </div>
  )
}

export default Categories