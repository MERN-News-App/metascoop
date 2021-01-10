import React from 'react';
import './header.scoped.scss'

const Header = () => {
  return(
      <div className="outerContainer">
          <div className="item">
              <img src="latest-newsO.jpg" alt="" className="image"/>
          </div>
          <div className="item">
              <img src="publicationsO.jpg" alt="" className="image"/>
          </div>
          <div className="item">
              <img src="categoriesO.jpg" alt="" className="image"/>
          </div>   
      </div>
  )
}

export default Header