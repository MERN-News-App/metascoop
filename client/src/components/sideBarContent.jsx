import React from 'react'
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
        <div className="link">Latest News</div>
        <div className="link">Publications</div>
        <div className="link">Categories</div>
      </div>
      <div className="line"></div>
      <div className="linkDiv">
        <div className="link">Reading List</div>
        <div className="link">Archive</div>
      </div>
      <div className="line"></div>
      <div className="linkDiv">
        <div className="link link2">Settings</div>
      </div>

    </div >
  )
}

export default SideBarContent