import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFolder } from '@fortawesome/free-solid-svg-icons'
import './contentCard.scoped.scss'
import Date from './date.jsx'

import {day1,day2,day3} from '../readinglist/data.js'

const days = [day1, day2, day3]
const date = "Monday 30th August"

const ReadingList = () => {
// const ReadingList = ({ apiURL }) => {

console.log( "here dude",day3)
  
  const [articles, setArticles] = useState(days[2])
  
  

  return (
    <>
    <Date date={date}/>


      { Object.keys(articles).length > 0 && articles.map((article) => {
        //cannot fix waring for unique child id
        // console.log(article.id)
      return (
      
        <div className="wrapper" key={article.id.toString()}>
          <div className="outerContainer" >
            <div className="tdiv">
              <div className="title" >{(article.title.length >= 115) ? `${article.title.substring(0, 115)}...` : article.title}
                <span className="catDiv"></span>
                {article.category.map((cats) => (
                  <span key={cats}><button className="cats" >{cats}</button></span>
                ))}
              </div>
            </div>
            <img src={article.image} alt="" className="hello" />
            <div className="urlDiv">{`${article.url.substring(0, 40)} ...`} </div>
            <div className="iconDiv">
              <div className="plus"><span className="icon"><FontAwesomeIcon icon={faPlusCircle} /></span></div>
              <div className="push"><button className="sum">SUM</button></div>
              <div className="folder"><span className="icon"><FontAwesomeIcon icon={faFolder} /></span></div>
            </div>
          </div>
        </div>
      )

      })}
    </>
  )
 
}

export default ReadingList