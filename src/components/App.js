import React, {Component, useState} from "react";
import '../styles/App.css';
import Name from "./Name";
import Des from "./Des";
const App = () => {
  return (
    <div id="main">
     <Name  data-ns-test ="project-name"/>
     <Des data-ns-test ="project-description"/>
    </div>
  )
}


export default App;
