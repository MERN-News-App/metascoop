import React from 'react';
import './header.scoped.scss'

const Header = () => {
  return(
      <div className="outerContainer">
          <div className="item">
              <img src="latest-newsO.jpg" alt="" className="image"/>
              <span className="text">Latest</span>
          </div>
          <div className="item">
              <img src="publicationsO.jpg" alt="" className="image"/>
              <span className="text">Publications</span>
          </div>
          <div className="item">
              <img src="categoriesO.jpg" alt="" className="image"/>
              <span className="text">Categories</span>
          </div>   
      </div>
  )
}

export default Header