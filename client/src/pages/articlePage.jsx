import React, { useState } from "react";
import { useSelector } from 'react-redux';





import ContentCard2 from "../components/contentCard.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'





const ArticlePage = () => {





  return (
    <div>
      <MenuBar />
      
      <Title title={title}/>
     
      <ContentCard2 apiURL={ apiURL }/>
    </div>
  );
}

export default ArticlePage
