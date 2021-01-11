import React from 'react'
import './contentCard.scoped.scss'

const title = "Lakers' new starter becomes their new star, helping LeBron James hold off the Bulls"

const ContentCard = () => {
  return(
      <div className="wrapper">
        <div className="outerContainer">
          <div className="title">{title}</div>
          <h1 className="hello">hello there</h1>
        </div>
      </div>
  )
}

export default ContentCard