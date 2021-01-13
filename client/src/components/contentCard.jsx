import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons'
import './contentCard.scoped.scss'

const title = "Lakers' new starter becomes their new star, helping LeBron James hold off the Bulls"
const url = "https://www.latimes.com/sports/lakers/story/2021-01-08/lakers-hold-off-late-bulls-rally-for-the-win"


const ContentCard = ({ apiURL }) => {
  const [articles, setArticles] = useState({})


  async function fetchNews(){
    console.log(apiURL[0], "Fetch News Called")
    let newsData;
    let call = apiURL[0]
    try{
        newsData = await axios.get(call)
        setArticles(newsData.data.news)
    }
    catch(error){
        newsData = error
    }
    return newsData
}



  useEffect(() => {
    fetchNews()
  }, [])

  console.log("HELLO", articles)

  return (


    <>
      { Object.keys(articles).length > 0 && articles.map((article) => (
        <div className="wrapper">
          <div className="outerContainer">
            <div className="tdiv">
              <div className="title">{(article.title.length >= 115) ? `${article.title.substring(0, 115)}...` : article.title}
                <span className="catDiv"></span>
                {article.category.map((cats) => (
                  <span><button className="cats">{cats}</button></span>
                ))}
              </div>
            </div>
            <img src={article.image} alt="" className="hello" />
            <div className="urlDiv">{`${article.url.substring(0, 40)} ...`}</div>
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