import React from "react";
import { BrowserRouter } from 'react-router-dom'
import Sidebar from "./components/Sidebar";
import MainPanal from './components/MainPanel'
// import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="wrapper ">
      <BrowserRouter>
        <Sidebar />
        <MainPanal />
      </BrowserRouter>
    </div>
  );
}

export default App;
