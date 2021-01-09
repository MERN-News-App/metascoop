// eslint-disable-next-line
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
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
