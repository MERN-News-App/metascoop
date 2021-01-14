import React from "react";
import MenuBar from '../components/menuBar.jsx'
import Categories from '../components/categories.jsx'



const CategoriesPage = ({ category }) => {
  return (
    <div>
      <MenuBar />
      <Categories category={ category }/>
    </div>
  );
}

export default CategoriesPage
