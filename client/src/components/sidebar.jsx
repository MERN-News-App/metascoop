import React, { useState } from "react";
import Sidebar from "react-sidebar";
import SideBarContent from "./sideBarContent.jsx";

const styles = {
  sidebar: {
    background: "white"
  }
};

const SIDE = ({ sidebarOpen, onSetSidebarOpen }) => {
  const MousClick = open => {
    onSetSidebarOpen({ sidebar: open });
  };

  return (
    <Sidebar
      sidebar={<SideBarContent />}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={styles}
    />
  );
};

export default SIDE;
