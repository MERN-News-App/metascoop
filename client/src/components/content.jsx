import React from 'react'
import './content.scoped.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Content = () => {
  return(
      <div className="outerContainer">
          <div className="innerContainerLeft">
            <div className="title">Lakers' new starter becomes their new star, helping LeBron James hold off the Bulls</div>
            </div>
          <div className="innerContainerRight">
            <img src="https://ca-times.brightspotcdn.com/dims4/default/4506919/2147483647/strip/true/crop/4226x2377+0+220/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F98%2Fc5%2F2c7158b54a778ee3e9119cfe4517%2Fbulls-lakers-basketball-82900.jpg" alt="" className="image"/>
          </div>
          <div className="innerContainerLeftUnder">
          <span className="icon">
                    <FontAwesomeIcon icon={faPlusCircle} size="3x" className="plus" />
                </span>
          </div>
      </div>
  )
}

export default Content