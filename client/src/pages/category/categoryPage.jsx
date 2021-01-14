import React, {useState} from "react";
import MenuBar from '../../components/menuBar.jsx'
import ContentCard from "../../components/contentCard.jsx";
import Title from "../../components/title.jsx" 



const CategoryPage = ({ category }) => {

    const URL = () => {
        return `https://api.currentsapi.services/v1/search?category=${category}&apiKey=X2DqXEqyVN2kKq2QJPwiiZZ-xpRGdj7EEFCqpfDjv6CuX-fD` 
    } 

    const apiURL = useState(URL)

    console.log("HELLO", category)
    console.log("hello")


  return (
    <div>
      <MenuBar />
      <Title />
      <ContentCard apiURL={ apiURL }/>
    </div>
  );
}

export default CategoryPage
