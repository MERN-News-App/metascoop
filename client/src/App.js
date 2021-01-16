// eslint-disable-next-line
import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
import Router from "./route/routes";
import './styles.scss'
import  { BreakpointProvider } from 'react-socks';




export default function App() {
  return (
    <div>


      <BreakpointProvider>
          <Router />    
      </BreakpointProvider>


    </div>
  );
}
