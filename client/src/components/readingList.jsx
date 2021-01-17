import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFolder } from '@fortawesome/free-solid-svg-icons'
import './contentCard.scoped.scss'
import './readingList.scoped.scss'
import Date from './date.jsx'


import {daysList} from '../readinglist/data'

console.log("SSSSSSS", daysList[2].articles)


const date = daysList[1]

const ReadingList = () => {

  console.log("this", daysList[0].articles)


  
  

  return (
    <> 

   

  
  
  { Object.keys(daysList).length > 0 && daysList.map((day) => {
    console.log("JUST HERE",day.date)
    return(
    <div className="spacer">
   
    <Date date={day.date}/>

    { Object.keys(day.articles).length > 0 && day.articles.map((article) => {
      console.log("SOMME", article)

      return(
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
      </div>
      )
  })}



    </>
  )
 
}

export default ReadingList