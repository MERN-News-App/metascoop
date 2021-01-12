import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons'
import './contentCard.scoped.scss'

const title = "Lakers' new starter becomes their new star, helping LeBron James hold off the Bulls"
const url = "https://www.latimes.com/sports/lakers/story/2021-01-08/lakers-hold-off-late-bulls-rally-for-the-win"


const ContentCard = ({ articles }) => {

  // console.log(news.news[1].title)



  return (
    <>
      {articles.news.map((article) => (
        <div className="wrapper">
          <div className="outerContainer">
            <div className="tdiv">
              <div className="title">{(article.title.length >= 115)? `${article.title.substring(0,115)}...` : article.title}
              <span className="catDiv"></span>
              {article.category.map((cats) => (
                <span><button className="cats">{cats}</button></span>
              ))}
              </div>
            </div>
            <img src={article.image} alt="" className="hello" />
            <div className="urlDiv">{`${article.url.substring(0,40)} ...`}</div>
            <div className="iconDiv">
              <div className="plus"><span className="icon"><FontAwesomeIcon icon={faPlusCircle} /></span></div>
              <div className="push"><button className="sum">SUM</button></div>
              <div className="folder"><span className="icon"><FontAwesomeIcon icon={faFolder} /></span></div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ContentCard