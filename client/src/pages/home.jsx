import React from "react";
import MenuBar from '../components/menuBar.jsx'
import Header from "../components/header.jsx" 
import Content from "../components/content.jsx"
import SIDE from '../components/sidebar'


const Home = () => {
  return (
    <div>
     
      <MenuBar />
      <Header />
      <Content />
      <Content />
      <Content />
      <Content />
    </div>
  );
}

export default Home
