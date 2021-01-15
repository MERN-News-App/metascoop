// eslint-disable-next-line
import React, { useContext } from 'react';
// import { useDispatch } from 'react-redux';
import Router from "./route/routes";
import './styles.scss'
import  { BreakpointProvider } from 'react-socks';
import ApiContext from './api/apiContext'

const category = "food"

export default function App() {
  return (
    <div>
<ApiContext.Provider value={category}>

      <BreakpointProvider>
          <Router />    
      </BreakpointProvider>

</ApiContext.Provider>
    </div>
  );
}
