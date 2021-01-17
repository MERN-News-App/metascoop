import React, { useState } from "react";
import { useSelector } from 'react-redux';





import ContentCard from "../components/contentCard.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'





const ReadPage = () => {

// const newsObj = useSelector((state) => state.newsObjects)
// console.log(newsObj.apiURL, "YOOOOOOOOO")

const [title]= useState("Reading List")
// const apiURL = useState(newsObj.apiURL)



  return (
    <div>
      <MenuBar />
      
      <Title title={title}/>
      <ReadingList />
      <ContentCard apiURL={ apiURL }/>
    </div>
  );
}

export default ReadPage
