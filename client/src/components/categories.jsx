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


  // const handleClick = (cat) => (e) => {
  //   setCategory(cat)
  //   e.preventDefault();
  //   dispatch(updateCategory(category))
  // }

  const handleClick = (e) => {
    // setCategory(cat)
    // e.preventDefault();
    dispatch(updateCategory(category))
  }

  return (
    <div className="margin">
      {/* FOOD */}
      <Link
        to={{
          pathname: '/articlepage'
        }} >
        <button onClick={handleClick} onMouseEnter={() => {
          console.log("HOVER")
          setCategory('programming')
          dispatch(updateCategory(category))
          console.log(category)
        }}>FOOD</button>
      </Link>
      {/* FINANCE */}
      <Link
        to={{
          pathname: '/category'
        }} >
        <button onClick={handleClick('finance')} onMouseEnter={() => console.log("HOVER")}>FINANCE</button>
      </Link>

      <button>Publication</button>
      <button>Search</button>
    </div>
  )
}

export default Categories