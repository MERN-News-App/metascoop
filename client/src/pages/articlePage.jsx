import React, { useState } from "react";
import { useSelector } from 'react-redux';





import ContentCard from "../components/contentCard.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'





const ArticlePage = () => {

const newsObj = useSelector((state) => state.newsObjects)
// console.log(newsObj.apiURL, "YOOOOOOOOO")

const [title]= useState(newsObj.title)
const apiURL = useState(newsObj.apiURL)



  return (
    <div>
      <MenuBar />
      
      <Title title={title}/>
     
      <ContentCard apiURL={ apiURL }/>
    </div>
  );
}

export default ArticlePage
