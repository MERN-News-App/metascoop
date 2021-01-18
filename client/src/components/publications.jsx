import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './categories.scoped.scss'

import { useDispatch } from 'react-redux'
import { updatePublication } from '../actions/newsAPI'

const Publications = () => {
  const [publication, setPublication] = useState('')
  const dispatch = useDispatch()

  // USE DISPATCH HERE 

  // useEffect(() => {
  // }, [setCategory])


  const mouseEnter = (arg) => () => {
    console.log("HOVER")
          setPublication(arg)
          dispatch(updatePublication(publication))
          console.log(publication)
  }

  const handleClick = (e) => {
  
    dispatch(updatePublication(publication))
  }

  return (
    <div className="margin">
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('soompi.com')}>soompi</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('washingtonpost.com')}>washington Post</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('edition.cnn.com')}>CNN</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('dailymail.co.uk')}>DailyMail UK</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('bbc.com')}>BBC</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('euronews.com')}>Euro News</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('time.com')}>Times News</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('sportingnews.com')}>Sporting News</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('marketwatch.com')}>Market Watch</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('abc.net.au')}>ABC</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('khaleejtimes.com')}>Khaleej Times</button></Link>
      <Link to={{pathname: '/publication'}} ><button onClick={handleClick} onMouseEnter={mouseEnter('theconversation.com')}>The Conversion</button></Link>

      

    </div>
  )
}

export default Publications