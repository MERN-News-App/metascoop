import React, {useState} from "react";
import Sidebar from "react-sidebar";
 

const SIDE = ({sidebarOpen, onSetSidebarOpen}) => {


const MousClick = (open) => {
onSetSidebarOpen({ sidebar: open})
}

  return (
    <Sidebar
    sidebar={<b>Sidebar content</b>}
    open={sidebarOpen}
    onSetOpen={onSetSidebarOpen}
    styles={{ sidebar: { background: "white" } }}
  >
  
  </Sidebar> 
  )
}

export default SIDE
