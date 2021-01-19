import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import './categories.scoped.scss'
import './publications.scoped.scss'

import { useDispatch } from 'react-redux'
import { updatePublication } from '../actions/newsAPI'

const publications = ['soompi.com', 'washingtonpost.com', 'edition.cnn.com', 'dailymail.co.uk', 'bbc.com', 'euronews.com', 'time.com', 'sportingnews.com', 'marketwatch.com', 'abc.net.au', 'khaleejtimes.com', 'theconversation.com']

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
    <div className="outerContainer">
      <div className="innerContainer">
        <div className="row">
          <div className="flexLeft">
            {publications.map((pub) => {
              return (
                <div className="link">
                  <Link to={{ pathname: '/publication' }} ><button onClick={handleClick} onMouseEnter={mouseEnter(`${pub}`)}>{`${pub}`}</button></Link>
                </div>
              )
            })}
          </div>
          <div className="flexRight">
          {publications.map((pub) => {
              return (
                <div className="link">
                  <Link to={{ pathname: '/publication' }} ><button onClick={handleClick} onMouseEnter={mouseEnter(`${pub}`)}>{`${pub}`}</button></Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications