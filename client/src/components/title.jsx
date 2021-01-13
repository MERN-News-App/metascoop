import React from "react";
import './title.scoped.scss'

const Title = ({ title }) => {
  return (
    <div className="outerContainer">
      <h1 className="title">{title}</h1>;
    </div>
  )
};

export default Title;
