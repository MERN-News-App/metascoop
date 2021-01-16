// eslint-disable-next-line
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from "./route/routes";
import './styles.scss'
import  { BreakpointProvider } from 'react-socks';

import { fetchCategory } from './actions/newsObjects'




export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch])


  return (
    <div>


      <BreakpointProvider>
          <Router />    
      </BreakpointProvider>


    </div>
  );
}
