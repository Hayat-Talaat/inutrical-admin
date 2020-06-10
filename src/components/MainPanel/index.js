import React from "react";
import NavBars from './NavBar/NavBar'
import Content from './Content';

const MainPanal = () => {
  return (
      <div className="main-panel">
      <NavBars />
      <Content/>
    </div>
  );
};

export default MainPanal;
