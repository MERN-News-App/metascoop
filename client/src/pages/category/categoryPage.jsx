import React, {useState} from "react";
import MenuBar from '../../components/menuBar.jsx'
import ContentCard from "../../components/contentCard.jsx";
import Title from "../../components/title.jsx" 



const CategoryPage = ({cats}) => {

    const URL = () => {
        return `https://api.currentsapi.services/v1/search?category=${cats}&apiKey=pLe7rH90EDy1ZfcnxREvmUPPJ1Kh6fznQ_0v3VtIBngz1Fs0`
        
    } 

    const apiURL = useState(URL)

    console.log("HELLO", cats)
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
