import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import ChatMain from "./pages/chat/ChatMain";

function App() {
  return (
    <Router>
      <Route exact path="/" component = {Login}/>
      <Route exact path="/Chat" component = {ChatMain}/>
      </Router>
  );
  }
export default App;
