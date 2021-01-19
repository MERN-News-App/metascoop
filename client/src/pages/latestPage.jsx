import React, { useState } from "react";
import MenuBar from '../components/menuBar.jsx'
import Title from '../components/title.jsx' 
import ContentCard from '../components/contentCard.jsx'


const LatestNews = () => {
    const [title] = useState("Latest News")
    const apiURL = useState('https://api.currentsapi.services/v1/latest-news/?&&page_number=1&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD')
  
  return (
    <div>
      <MenuBar />
      <Title title={title}/>
      <ContentCard apiURL={apiURL}/>
    </div>
  );
}

export default LatestNews
