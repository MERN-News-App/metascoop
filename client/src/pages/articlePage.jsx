import React, { useState } from "react";




import ContentCard2 from "../components/contentCard2.jsx";
import MenuBar from '../components/menuBar.jsx';
import Title from '../components/title.jsx'





const ArticlePage = () => {

//USE SELECTOR HERE


//RETURN OBJECT.title HERE
const category ="food"

//RETURN OBJECT.apiURL HERE
const URL = () => {
    return `https://api.currentsapi.services/v1/search?category=${category}&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD` 
} 

const apiURL = useState(URL)


//WE WANT TO PASS THESE DOWN AS PROPS

    console.log("THIS ONE", URL)
    console.log("hello")


  return (
    <div>
      <MenuBar />
      <Title category={category}/>
      <ContentCard2 apiURL={ apiURL }/>
    </div>
  );
}

export default ArticlePage