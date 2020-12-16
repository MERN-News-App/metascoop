import React from "react";
import "./styles.scss";
import Router from "./route/routes";
import Routes from "./route/routes";


export default function App() {
  return (
    <div>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}
