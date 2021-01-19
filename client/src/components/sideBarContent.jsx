import React from 'react'
import {Link} from 'react-router-dom'
import './sideBarContent.scoped.scss'

const name = "Ben"

const SideBarContent = () => {
  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="head">hello there,  {name}</h1>
      </div>
      <div className="line"></div>
      <div className="linkDiv">
      <Link to={{ pathname: '/latest-news' }} style={{ textDecoration: 'none' }}> 
        <div className="link">Latest News</div>
        </Link>
        <Link to={{ pathname: '/publications' }} style={{ textDecoration: 'none' }}> 
        <div className="link">Publications</div>
        </Link>
        <Link to={{ pathname: '/categories' }} style={{ textDecoration: 'none' }}> 
        <div className="link">Categories</div>
        </Link>
      </div>
      <div className="line"></div>
      <div className="linkDiv">
      <Link to={{ pathname: '/readinglist' }} style={{ textDecoration: 'none' }}> 
        <div className="link">Reading List</div>
        </Link>
        <Link to={{ pathname: '/archive' }} style={{ textDecoration: 'none' }}> 
        <div className="link">Archive</div>
        </Link>
      </div>
      <div className="line"></div>
      <div className="linkDiv">
        <div className="link link2">Settings</div>
      </div>

    </div >
  )
}

export default SideBarContent