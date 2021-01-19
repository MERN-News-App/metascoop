import React from 'react';
import { Link } from 'react-router-dom'
import './header.scoped.scss'

const Header = () => {
    return (
        <div className="spacer">
            <div className="outerContainer">
                <div className="item">
                    <Link to={{ pathname: '/latest-news' }} style={{ textDecoration: 'none' }}>
                        <img src="latest-newsO.jpg" alt="" className="image" />
                        <span className="text">Latest News</span>
                    </Link>
                </div>

                <div className="item">
                    <Link to={{ pathname: '/publications' }} style={{ textDecoration: 'none' }}>
                        <img src="publicationsO.jpg" alt="" className="image" />
                        <span className="text">Publications</span>
                    </Link>
                </div>
                <div className="item">
                    <Link to={{ pathname: '/categories' }} style={{ textDecoration: 'none' }}>
                        <img src="categoriesO.jpg" alt="" className="image" />
                        <span className="text">Categories</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header