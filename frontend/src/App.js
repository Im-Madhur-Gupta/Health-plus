import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Covid from "./Components/Covid/Covid"
import Signup from "./Components/Signup/Signup";
import Signin from "./Components/Signin/Signin";
import Map from "./Components/Map/Map";
import Navbar from "./Components/Navbar/Navbar";
import ReportCase from "./Components/ReportCase/ReportCase";
import Sos from "./Components/Sos/Sos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/"><Home /></Route>
        <Route exact path="/nearestHospital"><Map /></Route>
        <Route exact path="/sos"><Sos /></Route>
        <Route exact path="/login"><Signin /></Route>
        <Route exact path="/register"><Signup /></Route>
        <Route exact path="/covid"><Covid /></Route>
        <Route exact path="/reportcase"><ReportCase /></Route>
      </Router>
    </div>
  );
}

export default App;
