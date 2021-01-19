import React from "react";
import MenuBar from '../components/menuBar.jsx'
import Publications from '../components/publications.jsx'
import Title from '../components/title.jsx'

const title = "Publications"

const CategoriesPage = () => {
  return (
    <div>
      <MenuBar />
      <Title title={title} />
      <Publications />
    </div>
  );
}

export default CategoriesPage
