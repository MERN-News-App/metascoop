import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons'
import './contentCard.scoped.scss'

const title = "Lakers' new starter becomes their new star, helping LeBron James hold off the Bulls"
const url = "https://www.latimes.com/sports/lakers/story/2021-01-08/lakers-hold-off-late-bulls-rally-for-the-win"


const ContentCard = () => {
  return (
    <div className="wrapper">
      <div className="outerContainer">
        <div className="tdiv">
          <div className="title">{title}
            <span><button className="cats">sports</button></span>
            <span><button className="cats">finance</button></span>
          </div>
        </div>
        <img src="https://ca-times.brightspotcdn.com/dims4/default/4506919/2147483647/strip/true/crop/4226x2377+0+220/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F98%2Fc5%2F2c7158b54a778ee3e9119cfe4517%2Fbulls-lakers-basketball-82900.jpg" alt="" className="hello" />
        <div className="urlDiv">{url}</div>
        <div className="iconDiv">
          <div className="plus"><span className="icon"><FontAwesomeIcon icon={faPlusCircle} /></span></div>
          <div className="push"><button className="sum">SUM</button></div>
          <div className="folder"><span className="icon"><FontAwesomeIcon icon={faFolder} /></span></div>
        </div>
      </div>
    </div>


  )
}

export default ContentCard