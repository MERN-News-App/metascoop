import React from "react";
import "./styles.css";
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
