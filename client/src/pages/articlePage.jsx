import React, { useState } from "react";
import { useSelector } from 'react-redux';





import ContentCard2 from "../components/contentCard2.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'





const ArticlePage = () => {

const newsObj = useSelector((state) => state.newsObjects)
console.log(newsObj.apiURL, "YOOOOOOOOO")

const title = useState(newsObj.title) 
const apiURL = useState(newsObj.apiURL)


  return (
    <div>
      <MenuBar />
      
      <Title title={title}/>
     
      <ContentCard2 apiURL={ apiURL }/>
    </div>
  );
}

export default ArticlePage
