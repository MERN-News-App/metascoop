import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

import { useDispatch } from 'react-redux'
import { updatePublication } from '../actions/newsObjects'

const Publications = () => {
  const [publication, setPublication] = useState('')
  const dispatch = useDispatch()

  // USE DISPATCH HERE 

  // useEffect(() => {
  // }, [setCategory])


  const mouseEnter = (arg) => () => {
    console.log("HOVER")
          setPublication(arg)
          dispatch(updateCategory(publication))
          console.log(publication)
  }

  const handleClick = (e) => {
  
    dispatch(updateCategory(publication))
  }

  return (
    <div className="margin">
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('soompi.com')}>soompi</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('washingtonpost.com')}>washington Post</button></Link>

    </div>
  )
}

export default Publications