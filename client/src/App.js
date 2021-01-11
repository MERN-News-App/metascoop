// eslint-disable-next-line
import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import Router from "./route/routes";
import Routes from "./route/routes";
import './styles.scss'
import  { BreakpointProvider } from 'react-socks';



export default function App() {
  return (
    <div>
      <BreakpointProvider>
        <Router>
          <Routes />
        </Router>
      </BreakpointProvider>
    </div>
  );
}
