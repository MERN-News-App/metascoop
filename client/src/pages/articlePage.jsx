// import React, { useState } from "react";
// import { useSelector } from 'react-redux';

import React from 'react'





import ContentCard2 from "../components/contentCard.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'


const title ="tile"
const apiURL="htttp"


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
