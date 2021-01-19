import React from 'react';
import './header.scoped.scss'

const Header = () => {
  return(
      <div className="spacer">
      <div className="outerContainer">
          <div className="item">
              <img src="latest-newsO.jpg" alt="" className="image"/>
              <span className="text">Latest News</span>
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
      </div>
  )
}

export default Header