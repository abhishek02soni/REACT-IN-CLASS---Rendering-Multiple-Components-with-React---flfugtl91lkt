import React, {Component, useState} from "react";
import '../styles/App.css';
import Name from "./Name";
import Description from "./Description";
const App = () => {
  return (
    <div id="main">
     <Name  data-ns-test ="project-name"/>
     <Description data-ns-test ="project-description"/>
    </div>
  )
}


export default App;
