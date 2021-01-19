import React from 'react';
import './date.scoped.scss'

const Date = ({date}) => {
    return(
        <div className="outerContainer">
            <div className="innerContainer">
            <h1 className="text">{date}</h1>
            <div className="small">{date}</div>
            </div>
        </div>
    )
}

export default Date